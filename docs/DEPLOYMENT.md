# Deploying to Oracle Cloud (Always Free)

This is the exact pipeline the live site uses:

```
git push → GitHub Actions → build Docker image → push to GHCR
         → SSH into Oracle VM → docker compose pull && up -d → live
```

One-time setup takes ~30–45 minutes. After that, every merge to `main`
deploys itself.

---

## 1. Create the Oracle VM

1. Oracle Cloud → **Instances → Create instance**
2. Image: **Ubuntu 24.04**, Shape: **VM.Standard.E2.1.Micro** (amd64, always free)
   - or `VM.Standard.A1.Flex` (ARM, more RAM) — if you choose ARM, uncomment
     the `platforms: linux/arm64` line in `.github/workflows/deploy.yml`
3. Add your SSH public key, create, and note the **public IPv4**.

## 2. Open ports 80/443

Oracle blocks traffic in **two** places — both must be opened:

- **VCN security list**: Virtual Cloud Networks → your VCN → Security Lists →
  Default Security List → Add Ingress Rules for TCP `0.0.0.0/0` port **80** and port **443**.
- **VM firewall** (Ubuntu image uses iptables + netfilter-persistent):

```bash
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 80 -j ACCEPT
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 443 -j ACCEPT
sudo netfilter-persistent save
```

## 3. Install Docker on the VM

```bash
ssh ubuntu@<VM_IP>
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER   # log out & back in after this
```

## 4. Point your domain at the VM

DNS provider (Cloudflare, Namecheap, …) → add an **A record**:

```
yourdomain.com  →  <VM public IPv4>
```

> No domain yet? A `.me`/`.xyz` domain costs ~RM10–50/year, or grab one free
> with the GitHub Student Developer Pack (.me via Namecheap). Worth it —
> `yourname.me` beats an IP address on a résumé.

## 5. Create the deploy secrets

GitHub repo → **Settings → Secrets and variables → Actions** → New repository secret:

| Secret          | Value                                                        |
| --------------- | ------------------------------------------------------------ |
| `ORACLE_HOST`   | VM public IPv4                                               |
| `ORACLE_USER`   | `ubuntu`                                                     |
| `ORACLE_SSH_KEY`| private key matching the public key you gave the instance    |
| `GHCR_PAT`      | GitHub **classic** PAT with only the `read:packages` scope — used by the VM to pull the image |

## 6. First manual run on the VM

```bash
mkdir -p ~/portfolio/deploy && cd ~/portfolio
# copy from the repo:
#   docker-compose.yml
#   deploy/Caddyfile
echo "DOMAIN=yourdomain.com" > .env

docker login ghcr.io -u YOUR_GITHUB_USERNAME   # paste the PAT as password
docker compose --profile edge up -d
```

Once the image exists in GHCR (after the first Actions run), this pulls it and
Caddy automatically gets your HTTPS certificate.

## 7. Ship it

Push to `main`. Watch **Actions → Deploy** run. ~2 minutes later the site is
live at `https://yourdomain.com`.

---

## Useful commands on the VM

```bash
docker compose logs -f portfolio   # app logs
docker compose logs -f caddy       # HTTPS / proxy logs
docker ps                          # what is running
docker stats                       # RAM/CPU usage
```

## Optional (recommended)

- **Uptime Kuma** on the homelab → monitor `https://yourdomain.com` and put
  the % on the portfolio stats strip.
- **WireGuard/Tailscale** → tunnel between Oracle VM and homelab, so homelab
  services can be exposed through the same domain without opening your home IP.

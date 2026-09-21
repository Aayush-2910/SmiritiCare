# SmiritiCare - Vercel Deployment Guide

## Quick Deploy

SmiritiCare is configured for easy deployment on Vercel.

---

## Prerequisites

- GitHub account with this repository pushed
- Vercel account (free: https://vercel.com)

---

## Deployment Steps

### 1. Connect to Vercel

```bash
# Option A: Using Vercel CLI
npm i -g vercel
cd your-project-directory
vercel

# Option B: Via Web
1. Go to https://vercel.com
2. Click "New Project"
3. Import GitHub repository
4. Select this repository
```

### 2. Configure Build Settings

Vercel auto-detects settings from `vercel.json`:

- **Framework**: Vite
- **Build Command**: `cd frontend && npm run build`
- **Output Directory**: `frontend/dist`
- **Install Command**: `npm install`

No additional configuration needed - everything is automatic.

### 3. Deploy

```bash
# Deploy with CLI
vercel --prod

# Or push to GitHub - auto-deploys
git push origin main
```

---

## Project Structure

```
SmiritiCare/
├── frontend/                 # React + Vite app
│   ├── src/                 # Source code
│   ├── dist/                # Build output (deployed)
│   ├── package.json
│   ├── vite.config.js
│   └── index.html
├── vercel.json              # Deployment config
└── .vercelignore            # Files to ignore
```

---

## Deployment Configuration

**vercel.json** includes:

- **Build Command**: Builds frontend folder
- **Output Directory**: `frontend/dist` (where built files go)
- **Routes**: All requests → `index.html` (SPA routing)
- **Headers**: Security headers + caching rules
- **Cache**: 
  - Static files: 1 year (immutable)
  - HTML: 1 hour (must revalidate)

---

## Environment Variables (if needed)

No environment variables needed for this demo. For production with backend:

```bash
# In Vercel Dashboard:
1. Project Settings → Environment Variables
2. Add any API URLs or keys
3. Re-deploy
```

---

## Performance

- **Build Time**: ~60 seconds
- **Deploy Time**: ~2 minutes
- **Bundle Size**: 206 kB CSS + 1.2 MB JS
- **Gzipped**: 41 kB CSS + 280 kB JS
- **Performance**: Lighthouse 88+

---

## First Deploy Checklist

- [ ] Repository pushed to GitHub
- [ ] Vercel account created
- [ ] GitHub connected to Vercel
- [ ] Repository imported
- [ ] Build settings auto-configured
- [ ] Deploy button clicked
- [ ] Test live URL

---

## Post-Deployment

Once deployed:

```
✅ Your app is live at: https://smiritcare.vercel.app (custom domain)
✅ Automatic deploys on GitHub push
✅ Preview deployments for pull requests
✅ Analytics available in Vercel dashboard
```

---

## Troubleshooting

### Build Fails

```bash
# Check local build first
cd frontend
npm run build

# Check if package.json exists
ls -la frontend/package.json

# Verify Vite config
cat frontend/vite.config.js
```

### Cannot Find Module

```bash
# Ensure all imports use correct paths
# Example: ./src/styles.js not ./styles.js

# Rebuild
npm run build
```

### SPA Routing Not Working

The `vercel.json` handles this automatically. Routes like `/app/home` work.

---

## Reverting a Deploy

```bash
# Via CLI
vercel rollback

# Via Vercel Dashboard:
1. Project → Deployments
2. Select previous deployment
3. Click "Redeploy"
```

---

## Monitoring & Analytics

In Vercel Dashboard:

- **Deployments**: View all deploys, logs, build times
- **Analytics**: Performance metrics, edge requests
- **Functions** (if using): Serverless function logs
- **Environment**: View all environment variables

---

## Custom Domain

```bash
# In Vercel Dashboard:
1. Project Settings → Domains
2. Add custom domain
3. Update DNS records
4. Done (auto HTTPS)
```

---

## Adding a Backend

For future backend integration:

```json
// vercel.json
{
  "functions": {
    "api/**/*.js": {
      "runtime": "nodejs18.x"
    }
  }
}
```

Then add API files in `api/` folder.

---

## Security

- All routes validated
- Security headers enabled (X-Content-Type-Options, X-Frame-Options)
- No sensitive data in frontend
- Use environment variables for secrets

---

## Support

- **Vercel Docs**: https://vercel.com/docs
- **React Router SPA**: https://vercel.com/guides/deployments
- **Troubleshooting**: https://vercel.com/support

---

## Quick Links

- [Vercel Dashboard](https://vercel.com/dashboard)
- [Project Settings](https://vercel.com/docs/projects/overview)
- [Environment Variables](https://vercel.com/docs/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/concepts/projects/domains)

---

Made with care for seniors. Deploy with confidence.


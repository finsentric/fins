# GitHub Pages Deployment Guide

This project is configured to deploy automatically to GitHub Pages using GitHub Actions.

## Prerequisites

1. Make sure your repository is on GitHub
2. Ensure you have write access to the repository

## Setup Steps

### 1. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. This will allow the workflow to deploy your site

### 2. Configure GitHub Pages Settings

1. In the same **Pages** settings section:
   - **Source**: GitHub Actions (should be selected)
   - **Branch**: This will be handled by the workflow
   - **Custom domain** (optional): Add your custom domain if you have one

### 3. Push Your Code

The deployment will happen automatically when you push to the `main` branch:

```bash
git add .
git commit -m "Initial commit for GitHub Pages deployment"
git push origin main
```

## Manual Deployment

If you want to deploy manually:

```bash
# Build the project
npm run export

# The built files will be in the `out` directory
# You can then upload these files to GitHub Pages manually
```

## Local Testing

To test the static build locally:

```bash
# Build the project
npm run export

# Serve the static files locally
npx serve out
```

## Troubleshooting

### Common Issues

1. **404 errors**: Make sure your `next.config.js` has `output: 'export'` configured
2. **Routing issues**: Next.js static export doesn't support dynamic routes by default
3. **Build failures**: Check the GitHub Actions logs for specific error messages

### Checking Deployment Status

1. Go to your repository on GitHub
2. Click on the **Actions** tab
3. You should see the "Deploy to GitHub Pages" workflow running
4. Click on the workflow to see detailed logs

## Custom Domain

If you want to use a custom domain:

1. Add your domain to the **Pages** settings in your repository
2. Create a `CNAME` file in the `public` directory with your domain name
3. Configure your DNS settings to point to GitHub Pages

## Environment Variables

If your app uses environment variables, make sure to:

1. Add them to your GitHub repository settings under **Settings** → **Secrets and variables** → **Actions**
2. Reference them in your workflow if needed

Your site will be available at: `https://[your-username].github.io/[repository-name]/` 
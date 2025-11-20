# Deployment Guide: Hosting on Cloudflare Pages

This guide will help you get your "Clinton's Thoughts" website online using Cloudflare Pages.

## Prerequisites
- A [GitHub account](https://github.com/).
- A [Cloudflare account](https://dash.cloudflare.com/sign-up).

## Step 1: Push Code to GitHub

1.  **Create a new repository** on GitHub:
    - Go to [github.com/new](https://github.com/new).
    - Name it `clinton-thoughts` (or whatever you like).
    - Make it **Public** or **Private**.
    - **Do not** initialize with README, .gitignore, or License (we already have them).
    - Click **Create repository**.

2.  **Push your local code**:
    - Copy the commands under "…or push an existing repository from the command line".
    - They will look like this (run these in your terminal):
      ```bash
      git remote add origin https://github.com/YOUR_USERNAME/clinton-thoughts.git
      git branch -M main
      git push -u origin main
      ```

## Step 2: Deploy with Cloudflare Pages

1.  **Log in to Cloudflare Dashboard**:
    - Go to **Workers & Pages** > **Pages**.
    - Click **Connect to Git**.

2.  **Connect GitHub**:
    - Select the `clinton-thoughts` repository you just created.
    - Click **Begin setup**.

3.  **Configure Build Settings**:
    - **Project name**: `clinton-thoughts` (default is fine).
    - **Production branch**: `main`.
    - **Framework preset**: Select **Astro**.
    - **Build command**: `npm run build` (should be auto-filled).
    - **Build output directory**: `dist` (should be auto-filled).

4.  **Deploy**:
    - Click **Save and Deploy**.
    - Wait for the build to finish (usually < 1 minute).

## Success!
Cloudflare will give you a URL (e.g., `https://clinton-thoughts.pages.dev`). Your site is now live!

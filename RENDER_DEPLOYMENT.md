# Render.com Deployment Guide

This guide will walk you through deploying AirBnBoo to Render.com instead of Heroku.

## Prerequisites

- GitHub account with your repository pushed
- Render.com account (sign up at render.com)
- Your app code with the updated configuration files
- Environment variables configured locally (see `.env.example` for reference)

## Local Development Setup

1. Create a `.env` file in the `backend` folder with the following values:

   ```
   PORT=5000
   NODE_ENV=development
   DB_USERNAME=cooperland_app
   DB_PASSWORD=ZyraAndLolaAreMyAlpha
   DB_DATABASE=soloProject
   DB_HOST=localhost
   JWT_SECRET=O3XkTcx/dJMEog==
   JWT_EXPIRES_IN=604800
   ```

2. Start your local development server:

   ```bash
   npm run dev:backend
   ```

## Step-by-Step Deployment

### Step 1: Push Your Code to GitHub

```bash
git add .
git commit -m "Update for Render.com deployment"
git push origin main  # or your default branch
```

### Step 2: Create a Render Account

1. Go to [render.com](https://render.com)
2. Sign up with your GitHub account
3. Click "New" → "PostgreSQL" to create a database

### Step 3: Create PostgreSQL Database

1. Click **New +** button → **PostgreSQL**
2. Fill in the details:
   - **Name**: `airbnboo-db`
   - **Database**: `airbnboo_db`
   - **User**: (auto-filled)
   - **Region**: Choose closest to your location
   - **PostgreSQL Version**: 14
   - **Plan**: Free (or Starter+)

3. Click **Create Database**
4. **Important**: Copy the **Internal Database URL** (you'll need this for the web service)

### Step 4: Create Web Service

1. Click **New +** button → **Web Service**
2. Connect your GitHub repository:
   - Find your repository in the list
   - Click **Connect**
3. Fill in the service details:
   - **Name**: `airbnboo`
   - **Runtime**: `Node`
   - **Region**: Same as database
   - **Branch**: `main` (or your deployment branch)
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

4. Click **Create Web Service**

### Step 5: Add Environment Variables

1. On the Web Service page, scroll down to **Environment**
2. Add these variables in Render:

   | Key | Value | Notes |
   |-----|-------|-------|
   | `NODE_ENV` | `production` | Required for production |
   | `DATABASE_URL` | (paste the Internal Database URL from Step 3) | Connection string from PostgreSQL |
   | `JWT_SECRET` | `O3XkTcx/dJMEog==` | Keep this secret - don't share it |
   | `JWT_EXPIRES_IN` | `604800` | Token expiration in seconds (7 days) |
   | `PORT` | `5000` | (optional - Render assigns a port automatically) |

3. Click **Save**

### Important Security Notes

- **Never commit your `.env` file** to GitHub
- **DATABASE_URL** is automatically set by Render using the Internal connection string
- **JWT_SECRET** should be kept private and secure
- Your `.env` file is already in `.gitignore` for security

### Step 6: Run Database Migrations

1. In your Web Service dashboard, go to the **Shell** tab
2. Run migrations:

   ```bash
   npm run sequelize db:migrate
   npm run sequelize db:seed:all
   ```

3. Wait for completion

### Step 7: Deploy

1. The service will automatically deploy when you push to GitHub
2. Monitor the deploy logs in the **Logs** tab
3. Once the build completes, your app will be live at the URL shown in the dashboard

## Troubleshooting

### Database Connection Errors
- Make sure you're using the **Internal Database URL**, not the External one
- Verify all environment variables are set correctly

### Build Failures
- Check the build logs for errors
- Ensure all dependencies are installed: `npm install`
- Make sure your GitHub repo has all required files

### Static Frontend Not Loading
- Verify the frontend build succeeded in logs
- Check that routes are configured correctly in `backend/routes/index.js`

### CSRF Token Issues
- Ensure the cookie settings in `backend/app.js` are correct for production
- Verify `JWT_SECRET` is set in environment variables

## Differences from Heroku

| Feature | Heroku | Render |
|---------|--------|--------|
| Procfile | Required | render.yaml (optional) |
| Build Script | heroku-postbuild | build |
| DATABASE_URL | Auto-injected | Must add manually |
| Costs | Paid dynos | Free tier available |
| Sleep | Free tier apps sleep | Free tier doesn't sleep |
| SSL | Automatic | Automatic |

## Next Steps

1. Test all features of your application
2. Update any hardcoded URLs to use the Render domain
3. Set up custom domain (optional)
4. Monitor logs regularly for errors

## Useful Commands for Render Shell

```bash
# Check database connection
npm run sequelize db:migrate:status

# Run migrations
npm run sequelize db:migrate

# Run seeders
npm run sequelize db:seed:all

# Undo last migration
npm run sequelize db:migrate:undo
```

## Support

- Render.com docs: https://render.com/docs
- Sequelize CLI docs: https://github.com/sequelize/cli
- Node.js PostgreSQL: https://node-postgres.com/

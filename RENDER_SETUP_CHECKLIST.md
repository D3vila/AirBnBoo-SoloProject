# 🚀 Render.com Deployment Checklist - AirBnBoo App

This is a detailed, step-by-step guide to deploy your AirBnBoo app from Heroku to Render.com.

---

## ✅ PHASE 1: PRE-DEPLOYMENT PREP (5 minutes)

### Step 1.1: Update Your Code Files
- [x] Already done! We created:
  - ✅ Updated `package.json` (changed `heroku-postbuild` to `build`)
  - ✅ Created `render.yaml` (service configuration)
  - ✅ Created `.env.example` (environment template)

### Step 1.2: Push Changes to GitHub

In your terminal, run:

```bash
cd /home/antonio/app_academy/5-mod/16-week/AirBnBoo-SoloProject
git add .
git commit -m "Configure for Render.com deployment"
git push origin main
```

**What to expect:** Git uploads your changes to GitHub.

---

## ✅ PHASE 2: CREATE RENDER ACCOUNT (2 minutes)

### Step 2.1: Sign Up for Render

1. Open [render.com](https://render.com) in your browser
2. Click **Sign Up** (top right)
3. Click **Continue with GitHub**
4. Authorize Render to access your GitHub account
5. You should see the Render dashboard

---

## ✅ PHASE 3: CREATE DATABASE (3 minutes)

### Step 3.1: Create PostgreSQL Instance

1. In Render dashboard, click **New +** button (top right)
2. Select **PostgreSQL**
3. Fill in the form:

   | Field | Value |
   |-------|-------|
   | **Name** | `airbnboo-db` |
   | **Database** | `airbnboo_db` |
   | **User** | (keep auto-generated) |
   | **Password** | (keep auto-generated) |
   | **Region** | `us-east` (or closest to you) |
   | **PostgreSQL Version** | `14` |
   | **Datadog API Key** | (leave blank) |

4. Click **Create Database**
5. Wait 1-2 minutes for the database to be created

### Step 3.2: Copy Database Connection String

**🔴 CRITICAL STEP:**

1. When the database is ready, you'll see a dashboard with connection details
2. Look for **Internal Database URL** (this is the one you need)
3. Copy it - it will look like: `postgresql://user:password@dpg-xxxxx.internal:5432/airbnboo_db`
4. **Paste this somewhere safe** - you'll need it in Step 5

⚠️ **Important:** Use **Internal Database URL**, not the External one. The internal URL ensures secure connection within Render's network.

---

## ✅ PHASE 4: CREATE WEB SERVICE (5 minutes)

### Step 4.1: Create New Web Service

1. In Render dashboard, click **New +** button (top right)
2. Select **Web Service**
3. Click **Deploy from a Git Repository**

### Step 4.2: Connect Your GitHub Repository

1. You should see a list of your GitHub repositories
2. Find **AirBnBoo-SoloProject** and click **Connect**

### Step 4.3: Configure Web Service

Fill in the following fields:

| Field | Value | Notes |
|-------|-------|-------|
| **Name** | `airbnboo` | No spaces, lowercase |
| **Runtime** | `Node` | Dropdown |
| **Region** | `us-east` (same as DB) | Important: same region as database |
| **Branch** | `main` | Or your default branch |
| **Build Command** | `npm install && npm run build` | Exact copy |
| **Start Command** | `npm start` | Exact copy |
| **Plan** | `Free` | (optional: Starter+ for better performance) |

### Step 4.4: Add Environment Variables

1. Scroll down to **Environment** section
2. Click **Add Environment Variable** for each one

Add these variables (exact keys and values):

```
NODE_ENV = production
DATABASE_URL = (paste from Step 3.2)
JWT_SECRET = O3XkTcx/dJMEog==
JWT_EXPIRES_IN = 604800
```

**How to add each variable:**
- Click **Add Environment Variable**
- Enter Key name
- Enter Value
- Repeat for each variable

### Step 4.5: Create the Service

1. Scroll to bottom
2. Click **Create Web Service**
3. Render will start building your app (watch the **Logs** tab)

**Expected log output:**
```
Building...
npm install
npm run build (builds React frontend)
[Build successful]
Starting...
npm start
Listening on port 10000...
```

---

## ✅ PHASE 5: RUN DATABASE MIGRATIONS (3 minutes)

### Step 5.1: Access Web Service Shell

1. In your Web Service dashboard, click the **Shell** tab (top menu)
2. You should see a terminal window

### Step 5.2: Run Migrations

In the shell, run these commands one by one:

```bash
npm run sequelize db:migrate
```

Wait for it to complete. You should see:
```
Sequelize CLI [Node: X.X.X, CLI: X.X.X, ORM: X.X.X]

Executed migration: 20210715174113-create-user.js
Executed migration: 20210719214109-create-spot.js
Executed migration: 20210719214849-create-booking.js
Executed migration: 20210719215613-create-review.js
```

### Step 5.3: Run Seeders (Sample Data)

```bash
npm run sequelize db:seed:all
```

You should see:
```
Sequelize CLI seeding...

Executed seeder: 20210715182715-demo-user.js
Executed seeder: 20210719220042-add-spot.js
Executed seeder: 20210721185322-add-reviews.js
Executed seeder: 20210723043854-add-bookings.js
```

---

## ✅ PHASE 6: DEPLOY & TEST (2 minutes)

### Step 6.1: Check Deployment Status

1. Click the **Logs** tab in your Web Service dashboard
2. Scroll to the bottom to see the latest status
3. You should see: `Listening on port XXXXX...`

### Step 6.2: Get Your Live URL

1. At the top of the Web Service dashboard, you'll see a URL like:
   ```
   https://airbnboo.onrender.com
   ```
2. This is your live app! Click it to visit your app

### Step 6.3: Test Your App

In your browser, visit: `https://airbnboo.onrender.com`

**Test these features:**
- ✅ Homepage loads
- ✅ Can view listings
- ✅ Can sign up / log in
- ✅ Can create a review
- ✅ Can make a booking

---

## 🔧 TROUBLESHOOTING

### Problem: "Build Failed" error

**Solution:**
1. Check the Logs tab for the specific error
2. Common causes:
   - Missing dependency: Run `npm install` locally to verify
   - Port issue: Verify PORT is set to 5000 in backend config
   - Build script error: Check that `npm run build` works locally first

**To test locally:**
```bash
cd frontend
npm run build
cd ../backend
npm start
```

### Problem: "Database Connection Error"

**Solution:**
1. Go to your Web Service → Environment
2. Check that DATABASE_URL is set and correct
3. Verify you used **Internal Database URL** from Step 3.2
4. Make sure NODE_ENV = `production`

### Problem: Frontend shows "Cannot GET /"

**Solution:**
1. Check that frontend build succeeded in logs
2. Verify `npm run build` completed without errors
3. Check the routes in `backend/routes/index.js` are correct
4. Run `npm run build --prefix frontend` locally to test

### Problem: "CSRF Token Error"

**Solution:**
1. Check JWT_SECRET is set in environment variables
2. Verify it matches: `O3XkTcx/dJMEog==`
3. Make sure NODE_ENV = `production`

---

## 📊 YOUR APP INFO FOR REFERENCE

```
App Name: AirBnBoo
Database Name: airbnboo_db
Web Service Name: airbnboo
Backend Port: 5000
JWT Secret: O3XkTcx/dJMEog==
JWT Expiration: 604800 seconds (7 days)
```

---

## ✨ NEXT STEPS AFTER DEPLOYMENT

1. **Monitor Logs**: Check the Logs tab regularly for any errors
2. **Set Up Custom Domain** (optional):
   - Go to Web Service → Settings
   - Add your custom domain under "Custom Domain"
3. **Set Up Auto-Deploy** (already enabled):
   - Any git push to `main` will automatically redeploy
4. **Update API Endpoints** (if hardcoded):
   - Replace `http://localhost:5000` with your Render URL in frontend code

---

## 📚 USEFUL COMMANDS IN RENDER SHELL

```bash
# Check database connection
npm run sequelize db:migrate:status

# Undo last migration (if something went wrong)
npm run sequelize db:migrate:undo

# View database info
psql $DATABASE_URL -c "SELECT version();"

# Reset database (CAREFUL - deletes data)
npm run sequelize db:migrate:undo:all
npm run sequelize db:migrate
npm run sequelize db:seed:all
```

---

## 🎉 CONGRATULATIONS!

Your app is now live on Render.com! Share your URL with friends and family:

```
https://airbnboo.onrender.com
```

---

## ❓ QUESTIONS?

- Render Docs: https://render.com/docs
- Sequelize CLI: https://github.com/sequelize/cli
- Node.js: https://nodejs.org/docs
- PostgreSQL: https://www.postgresql.org/docs/

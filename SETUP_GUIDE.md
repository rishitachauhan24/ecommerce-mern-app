# 🚀 Quick Start Guide - E-Commerce MERN App

## ✅ What's Done

Your MERN stack e-commerce application has been successfully created with:

### Backend (✅ Complete)
- Express.js server configuration
- MongoDB models (User, Product, Order)
- JWT authentication with bcryptjs
- Controllers for auth, products, and orders
- Protected routes with middleware
- Error handling
- **Dependencies installed** ✅

### Frontend (✅ Complete)
- React 18 with React Router v6
- Context API for state management (Auth & Cart)
- Service layer for API calls
- Component structure ready
- **Dependencies installed** ✅

---

## 📋 Next Steps to Run the Application

### Step 1: Install MongoDB

MongoDB is **NOT yet installed**. Choose one of these methods:

#### Option A: Download Installer (Recommended)
1. Go to: https://www.mongodb.com/try/download/community
2. Download MongoDB Community Edition for Windows
3. Run the installer
4. Choose "Complete" installation
5. Install as a Windows Service

#### Option B: Using Chocolatey
```powershell
choco install mongodb
```

#### Verify Installation:
```powershell
mongod --version
```

### Step 2: Start MongoDB

```powershell
# Start MongoDB service
net start MongoDB

# OR if installed manually, run:
mongod
```

### Step 3: Start the Backend Server

Open **Terminal 1** in VS Code:

```powershell
cd backend
npm run dev
```

You should see:
```
🚀 Server running on port 5000
✅ MongoDB Connected: localhost
```

### Step 4: Start the Frontend

Open **Terminal 2** in VS Code:

```powershell
cd frontend
npm start
```

Your browser will open at `http://localhost:3000`

---

## 🧪 Testing the Application

### 1. Create an Admin User

First, register a regular user through the app, then upgrade to admin:

```bash
# Open MongoDB shell
mongosh

# Use the database
use ecommerce

# Make a user an admin
db.users.updateOne(
  { email: "your-email@example.com" },
  { $set: { role: "admin" } }
)
```

### 2. Add Sample Products (Admin)

Login as admin and go to `/admin/manage-products` to add products.

### 3. Test User Flow

1. Register a new user
2. Browse products
3. Add items to cart
4. Proceed to checkout
5. View order history

---

## 🔧 Troubleshooting

### MongoDB Connection Error

If you see "MongoDB connection failed":

```powershell
# Check if MongoDB is running
net start MongoDB

# Or check MongoDB status
Get-Service MongoDB
```

### Port Already in Use

If port 5000 or 3000 is in use:

**Backend**: Change PORT in `backend/.env`
**Frontend**: Change port when prompted, or set in `frontend/.env`

### Dependencies Issues

```powershell
# Backend
cd backend
rm -r node_modules
npm install

# Frontend
cd frontend
rm -r node_modules
npm install
```

---

## 📁 Important Files

### Backend Environment (`backend/.env`)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ecommerce
JWT_SECRET=your_jwt_secret_key_here_change_in_production
NODE_ENV=development
```

### Frontend Environment (`frontend/.env`)
```env
REACT_APP_API_URL=http://localhost:5000
```

---

## 🎯 Project Status

| Component | Status |
|-----------|--------|
| Backend Setup | ✅ Complete |
| Frontend Setup | ✅ Complete |
| MongoDB Connection | ⏳ Pending Install |
| Backend Dependencies | ✅ Installed |
| Frontend Dependencies | ✅ Installed |

---

## 📚 Available Scripts

### Backend
```bash
npm start      # Start production server
npm run dev    # Start development server (nodemon)
```

### Frontend
```bash
npm start      # Start development server
npm run build  # Build for production
```

---

## 🌐 URLs

- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- MongoDB: mongodb://localhost:27017

---

## 🎨 Features Implemented

### User Features
- ✅ User Registration & Login
- ✅ JWT Authentication
- ✅ Product Browsing
- ✅ Shopping Cart (LocalStorage)
- ✅ Checkout Process
- ✅ Order History

### Admin Features
- ✅ Product Management (CRUD)
- ✅ Order Management
- ✅ View All Orders
- ✅ Update Order Status

---

## 📞 Need Help?

1. Check all dependencies are installed: `npm install`
2. Ensure MongoDB is running: `net start MongoDB`
3. Check `.env` files exist in both backend and frontend
4. Verify ports 3000 and 5000 are not in use

---

**Once MongoDB is installed and running, your application will be fully functional!** 🎉

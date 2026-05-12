# BG Removal ✂️

A full-stack AI-powered background removal web application built with the MERN stack, featuring Clerk authentication, credit-based usage system, and the Clipdrop API for background removal.

## Live Demo

- **Frontend:** [bg-removal-six-mu.vercel.app](https://gp-bg-removal.vercel.app/)

---

## Features

### Customer Storefront
- Upload images and remove background instantly using AI
- Before/After image slider comparison
- Credit-based usage system (5 free credits on signup)
- User authentication via Clerk (Google, GitHub, Email)
- Buy credits with Stripe payment integration
- Download processed images
- Responsive design for all screen sizes

### Admin / Backend
- Clerk webhook integration for automatic user creation/update/deletion
- JWT-based API authentication
- Credit balance management
- REST API backend

---

## Tech Stack

**Frontend**
- React.js
- React Router DOM
- Tailwind CSS
- Axios
- React Toastify
- Clerk (authentication)
- Vite

**Backend**
- Node.js
- Express.js
- MongoDB (Atlas)
- Mongoose
- JSON Web Tokens (JWT)
- Clerk Webhooks (Svix)
- Clipdrop API (AI background removal)
- Multer (file uploads)
- Stripe (payments)
- Deployed on Vercel

---

## Project Structure

```
Bg-removal/
├── client/   # React frontend
└── server/   # Express REST API
```

---

## Getting Started

### Prerequisites
- Node.js
- MongoDB Atlas account
- Clerk account
- Clipdrop API key
- Stripe account

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/gautam-parmar-ai/Bg-removal.git
cd Bg-removal
```

**2. Install dependencies**
```bash
# Server
cd server && npm install

# Client
cd ../client && npm install
```

**3. Set up environment variables**

Create a `.env` file in the `server` folder:
```env
MONGODB_URI=your_mongodb_atlas_connection_string
CLERK_WEBHOOK_SECRET=your_clerk_webhook_secret
CLIPDROP_API=your_clipdrop_api_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Create a `.env` file in the `client` folder:
```env
VITE_BACKEND_URL=http://localhost:4000
VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
```

**4. Run the apps**
```bash
# Server (from /server)
npm run server

# Client (from /client)
npm run dev
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/user/webhooks | Clerk webhook handler |
| POST | /api/user/credits | Get user credit balance |
| POST | /api/image/remove-bg | Remove background from image |

---

## How It Works

1. User signs up via Clerk → webhook creates user in MongoDB with 5 free credits
2. User uploads an image → sent to Clipdrop API for AI background removal
3. Processed image returned → user's credit balance decremented by 1
4. User can buy more credits via Stripe when credits run out

---

## Deployment

This project is deployed on **Vercel**. Make sure to:
1. Add all environment variables in Vercel project settings
2. Set MongoDB Atlas Network Access to allow all IPs (`0.0.0.0/0`)
3. Set up Clerk webhook endpoint in Clerk dashboard pointing to your Vercel backend URL

---

## Author

**Gautam Parmar**
- GitHub: [@gautam-parmar-ai](https://github.com/gautam-parmar-ai)

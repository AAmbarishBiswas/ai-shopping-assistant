# 🛒 AI Shopping Assistant

An AI-powered full-stack shopping application that helps users discover,
compare, and understand products using intelligent AI assistance.

The application combines a modern shopping experience with AI-powered
product recommendations and conversational assistance.

## 🚀 Live Demo

🔗 **Live Demo:** Add your deployed URL here

## 📸 Screenshots

Add screenshots of:

- Home page
- Product listing
- Product details
- Shopping cart
- Wishlist
- Compare products
- Login/Register
- AI Shopping Assistant
- Admin Dashboard

## ✨ Features

### 👤 Authentication

- User registration
- User login
- Secure authentication
- Protected pages
- User session management

### 🛍️ Product Management

- Browse products
- Product search
- Product categories
- Product details
- Product filtering
- Product comparison

### 🛒 Shopping Features

- Add products to cart
- Update cart quantity
- Remove products from cart
- Wishlist
- Compare products
- Order management

### 🤖 AI Shopping Assistant

- Conversational shopping assistance
- AI-powered product recommendations
- Product comparison
- Product explanation
- Natural-language shopping queries

Example:

> "Find me a laptop under ₹60,000 suitable for programming."

The assistant helps users identify suitable products based on their
requirements.

### 🔐 Security

- Protected routes
- Authentication
- Server-side validation
- Secure API handling
- Environment variables for sensitive credentials

## 🧑‍💻 Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS

### Backend

- Next.js API Routes
- Node.js
- REST APIs

### Database

- MongoDB
- Mongoose

### AI

- Groq API

### Tools

- Git
- GitHub
- VS Code

## 🏗️ Application Architecture

```text
                    ┌──────────────┐
                    │     User     │
                    └──────┬───────┘
                           │
                           ▼
                 ┌──────────────────┐
                 │   Next.js / React │
                 └────────┬─────────┘
                          │
              ┌───────────┴───────────┐
              │                       │
              ▼                       ▼
       ┌──────────────┐        ┌──────────────┐
       │  Application │        │ AI Assistant │
       │     APIs     │        │  Groq API    │
       └──────┬───────┘        └──────────────┘
              │
              ▼
       ┌──────────────┐
       │   MongoDB    │
       └──────────────┘

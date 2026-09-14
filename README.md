# 🛒 AI Shopping Assistant

An AI-powered full-stack shopping assistant built with **Next.js, TypeScript, MongoDB, Mongoose, and Groq AI**.

The application helps users discover products, search and compare products, manage their shopping cart and wishlist, and interact with an AI assistant for product-related questions and recommendations.

---

## 🚀 Live Demo

> Coming soon — deployment in progress.

---

## 📸 Screenshots

### 🏠 Home / Product Discovery

_Add screenshot here_

### 🔐 Authentication

_Add screenshot here_

### 🛍️ Product Details

_Add screenshot here_

### 🛒 Shopping Cart

_Add screenshot here_

### 🤖 AI Shopping Assistant

_Add screenshot here_

---

## ✨ Features

### 🔐 Authentication

- User registration and login
- Secure authentication
- Protected application pages
- Session-based user access
- User-specific shopping data

### 🛍️ Product Management

- Browse available products
- Search products
- Product categories
- Product details page
- Product filtering
- Product comparison
- Product information display

### 🛒 Shopping Features

- Add products to cart
- Update product quantity
- Remove products from cart
- Wishlist functionality
- Product comparison
- Order management

### 🤖 AI Shopping Assistant

The application integrates **Groq AI** to provide an AI-powered shopping experience.

Users can ask natural-language questions such as:

> "Find me a laptop under ₹60,000 suitable for programming."

The AI assistant can help users with:

- Product recommendations
- Product comparison
- Product explanations
- Natural-language shopping queries
- Shopping-related questions

### 🔒 Security & Validation

- Protected application routes
- Authentication checks
- Server-side API handling
- Environment variable based secret management
- Input validation
- Secure database access

---

## 🏗️ Application Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   Next.js / React   │
                    │    Frontend UI      │
                    └──────────┬──────────┘
                               │
                ┌──────────────┴──────────────┐
                │                             │
                ▼                             ▼
      ┌──────────────────┐          ┌──────────────────┐
      │ Application APIs │          │    Groq AI API   │
      │   / Backend      │          │ AI Assistant     │
      └────────┬─────────┘          └──────────────────┘
               │
               ▼
      ┌──────────────────┐
      │     MongoDB      │
      │    Mongoose      │
      └──────────────────┘

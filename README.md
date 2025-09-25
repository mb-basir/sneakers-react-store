# Sneakers React Store

An e-commerce sneakers store built with React, Vite, React Router, Context API, and Tailwind CSS. Product data is served using JSON Server.

## Features

- Product listing with images, sizes, and colors
- Product details page with selectable size, color, and quantity
- Add to cart with unique cart item handling
- Cart page with quantity adjustment and removal
- Persistent global state using React Context
- Responsive navbar and popup notifications
- Modern UI with Tailwind CSS

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

### 3. Start the product API server

```bash
npm run server
```

This runs JSON Server at [http://localhost:8000/products](http://localhost:8000/products) using `public/data/products.json`.

### 4. Open the app

Visit [http://localhost:5173](http://localhost:5173) in your browser.

## Folder Structure

- `src/` - React source code
  - `components/` - Reusable UI components (Navbar, Button, Popup, ProductDetails, etc.)
  - `pages/` - Main pages (Homepage, ProductDetails, Cart, PageNotFound)
  - `contexts/` - React Context for global state (StoreContext)
- `public/data/products.json` - Product data for JSON Server
- `public/images/` - Product images

## Scripts

- `npm run dev` - Start Vite dev server
- `npm run server` - Start JSON Server for products
- `npm run build` - Build for production
- `npm run lint` - Lint code

## Tech Stack

- React 19
- Vite
- React Router DOM 7
- Tailwind CSS
- JSON Server
- Context API

---

**Author:** mb-basir

# Product Management API

## Overview

Welcome to the Product Management API, a sophisticated backend solution meticulously crafted to streamline product and order management within e-commerce ecosystems. Engineered with cutting-edge technologies such as Express.js, Mongoose, TypeScript, Zod, Dotenv, and CORS, my API delivers unparalleled performance, reliability, and scalability, empowering developers to seamlessly integrate advanced product management functionalities into their applications.

## Key Features

- **Comprehensive Product Management:** Perform essential CRUD operations with ease, including creating, retrieving, updating, and deleting products.

- **Efficient Order Management:** Simplify the complexities of order processing through dedicated endpoints for creating new orders, retrieving order details, and fetching orders by user email.

- **Advanced Search Capabilities:** Empower users to quickly locate products by implementing robust search functionality based on name, category, or description.

## Installation

1. **Clone the repository:**
   git clone https://github.com/Billal990/product-management-api

2. **Install dependencies:**
   cd product-management-api <br>
   npm install

3. **Set up environment variables:**
   Create a .env file in the root directory and define the following variables:
   PORT=5000 <br>
   MONGODB_URI=`<Your MongoDB connection URI>`

## Usage

### Product Endpoints

- **Create a New Product:** POST /api/products

- **Retrieve a List of All Products:** GET /api/products

- **Retrieve a Specific Product by ID:** GET /api/products/:productId

- **Update Product Information:** PUT /api/products/:productId

- **Delete a Product:** DELETE /api/products/:productId

- **Search a Product by Name, Category, or Description:** GET /api/products?searchTerm=<searchTerm>

### Order Endpoints

- **Create a New Order:** POST /api/orders

- **Retrieve All Orders:** GET /api/orders

- **Retrieve Orders by User Email:** GET /api/orders?email=<userEmail>

## Live API URL
You can access the live API at https://l2-b3-assignment2-product-management-api.vercel.app/

## Technologies Used

- **Express.js:** Fast, unopinionated, minimalist web framework for Node.js.
- **Mongoose:** Elegant MongoDB object modeling for Node.js.
- **TypeScript:** Typed superset of JavaScript that compiles to plain JavaScript.
- **Zod:** TypeScript-first schema declaration and validation library.
- **Dotenv:** Module that loads environment variables from a .env file into process.env.
- **CORS:** Middleware for enabling Cross-Origin Resource Sharing in Express.js.

I am excited for you to explore and leverage the capabilities of my Product Management API. Should you have any questions, feedback, or suggestions, please don't hesitate to reach out. Thank you for choosing my solution to enhance your product management workflows!

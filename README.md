# Bicycle Store - (E-Commerce Platform)

A comprehensive Bicycle E-Commerce Backend project built with **Node.js**, **Express**, **Mongoose** and **TypeScript**. This project aims to manage products, process orders, and track revenue with robust inventory and order management features.

## Features

- **Product Management**:

  - Add, update, delete bicycles.
  - Track bicycle availability and manage stock.

- **Order Management**:

  - Place orders and track them.
  - Handle stock deduction and manage the product quantity.

- **Revenue Calculation**:

  - Calculate total revenue from all orders using MongoDB aggregation.

- **Inventory Management**:
  - Automatically reduce stock upon order placement.
  - Set `inStock` to false when product quantity reaches zero.

## Technology Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **ODM**: Mongoose
- **API Documentation**: RESTful API

## Installation

### Prerequisites

- Node.js (>=14.x)
- MongoDB (or use a MongoDB cloud service like MongoDB Atlas)

### 1. Clone the Repository

```
git clone https://github.com/riyaz-369/bi-cycle-store.git
cd bi-cycle-store
```

### 2. Install Dependencies

```code
npm install
```

### 3. Setup Environment Variables

```code
DATABASE_URL="mongodb+srv://bi-cycle-zone:jyC37cb4VHeVRk9e@cluster0.308otot.mongodb.net/bi-cycle-zone?retryWrites=true&w=majority&appName=Cluster0"
PORT=5000
```

## Product Endpoints For Testing

### 1. **Create a Product**

- **Endpoint**: `POST /api/products`
- **Description**: Create a new bicycle product.
- **Request Body**:

```json
{
  "name": "Roadster 5000",
  "brand": "SpeedX",
  "price": 300,
  "type": "Road",
  "description": "A premium road bike designed for speed and performance.",
  "quantity": 20,
  "inStock": true
}
```

- **Response**:

```json
{
  "success": true,
  "message": "Bicycle created successfully",
  "data": {
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 300,
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 20,
    "inStock": true,
    "_id": "6749d784604c2efd87433a7e",
    "createdAt": "2024-11-29T15:02:28.604Z",
    "updatedAt": "2024-11-29T15:02:28.604Z",
    "__v": 0
  }
}
```

### 1. **Get all Product**

- **Endpoint**: `GET /api/products`
- **Description**: Retrieve a list of all products in the inventory.
- **Response**:

```json
{
  "success": true,
  "message": "Bicycles retrieved successfully",
  "data": [
    {
      "name": "TrailBlazer X",
      "brand": "MountainPro",
      "price": 450,
      "type": "Mountain",
      "description": "An all-terrain mountain bike built for adventure enthusiasts.",
      "quantity": 15,
      "inStock": true,
      "_id": "6749d8b9604c2efd87433a80",
      "createdAt": "2024-11-29T15:07:37.285Z",
      "updatedAt": "2024-11-29T15:07:37.285Z",
      "__v": 0
    },
    {
      "name": "UrbanComet 300",
      "brand": "CityCycle",
      "price": 200,
      "type": "Hybrid",
      "description": "A versatile hybrid bike perfect for urban commutes and weekend rides.",
      "quantity": 25,
      "inStock": true,
      "_id": "6749d8b9604c2efd87433a81",
      "createdAt": "2024-11-29T15:07:37.286Z",
      "updatedAt": "2024-11-29T15:07:37.286Z",
      "__v": 0
    }
  ] ......
}
```

### 1. **Update a Product**

- **Endpoint**: `POST /api/products`
- **Description**: Update an existing product's details..
- **Request Body**:

```json
{
  "name": "Roadster 5000",
  "brand": "SpeedX",
  "price": 1200,
  "type": "Road",
  "description": "A premium road bike designed for speed and performance.",
  "quantity": 30,
  "inStock": true
}
```

- **Response**:

```json
{
  "message": "Bicycle updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Roadster 5000",
    "brand": "SpeedX",
    "price": 1200, // Price updated
    "type": "Road",
    "description": "A premium road bike designed for speed and performance.",
    "quantity": 30, // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z" // Updated timestamp
  }
}
```

### 1. **Delete a Product**

- **Endpoint**: `POST /api/products/:productId`
- **Description**: Delete a product from the inventory
- **Response**:

```json
{
  "success": true,
  "message": "Bicycle deleted successfully",
  "data": {}
}
```

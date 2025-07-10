# 🛒 RetailIQ – Inventory Management System Backend

**RetailIQ** is a backend REST API built with Node.js, Express, TypeScript, and PostgreSQL. It enables efficient inventory tracking, updates, and location-based product management.

---

## 🚀 Features

- Full-featured RESTful API (CRUD)
- PostgreSQL integration with parameterized queries
- Modular MVC architecture
- Type safety using TypeScript
- Environment variables for secure config
- Dev-friendly tooling (`nodemon`, Postman-ready)

---

## 🧱 Tech Stack

- **Node.js + Express**
- **PostgreSQL** (`pg` driver)
- **TypeScript**
- **dotenv**
- **nodemon**


---

## 📦 API Endpoint Structure

All API endpoints are under the base URL:

```
http://localhost:5000/api/inventory
```

#### ✅ Create a New Inventory Item

- **Method:** POST  
- **Endpoint:** `/api/inventory`  
- **Body:** (JSON)

```json
{
  "product_name": "Notebook",
  "quantity": 50,
  "location": "Arlington, TX, US"
}
```

- **Response:**

```json
{
  "message": "Inventory item created successfully"
}
```

#### 📥 Get All Inventory Items

- **Method:** GET  
- **Endpoint:** `/api/inventory`  
- **Response:** Array of items

#### ✏️ Update an Item

- **Method:** PUT  
- **Endpoint:** `/api/inventory/:id`  
- **Body:** (JSON)

```json
{
  "product_name": "Notebook XL",
  "quantity": 80,
  "location": "Dallas, TX"
}
```

#### ❌ Delete an Item

- **Method:** DELETE  
- **Endpoint:** `/api/inventory/:id`
---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/RetailIQ.git
cd RetailIQ
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Configure Environment Variables
Create a `.env` file in the root directory.  
You can copy from the example file and then edit `.env` and add your PostgreSQL credentials

> ⚠️ Do not commit `.env`. It is excluded via `.gitignore`.


### 4. Start PostgreSQL (if not running)

Ensure your PostgreSQL service is running locally and create a database and the schema:

```sql
CREATE DATABASE inventory_db;
```

After creating the database, run the following SQL in psql or any DB GUI:

```sql
CREATE TABLE inventory (
  id SERIAL PRIMARY KEY,
  product_name VARCHAR(255) NOT NULL,
  quantity INTEGER NOT NULL,
  location VARCHAR(255) NOT NULL
);
```

### 5. Run the Backend Server

```bash
npm run dev
```

You should see this message:

```
Server running on port 5000
✅ Database connected at: <timestamp>
```

Open [http://localhost:5000](http://localhost:5000) in your browser to verify.


### 6. Test API Endpoints using Postman or Frontend based on the  structure

# E-Commerce MERN Application

## Project Overview
This project is a full-stack e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to browse products, manage their shopping cart, and place orders. Admin users can manage products and view customer orders.

## Features
### User Features
- User authentication (Login / Signup)
- Product listing and details page
- Add to cart functionality
- Checkout and simulated payment integration
- Order history for users

### Admin Features
- Add, edit, and delete products
- View and manage customer orders
- Manage inventory and product availability

## Tech Stack
- **Frontend:** React.js, HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (using Mongoose ODM)
- **Authentication:** JWT (JSON Web Token), bcrypt
- **Version Control:** Git, GitHub
- **Deployment:** Render (Backend), Vercel (Frontend)

## System Architecture
- **Frontend:** Sends HTTP requests to backend API endpoints.
- **Backend:** Handles routing, authentication, and database logic.
- **Database:** Stores users, products, and order information.

## Modules / Components
- **User:** Register, login, view products, add to cart, checkout
- **Product:** CRUD operations (Admin only)
- **Cart:** Add/remove products, calculate totals
- **Orders:** Stores completed purchases
- **Authentication:** JWT-based secure login system

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```
3. Set up your MongoDB database and update the `.env` file with your database connection string.
4. Start the backend server:
   ```
   npm start
   ```
5. Navigate to the frontend directory and install dependencies:
   ```
   cd ../frontend
   npm install
   ```
6. Start the frontend application:
   ```
   npm start
   ```

## Testing
- **Backend:** API testing can be done using Postman.
- **Frontend:** Manual UI testing and validation of user interactions.
- **Database:** Verify CRUD operations in MongoDB Atlas.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License.
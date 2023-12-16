# cafee-backend-public
Cafee.uz: Empowering restaurant owners with an intuitive platform for seamless management. Effortlessly handle orders for delicious dishes and drinks. Customers place orders, prompting your kitchen team to prepare items swiftly. Simplify your restaurant operations effortlessly.


# Restaurant Order CRM

This repository contains the codebase for a Restaurant Order CRM system. It's designed to assist restaurant owners in managing and organizing orders within their establishment.

## Features

- **Order Management:** Create, update, and delete orders.
- **Real-time Updates:** Utilizes Pusher for real-time notifications when orders are created or updated.
- **User Management:** Allows for user account creation and management.

## Technologies Used

- Node.js: Backend server environment.
- Express.js: Web framework for routing.
- MongoDB: Database management system.
- Mongoose: Object Data Modeling (ODM) for MongoDB.
- Pusher: Real-time notifications.

## Getting Started

To get started with the Restaurant Order CRM, follow these steps:

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up environment variables (MongoDB connection, Pusher keys).
4. Run the application using `npm start`.
5. Access the application at `http://localhost:<PORT>`.

## Folder Structure

- **models:** Contains Mongoose schemas for User and Order models.
- **routers:** Express routers for User and Order routes.
- **Pusher:** Configuration for Pusher real-time notifications.
- **Other Folders:** Additional application files and configurations.

## Usage

Describe how to use the application. Include example API endpoints and their functionalities.

### API Endpoints:

- `POST /order/create`: Creates a new order.
  - Request body:
    ```json
    {
      "ordernumber": "12345",
      "tablenumber": 5,
      "waitername": "John",
      "order": "Burger, Fries, Cola"
    }
    ```
  - Response:
    ```json
    {
      "_id": "order_id",
      "ordernumber": "12345",
      "tablenumber": 5,
      "waitername": "John",
      "order": "Burger, Fries, Cola",
      "isready": false,
      "createdAt": "timestamp",
      "updatedAt": "timestamp"
    }
    ```

Add detailed descriptions of all available endpoints and their functionalities.

## Contributing

Contributions to improve this Restaurant Order CRM are welcome! Fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or support, feel free to contact:

- **Email:** [kodirov8788@gmail.com](mailto:kodirov8788@gmail.com)
- **LinkedIn:** [Kodirov Dev](https://www.linkedin.com/in/kodirov-dev/)
- **Telegram:** [KodirovDev](https://t.me/kodirovdev)


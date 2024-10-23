# E-Commerce Checkout Application

This project is a simple e-commerce web application built using **React**. It allows users to browse products, add them to a cart, and complete a mock checkout process. The application also includes features such as real-time form validation and responsive design to ensure a smooth user experience.

## Features

### 1. **Product Listing**
   - Displays a list of products fetched from a mock API (**Fake Store API**).
   - Each product shows its image, name, and price, along with an "Add to Cart" button.
   - Users can filter products using the search bar.
   - Products can be added to or removed from the cart.

### 2. **Shopping Cart**
   - Displays a list of products that the user has added to the cart.
   - Shows the total price and quantity of the products in the cart.
   - Users can remove products from the cart or proceed to checkout.

### 3. **Checkout Process**
   - A form where users enter their name, address, card details, expiration date, and CVV to complete the checkout process.
   - **Real-Time Validation**: As users enter data, the form validates fields and provides immediate feedback for invalid inputs.
   - The "Place Order" button is disabled until all fields are correctly filled.
   - After form submission, a confirmation message is shown, thanking the user for their order.

### 4. **Responsive Design**
   - The application is fully responsive and adjusts its layout for different screen sizes, ensuring a seamless experience on both mobile and desktop devices.

### 5. **Error Handling**
   - Error messages are shown for invalid or empty fields in the checkout form.
   - Input fields with errors are highlighted for better user visibility.

## Tech Stack

- **React**: Frontend JavaScript library for building user interfaces.
- **CSS**: For styling and layout, including responsive design with media queries.
- **Fake Store API**: A free API used to fetch mock product data.


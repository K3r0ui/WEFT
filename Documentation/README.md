# Weft Project

Full-stack application with a Spring Boot backend and a React frontend.

## Prerequisites

Make sure you have the following installed:

- **Docker** and **Docker Compose**
- **Java 17+**
- **Node.js**
- **Maven**

## How to Run the Project

Follow these steps to get everything up and running:

1. **Start Docker Services**

   This brings up any required containers:

   ```bash
   docker-compose up
   ```

2. **Run the Backend**

   In a new terminal tab/window, navigate to the backend directory:

   ```bash
   cd API/weftapi
   ```

   Then start the Spring Boot application:


   ```bash
   mvn spring-boot:run
   ```

3. **Run the Frontend**

   In another terminal tab/window, go to the frontend directory:

   ```bash
   cd UI/weftUI
   ```

   Install dependencies (only needed the first time):

   ```bash
   npm install
   ```

   Start the React development server:

   ```bash
   npm start
   ```

4. **Access the App**

   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:8080](http://localhost:8080)

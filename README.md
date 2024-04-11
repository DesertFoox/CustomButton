

# React Vite App

This project is a React application bootstrapped with [Vite](https://vitejs.dev/). Vite provides a fast development environment with features like instant server start and hot module replacement (HMR). The application is containerized using Docker, facilitating development and deployment consistency across various environments.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (Version 16.x or newer)
- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Getting Started

### Clone the Repository

To get started with this project, first clone the repository using Git:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### Running the Application

#### Using Docker

This project includes a `Dockerfile` and a `docker-compose.yml` to simplify the development and deployment processes using Docker and Docker Compose.

1. **Build and Run the Container**

   To build and run the application in a Docker container, execute the following command from the root of the project:

   ```bash
   docker-compose up
   ```

   This command builds the Docker image if it's not already built and starts the application. The Vite server will be accessible at `http://localhost:3000`.

2. **Viewing the Application**

   Open your web browser and go to [http://localhost:5173](http://localhost:5173) to see the application running.

#### Using Node.js Locally

If you prefer to run the application locally without Docker, follow these steps:

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Start the Development Server**

   ```bash
   npm run dev
   ```

   After running the development server, the application will be available at [http://localhost:5173](http://localhost:5173).


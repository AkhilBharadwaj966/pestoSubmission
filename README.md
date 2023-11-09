# Pesto Assessment Submission

# FUll Stack Task Manager

This project consists of two main components: the front end, which is written in React with TypeScript, and the backend, which is a Spring Boot application written in Java with a PostgreSQL database.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js (Front end)
- Yarn package manager (Front end)
- Java Development Kit (JDK) (Backend) ( 17.0.5 )
- PostgreSQL (Backend)

### Installing

A step by step series of examples that tell you how to get a development environment running.

#### Front End Setup

# Navigate to the front end directory from the cloned directory
```bash
cd ./fronttodo
```

# Install Yarn package manager via npm
```bash
npm install --global yarn
```

# Install dependencies
```bash
yarn install
```

# Start the front end application
```bash
yarn start
```

The application should now be running and accessible through a web browser at http://localhost:3000 by default.

#### Backend Setup

To set up the backend component, follow these steps:

1. Ensure PostgreSQL is installed and running on your local machine.

2. Create a new PostgreSQL database for the application.

3. Navigate to the backend directory from the cloned repository:
    ```bash
    cd ./todoBackend/todo
    ```

4. Configure the `src/main/resources/application.properties` file with the PostgreSQL username and password:
    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/[your-database-name]
    spring.datasource.username=[your-username]
    spring.datasource.password=[your-password]
    ```

5. Run the application using the included Maven wrapper:
    ```bash
    ./mvnw spring-boot:run
    ```
   The backend should now be running and listening for HTTP requests typically on port `8080`.



6. To run the automated tests for the backend :
   ```bash
   ./mvnw test
   ```
    This command will execute all the tests in the application and provide a summary of the results.  



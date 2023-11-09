# pestoSubmission

# Project Title Task Manager

This project consists of two main components: the front end, which is written in React with TypeScript, and the backend, which is a Spring Boot application written in Java with a PostgreSQL database.
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js (Front end)
- Yarn package manager (Front end)
- Java Development Kit (JDK) (Backend)
- PostgreSQL (Backend)

### Installing

A step by step series of examples that tell you how to get a development environment running.

#### Front End Setup

# Navigate to the front end directory from the cloned directory
cd [fronttodo]

# Install Yarn package manager via npm
npm install --global yarn

# Install dependencies
yarn install

# Start the front end application
yarn start

The application should now be running and accessible through a web browser at http://localhost:3000 by default.

#### Back End Setup
Ensure PostgreSQL is installed and running on your local machine.
Create a new PostgreSQL database for the application.


# Navigate to the backend end directory from the cloned directory
cd [todoBackend/todo]

Configure the src/main/resources/application.properties file with the PostgreSQL username and password:
spring.datasource.url=jdbc:postgresql://localhost:5432/[your-database-name]
spring.datasource.username=[your-username]
spring.datasource.password=[your-password]


Run the application using the included Maven wrapper: ./mvnw spring-boot:run
The backend should now be running and listening for HTTP requests typically on port 8080.


To run the automated tests for the backend : ./mvnw test
This command will execute all the tests in the application and provide a summary of the results.  



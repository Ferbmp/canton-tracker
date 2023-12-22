This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Description

The Swiss Canton Holiday Tracker is a web application designed to help users track holidays across different cantons in Switzerland. Users can customize their working days to view holidays that fall on these specific days, providing a personalized experience to plan and manage their time more effectively.

## Key Technologies

Next.js: A React framework for production, offering server-side rendering, static site generation, and numerous optimization features.

React.js: A JavaScript library for building user interfaces, used for its component-based architecture and state management capabilities.

TypeScript: A strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
Ant Design (AntD): A design system with high-quality React UI components to enrich the user interface of the application.
dayjs: A minimalist JavaScript library for parsing, validating, and manipulating dates, used in the application to handle date operations.
axios: A promise-based HTTP client for making HTTP requests from the browser to the backend.

## Project Structure

Atoms, Molecules, Organisms: Components are organized following the Atomic Design methodology for maintainability and reusability.

Contexts: React Context API is used for managing global state related to user's selected canton, date range, and holidays.

Services: Abstracts external API calls, making the application more maintainable and scalable.

## Decisions and Citations

UI Library Choice: Ant Design was chosen for its comprehensive set of high-quality components and extensive documentation, speeding up the development process.
Date Handling: dayjs was selected over other libraries for its simplicity and lightweight footprint.
State Management: Context API was used instead of more complex state management solutions to keep the app straightforward and maintainable.

## Acknowledgements

This project was developed with the assistance of OpenAI's ChatGPT, which provided guidance and suggestions on best practices, coding standards, and troubleshooting during the development process.

## How to Run Locally

Before you begin, ensure you have Node.js version 18 or higher installed. You can check your Node.js version by running `node -v` in your terminal.

### Installation

1. Install the necessary dependencies:

   ```bash
   npm install
   ```

### Running the Development Server

1. Start the development server:

   ```bash
   npm run dev
   ```

   The server will typically start on `http://localhost:3000`, but check the terminal output for the exact address.

### Running Tests

#### Unit and Integration Tests

-  To run unit and integration tests, use the following command:

   ```bash
   npm test
   ```

   or for continuous testing with watch mode:

   ```bash
   npm run test:watch
   ```

#### End-to-End Tests

-  To run end-to-end tests with Cypress:

   1. First, ensure your application is running (you can use `npm run dev` for this).
   2. Then, in a separate terminal, run:

      ```bash
      npm run cypress:open
      ```

### Additional Scripts

-  **Build for production:**

   ```bash
   npm run build
   ```

-  **Start the production server:**

   ```bash
   npm start
   ```

### Troubleshooting

If you encounter any issues related to Node.js versions, consider using [nvm (Node Version Manager)](https://github.com/nvm-sh/nvm) to install and switch between multiple Node.js versions.

For any other issues or questions, consult the project documentation or submit an issue on the project's repository.

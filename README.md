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

```bash
npm install

npm run dev
```

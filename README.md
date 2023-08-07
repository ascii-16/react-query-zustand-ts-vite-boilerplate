# React Query, Zustand, TypeScript & Vite Boilerplate

This is a template repository to set up a project using React, React Query, Zustand, TypeScript, and Vite, aiming to provide a scalable structure and essential configurations to kick-start your next application.

## Stack

| Tool         | Purpose                                           |
| ------------ | ------------------------------------------------- |
| React        | A JavaScript library for building user interfaces |
| React Query  | Data synchronization library for React           |
| Zustand      | Minimalist state management                       |
| TypeScript   | Static typing for JavaScript                      |
| Vite         | Build tool and development server                 |

## Required Versions

| Tool        | Version    |
| ----------- | ---------- |
| NodeJS      | >=16       |
| TypeScript  | >=4.9.4    |

## Getting Started

### Clone the repository

```
git clone https://github.com/vintagegnome/react-query-zustand-ts-vite-boilerplate.git
cd react-query-zustand-ts-vite-boilerplate
```

### Installing Dependencies

```
npm install
```

### Running Locally

To run the project locally, simply execute:

```
npm run dev
```

## Scripts

| Command       | Description                                                                  |
| ------------- | -----------------------------------------------------------------------------|
| `start`       | Run `build:css` then watch TailwindCSS and Vite concurrently                 |
| `watch:css`   | Watch for changes in `index.css` and output to `styles.css` using TailwindCSS|
| `build:css`   | Build CSS using TailwindCSS from `index.css` to `styles.css`                 |
| `build`       | Run TypeScript compiler, build CSS and then Vite build                       |
| `preview`     | Run Vite preview                                                             |
| `lint`        | Lint TypeScript files using ESLint                                           |
| `lint:fix`    | Fix linting issues in TypeScript files using ESLint                          |
| `format`      | Format `.ts`, `.tsx`, and `.json` files using Prettier                       |
| `test`        | Run Jest tests                                                               |
| `release`     | Run `standard-version` for versioning                                        |
| `commit`      | Use `git-cz` for commits                                                     |
| `prepare`     | Set up Husky for git hooks in a production environment                       |


## Project Structure

Here's a basic overview of the significant folders in the boilerplate:

- **src/**: Contains the main source code.
  - **components/**: React components that will be used throughout the app.
  - **states/**: Zustand state configurations and logic.
  - **hooks/**: Custom hooks for the application.
  - **services/**: Services to manage APIs or other external data sources.
  - **utils/**: Utility functions that can be reused.

## Features

- **React Query**: Helps in fetching, caching, and updating asynchronous data.
- **Zustand**: For simple and scalable state management.
- **TypeScript**: For type-safe code and scalability.
- **Vite**: For faster builds and a smoother developer experience.

## Contribution

If you'd like to contribute to this boilerplate, feel free to fork and send a PR. All contributions are welcome!

## License

[MIT](https://choosealicense.com/licenses/mit/)

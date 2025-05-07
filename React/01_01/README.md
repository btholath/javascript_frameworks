
1. Ensure Node.js and npm is installed.
2. Install React.js
bijut@b:~/aws_apps/javascript_frameworks/React/01_01$ mkdir react-projects

create React projects with the help of Vite, by running npm create vite@latest <your-project-name>.
bijut@b:~/aws_apps/javascript_frameworks/React/01_01/react-projects$ npm create vite@latest my-app

choose React and Javascript

bijut@b:~/aws_apps/javascript_frameworks/React/01_01/react-projects$ cd my-app
bijut@b:~/aws_apps/javascript_frameworks/React/01_01/react-projects$ npm install
bijut@b:~/aws_apps/javascript_frameworks/React/01_01/react-projects$ npm run dev


Vanilla Javascript v/s React.js

# Comparing DOM Manipulation in Vanilla JavaScript vs React

This table shows how the same functionality—updating text on a button click—is implemented using **Vanilla JavaScript** and **React**. Each row explains the equivalent purpose in both paradigms.

| Vanilla JavaScript                                                                                                     | React (with Hooks)                                                                                       | Explanation                                                                                                         |
|------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------|
| `const buttonElement = document.querySelector('button');`                                                              | `import { useState } from 'react';`<br>`function App() {`<br>`  const [outputText, setOutputText] = useState('Initial text');` | Get references: In JavaScript, select the button manually. In React, we manage state instead of DOM nodes directly. |
| `const paragraphElement = document.querySelector('p');`                                                                | *(Handled by JSX binding via `{outputText}`)*                                                           | In React, you don't need to query the DOM directly; the paragraph content is tied to the component's state.         |
| `function updateTextHandler() { paragraphElement.textContent = 'Text was changed!'; }`                                 | `function updateTextHandler() { setOutputText('Text was changed!'); }`                                  | Both define a function to update the displayed text. JavaScript changes DOM directly, React updates component state.|
| `buttonElement.addEventListener('click', updateTextHandler);`                                                          | `return (<><button onClick={updateTextHandler}>Click to change text</button><p>{outputText}</p></>); }` | Event handling: JS uses `addEventListener`; React uses `onClick` within JSX.                                        |
| `<button>Click me</button><p>Initial text</p>` *(HTML assumed)*                                                       | *(Rendered via JSX)*                                                                                     | The visual result is similar: a button and a paragraph that updates on click.                                       |

## Summary

| Concept                | Vanilla JS                           | React                                 |
|------------------------|--------------------------------------|----------------------------------------|
| DOM Access             | Manual via `querySelector`           | Abstracted via state and JSX binding   |
| State Management       | Not built-in                         | `useState` manages component state     |
| Event Handling         | `addEventListener()`                 | JSX attribute like `onClick={...}`     |
| UI Rendering           | Direct DOM manipulation              | Declarative JSX re-renders automatically |


# How React Manipulates the DOM

This table summarizes how React interacts with the DOM using its internal structure and packages. It explains the transformation process of JSX, the role of core React packages, and how React can target environments beyond the browser.

| Concept                     | Description                                                                                                                                                   |
|-----------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **JSX Syntax**              | JSX allows blending HTML-like syntax with JavaScript. Browsers cannot interpret JSX directly, so it must be transformed into regular JavaScript before deployment. |
| **JSX Transformation**      | JSX is compiled into standard JavaScript function calls (e.g., `React.createElement`) by tools like Babel during build time.                                  |
| **No Direct DOM Instructions** | The compiled JSX doesn’t manipulate the DOM directly. Instead, it uses utility methods provided by React.                                                    |
| **Virtual DOM**             | React creates a lightweight, in-memory tree (virtual DOM) that mirrors the actual DOM to determine what changes need to be made.                              |
| **react Package**           | The core React package responsible for defining components, managing state, and building the virtual DOM structure.                                           |
| **react-dom Package**       | Bridges the virtual DOM and the real browser DOM. It converts React updates into real DOM instructions (add/remove/update elements).                          |
| **react-dom/client**        | Entry point for rendering components in modern React apps. E.g., `createRoot` is used to initialize React rendering.                                         |
| **Environment Targeting**   | React isn’t limited to browsers. For example, React Native uses the same `react` core but replaces `react-dom` with `react-native` to render native apps.     |
| **Why This Split Exists**   | This modular architecture allows React to target multiple platforms (DOM, native mobile, etc.) using the same component logic but different renderers.         |

## Summary

- React code written in JSX must be transpiled to JavaScript.
- React does not manipulate the DOM directly; it builds a virtual DOM.
- The `react-dom` package acts as the bridge between virtual DOM and real DOM.
- React Native swaps out `react-dom` with `react-native` to support mobile apps.


# Introducing Single Page Applications (SPAs) with React

React simplifies building complex user interfaces and is commonly used to manage the entire page content, creating what are known as **Single Page Applications (SPAs)**. This table outlines the key concepts and tools involved in building SPAs with React.

| Concept                             | Description                                                                                                                                                      |
|-------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Partial UI Management**           | React can manage specific UI parts (e.g., chat widget) on a page, but this is less common for complex websites.                                                  |
| **Full Page UI Management**         | More commonly, React is used to control the entire page and all user interactions to avoid inconsistencies and complexity.                                       |
| **React for Entire Website**        | Instead of mixing frameworks, React is often used across all pages to maintain consistency in complex web applications.                                          |
| **Routing in SPAs**                 | URL path changes are handled within React using routing libraries like `react-router-dom`, enabling seamless page transitions without full page reloads.         |
| **Initial HTML File**               | SPAs often use a single `index.html` file, which loads the React app; the rest of the UI is dynamically managed by JavaScript.                                   |
| **SPA Architecture**                | The entire UI is managed by JavaScript and React after the initial load, resulting in faster navigation and interactive experiences.                             |
| **Full-Stack React Apps**           | Combines frontend and backend logic using frameworks like Next.js for improved developer experience and server-side capabilities.                                |
| **Modern Frameworks**               | Next.js helps in building server-rendered React apps, and includes features like routing, data fetching, and server components.                                  |

## Summary

- SPAs load one HTML file and rely on JavaScript/React to control UI.
- Routing is handled in-browser using libraries like `react-router-dom`.
- Full-stack frameworks like Next.js extend React to support backend integration and server rendering.


# Vite-Based React Project Structure

This table outlines the typical structure and purpose of files and folders in a Vite-based React project. While naming conventions and layout can evolve, these are the most common components found in new Vite React apps.

| File/Folder                  | Purpose                                                                                                               |
|------------------------------|-----------------------------------------------------------------------------------------------------------------------|
| `src/`                       | Main source folder for the React application code.                                                                   |
| `src/main.jsx`               | Entry point for the React app, bootstraps the root component (`App.jsx`).                                            |
| `src/App.jsx`                | Root React component that contains the main UI logic; starting point for other components.                           |
| `src/*.css`                  | Stylesheets imported into JSX files to style components.                                                             |
| `src/assets/`                | Folder for storing images or other static assets used in the React components.                                       |
| `public/`                    | Static files like `favicon.ico` that are directly copied to the final build output.                                  |
| `index.html`                 | The single HTML page used by the SPA; loads the React JavaScript bundle.                                             |
| `package.json`               | Lists project dependencies, scripts, and metadata; includes both production and development tools.                   |
| `package-lock.json`          | Lockfile that ensures consistent dependency versions across environments.                                            |
| `.gitignore`                 | Specifies intentionally untracked files to ignore in Git (e.g., `node_modules/`, `.env`).                            |
| `node_modules/`              | Folder where all npm-installed dependencies (like React, ESLint, etc.) are physically stored.                        |

## Notes

- Files like `App.jsx` and `main.jsx` use the `.jsx` extension, signaling that they contain JSX (JavaScript + XML-like syntax).
- Most of your development will focus on `App.jsx` and additional components created within the `src/` folder.
- Configuration files like `.eslintrc`, `vite.config.js`, etc., might be present to customize tooling behavior.


Reference(s)
https://github.com/mschwarzmueller/book-react-key-concepts-e2/blob/01-what-is-react/exercises/questions-answers.md

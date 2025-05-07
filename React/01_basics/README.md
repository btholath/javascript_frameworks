# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Summary and Key Takeaways
Props are a key React concept that make components configurable and, therefore, reusable.
Props are automatically collected and passed into component functions by React.
You decide (on a per-component basis) whether you want to use the props data (an object) or not.
Props are passed into components like attributes or, via the special children prop, between the opening and closing tags.
You can use JavaScript features like destructuring, the rest property, or the spread operator to write concise, flexible code.
Since you are writing the code, it’s up to you how you want to pass data via props. Between the tags or as attributes? A single grouped attribute or many single-value attributes? It’s up to you.

https://github.com/mschwarzmueller/book-react-key-concepts-e2/blob/03-components-props/exercises/questions-answers.md
Which “problem” do props solve?
How are props passed into components?
How are props consumed inside of a component function?
Which options exist for passing (multiple) props into components?

## Common and Popular React Libraries

a brief, non-exhaustive list of popular third-party libraries that might be helpful:

TanStack Query: A very popular library that helps with data fetching, caching, and management in React apps (https://tanstack.com/query/latest).
Framer Motion: A React-specific library that allows you to build and implement powerful, visually pleasing animations into your React apps (https://www.framer.com/motion/).
React Hook Form: A library that simplifies the process of handling and validating user input (https://react-hook-form.com/).
Formik: Another popular library that helps with form input handling and validation (https://formik.org/).
Axios: A general JavaScript library that simplifies the process of sending HTTP requests and handling responses (https://axios-http.com/).
Redux: In the past, this was an essential React library. Nowadays, it can still be important as it can greatly simplify the management of (complex) cross-component or app-wide state (https://redux.js.org/).
Zustand: If you are in need of an extra library that helps with managing state in React apps, you can also explore Zustand—a very popular alternative to Redux (https://zustand-demo.pmnd.rs/).

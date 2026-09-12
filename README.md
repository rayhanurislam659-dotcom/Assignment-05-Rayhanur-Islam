# Dev Stack

Dev Stack is a simple interactive web project that helps developers explore modern development technologies and build their ideal technology stack.

##  Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* JSON
* Git & GitHub

##  Features

* **Technology Explorer** — Browse different frontend, backend, database, language, styling, and tooling technologies.
* **Build Your Stack** — Add technologies to your personal stack and remove them individually or all at once.
* **Responsive Design** — Fully responsive layout for desktop, tablet, and mobile devices.

##  React Questions

### 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to read and write.

### 2. What is the difference between props and state?

Props are data passed from a parent component to a child component. State is data managed inside a component that can change over time.

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update component data. It can be used to keep track of the technologies selected in the stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in a React component. It can be used to fetch the technology data from the JSON file when the application loads.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list and efficiently update the correct item when the list changes.

### 6. What is conditional rendering? Show one place you used it.

Conditional rendering means displaying different content depending on a condition.

For example, the stack can show an empty message when no technology has been selected, and show selected technologies when the stack contains items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent passes data to a child using props. A child can send information back to the parent by calling a function that the parent passes through props.

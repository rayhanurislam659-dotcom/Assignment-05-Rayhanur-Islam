# 🚀 Dev Stack

**Dev Stack** is an interactive web project designed to help developers explore modern web technologies and build their personalized tech stack effortlessly.

---

## 🛠️ Technologies Used

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Data Source:** JSON
- **Version Control & Hosting:** Git, GitHub

---

## ✨ Key Features

- **🔍 Technology Explorer:** Browse technologies across frontend, backend, databases, programming languages, styling tools, and dev tooling.
- **🛠️ Build Your Stack:** Easily add technologies to your personal stack and remove them individually or clear all at once.
- **📱 Responsive Design:** Fully optimized and responsive layout for desktop, tablet, and mobile screens.

---

## 📚 React Concepts & Q/A

### 1. What is JSX, and why is it used in React?
JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code inside JavaScript. It makes writing React component structures more intuitive and readable.

### 2. What is the difference between props and state?
- **Props:** Read-only data passed down from a parent component to a child component.
- **State:** Mutable data managed internally within a component that triggers re-renders when updated.

### 3. What does the `useState` hook do, and where is it used?
The `useState` hook allows functional components to hold and update local state. In this project, it tracks the user's selected technologies in the stack.

### 4. What does the `useEffect` hook do, and why is it needed for JSON data?
`useEffect` handles side effects in React. It is used here to fetch technology data from the external JSON file when the component first mounts.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
A unique `key` helps React's virtual DOM track individual elements efficiently, allowing it to re-render only changed items instead of re-rendering the whole list.

### 6. What is conditional rendering? Give an example.
Conditional rendering displays components or UI elements based on specific conditions. 
*Example:* Displaying an *"Empty Stack"* message when no items are selected versus showing the selected items list when data exists.

### 7. How is data passed between Parent and Child components?
- **Parent to Child:** Passed via standard `props`.
- **Child to Parent:** Executed by passing a callback function from the parent as a prop, which the child calls with the data.
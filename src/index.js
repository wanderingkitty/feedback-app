import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';

const root = document.getElementById('root');

const rootElement = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

if (root) {
  const rootContainer = ReactDOM.createRoot(root);
  rootContainer.render(rootElement);
} else {
  console.error("Failed to find root element in the document.");
}

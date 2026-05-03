import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import { ContextProvider } from "./utils/context.jsx";

createRoot(document.getElementById("root")).render(
  <Router>
    <ContextProvider>
      <App />
    </ContextProvider>
  </Router>,
);

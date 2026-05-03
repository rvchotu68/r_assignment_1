import { Routes, Route } from "react-router-dom";

import Books from "./components/Books.Component.jsx";
import Landing from "./pages/Landing.Page.jsx";
import BooksLayout from "./pages/BooksLayout.Page.jsx";
import BookDetails from "./components/BookDetails.Component.jsx";
import Auth from "./pages/Auth.Page.jsx";
import Login from "./components/Login.Component.jsx";
import Register from "./components/Register.Component.jsx";
import Header from "./components/Header.component.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/auth" element={<Auth />}>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
        </Route>
        <Route path="/books" element={<BooksLayout />}>
          <Route index element={<Books />} />
          <Route path=":id" element={<BookDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

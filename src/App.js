import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Users from "./Pages/Users";
import NotFound404 from "./Pages/NotFound404";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Router>
        <nav>
          <h1>Welcome!</h1>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/users">Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about/*" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/users" element={<Users />} />
          <Route path="/notfound-404" element={<NotFound404 />} />
          <Route path="*" element={<Navigate to="/not-found404" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import NotFound from "./pages/notfound";
import About from "./pages/about";
import Navbar from "./navbar";

export default function App() {
  return (
    <div>
      <h1>Basic Example</h1>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

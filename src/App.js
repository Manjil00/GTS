import { BrowserRouter, Routes, Route } from "react-router-dom";

//PAGES
import Home from "./pages/Home";
import Service from "./pages/Service";
import Aboutus from "./pages/Aboutus";
import Blog from "./pages/Blog";
import Clientdairies from "./pages/Clientdairies";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";


function App() {
return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/services" element={<Service/>} />
  <Route path="/blog" element={<Blog/>} />
  <Route path="/aboutus" element={<Aboutus/>} />
  <Route path="/clientdairies" element={<Clientdairies/>} />
  <Route path="/contact" element={<Contact/>} />
  <Route path="/cart" element={<Cart/>} />
</Routes>
</BrowserRouter>
);
}

export default App;

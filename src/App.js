import Home from "./routes/Home";
import Projects from "./routes/Projects";
import About from "./routes/About";
import Education from "./routes/Education";
import Contact from "./routes/Contact";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
   
   <>
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/projects" element={<Projects/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/education" element={<Education/>} />
   </Routes>
   </>
  );
}

export default App;

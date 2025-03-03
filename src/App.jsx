import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Estilos from "./components/Estilos"; 
import Historial from "./components/Historial"; 


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/historial" element={<Historial />} />
        <Route path="/estilos" element={<Estilos />} />
      </Routes>
    </Router>
  );
}

export default App;

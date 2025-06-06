import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Bienvenida from "./Pages/Bienvenida.jsx";
import Home from "./Pages/Home.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Bienvenida />} />
          <Route path="/home" element={<Home/>} />
        </Routes>

        <Toaster
          position="top-right"
          toastOptions={{
            className: "bg-gray-800 text-white",
            duration: 3000,
            style: {
              fontSize: "16px",
            },
          }}
        />
      </Router>
    </>
  );
}

export default App;

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Bootstrap from "./components/Bootstrap/Bootstrap";
import NotFound from "./components/NotFound/notFound";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Counter from "./components/Counter/Counter";






function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
     
        <Router>
          <Navigation></Navigation>
          <Routes>
            <Route path="/" element={<Bootstrap />} />
            <Route path="/bootstrap" element={<Bootstrap />} />
            <Route path="/routing" element={<ProtectedRoute><Routing /></ProtectedRoute>} />
            <Route path="/counter" element={<ProtectedRoute><Counter /></ProtectedRoute>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      
    </div>
  );
}

export default App;

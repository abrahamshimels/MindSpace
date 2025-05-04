
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Learn from "./pages/Learn"
import Tool from "./pages/Tool"
import Community from "./pages/Community"
import Support from "./pages/Support"
import Contact from "./pages/Contact"
import About from "./pages/About"
import LearnDetail from "./pages/LearnDetail"
import ForumDetail from "./pages/ForumDetail"



function App() {
  return (

    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />}/>
          <Route path="/tool" element={<Tool />}/>
          <Route path="/community" element={<Community />}/>
          <Route path="/support" element={<Support />}/>
          <Route path="/aboutus" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/learn/:id" element={<LearnDetail />}/>
          <Route path="/community/:id" element={<ForumDetail/>}/>
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

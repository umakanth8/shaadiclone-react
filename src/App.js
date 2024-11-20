import React, { useState } from "react";
import "./App.css";
import Subpart from "./components/Subpart";
import BackgroundSection from "./components/Main";
import Stories from "./components/Stories";
import Footer from "./components/Footer";
import Login from "./components/Login";

function App() {
  

  return (
    <div className="App">
      
      
        <>
          <BackgroundSection />
          <Subpart />
          <Stories />
          <Footer />
        </>

    </div>
  );
}

export default App;

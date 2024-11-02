import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FormText from "./components/FormText";
// import { About } from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // 'light' or 'dark'

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212"; // Dark background
      showAlert("The dark mode has been enables ", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white"; // Light background
      showAlert("The light mode has been enables ", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
        <FormText
                  showAlert={showAlert}
                  heading="Enter the text to analyze"
                  mode={mode}
                />
          {/* <Routes> */}
            {/* <Route
              exact path="/"
              element={
                
              } */}
           
            {/* <Route exact path="/about" element={<About />} />
          </Routes> */}
        </div>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;

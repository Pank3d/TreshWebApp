import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import SignIn from "./Auth/SignIn";

import SignUp from "./Auth/SignUp";
import Home from "./pages/Home";
import Support from "./pages/Support";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/support" element={<Support/>} />
      </Routes>
    </>
  );
}

export default App;

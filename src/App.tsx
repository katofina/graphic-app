import "./App.css";
import React from "react";
import { Layout } from "./Layout";
import { Routes, Route } from "react-router-dom";
import Graphic from "./components/main/Canvas/Graphic";
import Main from "./components/main/Main";
import Save from "./components/main/Save";
import SignIn from "./components/sign/SignIn";
import SignUp from "./components/sign/SignUp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/draw" element={<Graphic />} />
          <Route path="/save" element={<Save />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

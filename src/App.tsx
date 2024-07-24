import './App.css';
import React from 'react';
import { Layout } from './Layout.tsx';
import { Routes, Route } from 'react-router-dom';
import Graphic from './components/main/Canvas/Graphic.tsx';
import Main from './components/main/Main.tsx';
import Save from './components/main/Save.tsx';
import SignIn from './components/sign/SignIn.tsx';
import SignUp from './components/sign/SignUp.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='/draw' element={<Graphic/>}/>
          <Route path='/save' element={<Save/>}/>
          <Route path='/signin' element={<SignIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

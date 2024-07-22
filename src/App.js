import './App.css';
import { Layout } from './Layout.jsx';
import { Routes, Route } from 'react-router-dom';

import Graphic from './components/main/Canvas/Graphic.jsx';
import Main from './components/main/Main.jsx';
import Save from './components/main/Save.jsx';
import SignIn from './components/sign/SignIn.jsx';
import SignUp from './components/sign/SignUp.jsx';

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

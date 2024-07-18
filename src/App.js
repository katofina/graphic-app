import './App.css';
import Graphic from './components/main/Canvas/Graphic.jsx';
import Main from './components/main/Main.jsx';
import { Layout } from './Layout.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
          <Route path='/draw' element={<Graphic/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

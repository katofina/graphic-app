import './App.css';
import { Layout } from '../Layout.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}/>
      </Routes>
    </>
  );
}

export default App;

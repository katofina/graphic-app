import './App.css';
import Main from './components/main/Main.jsx';
import { Layout } from './Layout.jsx';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Main/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;

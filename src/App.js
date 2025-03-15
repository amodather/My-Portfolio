import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './Pages/Main';
import './fonts/SoulcraftVF.woff2'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
    </Routes>
    </>
  );
}

export default App;

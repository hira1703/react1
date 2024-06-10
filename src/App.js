import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} exact/>    
      <Route path='detail' element={<Detail/>}/>      {/*linkin sağında detail yazıyorsa Detail i aç dedik */}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;


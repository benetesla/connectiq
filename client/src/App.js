import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdicionarFornecedor from './components/AdicionarFornecedor';
import EditarFornecedor from './components/EditarFornecedor';
import ListUsers from './components/Listuser';

function App() {
  return (
    <div className='App'>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ListUsers />} />
        <Route path='/adicionar' element={<AdicionarFornecedor />} />
        <Route path='/editar/:id' element={<EditarFornecedor />} />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;

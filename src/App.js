// import logo from './logo.svg';
import './App.css';
import "./css/bootstrap.css"
import ListContainer from './components/ItemListConteiner';
import DetailContainer from './components/ItemDetailConteiner';
import CartBody from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomContext from './contexts/CustomContext';
import SushiGot from './components/SushiGot';
import Rules from './components/Rules';


function App() {


  return (
    <CustomContext>
      <BrowserRouter>
        <Routes>
          <Route path="/sushi_got" element={<SushiGot />}></Route>
          <Route path="/rules" element={<Rules />}></Route>
          <Route path="/all_cards" element={<ListContainer />}></Route>
          <Route path="/category/:id" element={<ListContainer />}></Route>
          <Route path="/card/:id" element={<DetailContainer/>}></Route>
          <Route path="/cart" element={<CartBody/>}></Route>
        </Routes>  
      </BrowserRouter>
    </CustomContext>
  );
}

export default App;

import { Routes, Route, Link } from 'react-router-dom';
import Navigation from "./components/Navigation/Navigation";
import Orders from "./components/Orders/Orders";
import Products from "./components/Products/Products";
import {Main} from "./App.style";
import TopMenu from "./components/TopMenu/TopMenu";


function App() {
  return (
      <>
          <TopMenu/>
          <Navigation/>
          <Main>
              <Routes>
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/products" element={<Products />} />
              </Routes>
          </Main>
      </>
  );
}

export default App;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Counter from "./components/counter/Counter";
import ImageTask from "./components/imagetask/ImageTask";
import { Nav } from "./components/nav/Nav";
import Products from "./components/products/Products";
import { Home } from "./home/Home";
import { Electronics } from "./components/products/categories/electronics/Electronics";
import { Womens } from "./components/products/categories/womens/Womens";
import { Jewelries } from "./components/products/categories/jewelleries/Jewelleries";
import { Mens } from "./components/products/categories/mens/Mens";
import { PageNotFound } from "./components/pagenotfound/PageNotFound";
import { AllProducts } from "./components/allproducts/AllProducts";
import { UserNames } from "./components/user-names/UserNames";
import { A } from "./components/context-api/A";
import { HomeContext } from "./components/context-api/HomeContext";
import { Ref } from "./components/ref/Ref";
import { Timer } from "./components/timer/Timer";
import { RefDom } from "./components/ref/RefDom";
import { UseReducer } from "./components/reducer/UseReducer";
import { CounterApp } from "./components/counterapp/CounterApp";
import { Name } from "./redux/components/Name";
import { Details } from "./redux/components/Details";
import { City } from "./redux/components/City";
import { ReduxHome } from "./redux/ReduxHome";
import { ProductDetails } from "./components/product-details/ProductDetails";
import { Users } from "./components/json-server/Users";
import { NewUser } from "./components/json-server/NewUser";
import { UserHome } from "./components/json-server/UserHome";

function App() {
  return (
    <div className="app">
      <Nav />

      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/products"} element={<Products />}>
          <Route path={"electronics"} element={<Electronics />} />
          <Route path={"jewellery"} element={<Jewelries />} />
          <Route path={"mencloth"} element={<Mens />} />
          <Route path={"womencloth"} element={<Womens />} />
        </Route>
        <Route path={"/allproducts"} element={<AllProducts />} />
        <Route path={"/counter"} element={<Counter />} />
        <Route path={"/imagetask"} element={<ImageTask />} />
        <Route path={"/redux"} element={<ReduxHome />} />
        <Route path={"/jsonserver"} element={<UserHome />} />
        <Route path={"/productdetails/:id"} element={<ProductDetails />} />
        <Route path={"/usernames"} element={<UserNames />} />
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// important
//1. import for component.... import component_name from './path'
//2. import for css.... import './path'
//3. for every component ..separate folder(small) and separate file(capital)
//.............................................
//created separate javascript folder for reference

import "./App.css";
import Counter from "./components/counter/Counter";
import ImageTask from "./components/imagetask/ImageTask";
import { Nav } from "./components/nav/Nav";
import Products from "./components/products/Products";
import { Home } from "./home/Home";

function App() {
  return (
    <div className="app">
      <Nav />
      <Counter />
      <ImageTask />
      <Products />
      <Home />
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

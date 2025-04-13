import { Link, Outlet } from "react-router-dom";
import "./Products.css";
function Products() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px", color: "green" }}>
        Products Components
      </h1>
      <div className="productContainer">
        <div className="linkContainer">
          <Link
            to="electronics"
            style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
          >
            Electronics
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
            to="jewellery"
          >
            Jewellery
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
            to="mencloth"
          >
            Men's Clothing
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none", fontSize: "21px" }}
            to="womencloth"
          >
            Women's Clothing
          </Link>
        </div>
        <div className="componentContainer">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Products;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllProducts.css";
import { Card } from "./card/Card";
import { useDispatch, useSelector } from "react-redux";
import { productAction } from "../../redux/actions/ProductAction";

export const AllProducts = () => {
  let productdata = useSelector((data) => data.products);
  let [allproducts, setallproducts] = useState([]);
  let dispatch = useDispatch();
  useEffect(() => {
    if (productdata.length === 0) {
      getProducts();
    }
  }, []);
  const getProducts = () => {
    console.log("executed");
    var promiseObject = axios.get("https://fakestoreapi.com/products");
    //return one promise object
    promiseObject
      .then((response) => {
        console.log("response", response.data);
        // setallproducts(response.data);
        let productItems = productAction(response.data);
        dispatch(productItems);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div style={{ padding: "50px" }}>
      <h2>AllProducts</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis
        quia dignissimos recusandae aut maxime voluptatibus minus laboriosam
        voluptatem pariatur nam quas error voluptates quam laudantium
        necessitatibus, iste possimus minima fuga alias repellendus nostrum
        voluptatum dolorem? Officia similique odio minus quidem at blanditiis,
        soluta excepturi ipsam nulla reiciendis nihil tempore vitae ducimus
        distinctio quae placeat laudantium repudiandae laboriosam quisquam
        inventore sed ratione perspiciatis et. A fugit quidem dolorem omnis. Cum
        placeat debitis laboriosam laborum deserunt adipisci unde quo aspernatur
        velit eligendi! Reprehenderit sit facilis hic, tempora illo magni
        mollitia minima natus quaerat eius exercitationem rem quasi.
        Voluptatibus porro minus nihil incidunt soluta nobis amet, sequi
        asperiores quam commodi natus molestias ea? Perspiciatis nisi amet quasi
        laboriosam, quod eligendi et animi suscipit consectetur? Reiciendis
        architecto alias expedita voluptas autem! Perferendis nostrum ipsa natus
        at suscipit, veritatis ea officiis aut esse et ipsum quasi, minima, qui
        voluptates earum velit quae ab adipisci consequuntur?
      </p>

      <div className="allproductsdata">
        {productdata.map((product) => {
          return (
            <Card
              title={product.title}
              image={product.image}
              price={product.price}
              id={product.id}
            />
          );
        })}
      </div>
    </div>
  );
};

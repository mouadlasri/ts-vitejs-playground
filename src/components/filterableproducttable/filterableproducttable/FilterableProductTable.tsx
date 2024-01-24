import React from "react";

import { Searchbar } from "../searchbar/Searchbar";
import { ProductTable } from "../producttable/ProductTable";

// import css
import "./filterableproducttable.css";

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export const FilterableProductTable = (props: { products: Product[] }) => {
  return (
    <div className="filterable-product-table">
      <Searchbar />
      <ProductTable products={props.products} />
      <div>
        {/* {props.products.map((product) => (
          <div>
            <span>{product.category}</span>
            <span>{product.price}</span>
            <span>{product.name}</span>
          </div>
        ))} */}
      </div>
    </div>
  );
};

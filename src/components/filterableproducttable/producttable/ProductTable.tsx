import React, { useState } from "react";

import { ProductCategoryRow } from "../productcategoryrow/index";
import { ProductRow } from "../productrow/index";
// import css
import "./ProductTable.css";

interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export const ProductTable = (props: { products: Product[] }) => {
  // have to give it a type JSX.Element because constant valiables can't
  // be initialized with a type of any and can't be null/empty
  const rows: JSX.Element[] = [];
  let lastCategory: string = "";

  props.products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
    }
    rows.push(<ProductRow product={product} key={product.name} />);

    lastCategory = product.category;
  });

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
};

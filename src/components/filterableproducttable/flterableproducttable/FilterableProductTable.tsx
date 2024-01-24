import React from "react";

import { Searchbar } from "../searchbar/Searchbar";
import { ProductTable } from "../producttable/ProductTable";

// import css
import "./filterableproducttable.css";

export const FilterableProductTable = () => {
  return (
    <div>
      <Searchbar />
      <ProductTable />
    </div>
  );
};

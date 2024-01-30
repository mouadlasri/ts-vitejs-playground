import React, { useState } from "react";

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
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="filterable-product-table">
      <Searchbar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable products={props.products} filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  );
};

import React from "react";

import "./productcategoryrow.css";

export const ProductCategoryRow = (props: { category: string }) => {
  return (
    <div>
      <span>{props.category}</span>
    </div>
  );
};

import React from "react";

import "./productcategoryrow.css";

export const ProductCategoryRow = (props: { category: string }) => {
  return (
    <tr>
      <th colSpan={2}>{props.category}</th>
    </tr>
  );
};

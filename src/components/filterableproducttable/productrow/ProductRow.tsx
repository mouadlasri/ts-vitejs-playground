import React from "react";

import "./productrow.css";

export const ProductRow = (props: { name: string; price: string }) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

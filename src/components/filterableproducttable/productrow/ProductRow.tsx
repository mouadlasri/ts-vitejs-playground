import React from "react";

import "./productrow.css";

// export const ProductRow = (props: { name: string; price: string }) => {
//   return (
//     <tr>
//       <td>{props.name}</td>
//       <td>{props.price}</td>
//     </tr>
//   );
// };
interface Product {
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}

export const ProductRow = (props: { product: Product }) => {
  const name = props.product.stocked ? props.product.name : <span style={{ color: "red" }}>{props.product.name}</span>;
  console.log(props);
  return (
    <tr>
      <td>{name}</td>
      <td>{props.product.price}</td>
    </tr>
  );
};

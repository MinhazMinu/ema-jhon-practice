import React, { useState } from "react";
import fakeData from "../../fakeData";

const Shop = () => {
  /**
   * initail fake data state
   */
  const first10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(first10);

  return (
    <div>
      <ul>
        {products.map(item => (
          <li> {item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Shop;

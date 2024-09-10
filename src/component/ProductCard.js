import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const goToProductDatail = () => {
    navigate(`/products/${item.id}`);
  };
  return (
    <div className="productCard" onClick={goToProductDatail}>
      <div>
        <img width={300} src={item?.img} alt="" />
      </div>
      <div>
        <p className="productCard-small">
          {item?.choice === true ? "consicou choice" : ""}
        </p>
      </div>
      <div>
        <p>{item?.title}</p>
      </div>
      <div>
        <p>{item?.price}</p>
      </div>
      <div>
        <p className="productCard-small">
          {item?.new === true ? "신제품" : ""}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

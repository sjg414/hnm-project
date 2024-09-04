import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item }) => {
  const navigate = useNavigate();

  //상품 클릭 시 상품 디테일 페이지 이동
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div
      className="productCard"
      onClick={() => {
        showDetail();
      }}
    >
      <img className="product-img" src={item?.img} alt="img" />
      <div className="choice-new">
        {item?.choice === true ? "Consious choice" : " "}
      </div>
      <div>{item?.title}</div>
      <div>₩{item?.price}</div>
      <div className="choice-new">{item?.new === true ? "신제품" : " "}</div>
    </div>
  );
};

export default ProductCard;

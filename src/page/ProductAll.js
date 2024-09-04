import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Col, Container, Row } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]); //productList 상태관리
  const [query, setQuery] = useSearchParams();

  //db.json에서 product data 가져오기, search 기능 추가
  const getProducts = async () => {
    let searchQuery = query.get("q") || ""; //search keyword
    let url = `https://my-json-server.typicode.com/sjg414/hnm-project/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  };

  //api 호출
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;

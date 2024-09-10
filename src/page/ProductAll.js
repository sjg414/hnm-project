import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../component/ProductCard";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [items, setItems] = useState([]);
  const [query, setQueay] = useSearchParams();

  const getProductData = async () => {
    let search = query.get("q") || "";
    let url = `https://my-json-server.typicode.com/sjg414/hnm-project/products?q=${search}`;
    let response = await fetch(url);
    let data = await response.json();
    setItems(data);
  };

  useEffect(() => {
    getProductData();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {items.map((item) => (
            <Col xs={15} md={6} lg={3}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="detail-img">
          <img src={product?.img} alt="" />
        </Col>
        <Col className="detail-data">
          <div>
            <h4>{product?.title}</h4>
          </div>
          <div>
            <h5>₩{product?.price}</h5>
          </div>
          <div>
            <p className="productCard-small">
              {product?.choice === true ? "consicou choice" : ""}
            </p>
          </div>
          <div className="sizeSelect">
            <Form.Select aria-label="sizeSelect">
              <option>사이즈 선택</option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </Form.Select>
          </div>
          <div>
            <Button variant="dark">추가</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;

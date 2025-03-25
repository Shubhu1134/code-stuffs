import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import './productCard.css';
const ProductCard = ({ product }) => {
  const {
    id,
    title,
    description,
    price,
    discountPercentage,
    rating,
    thumbnail
  } = product;
  console.log(product, "productCard");
  const dispatch = useDispatch();

  return (
    <Card className="product-card">
      <Link to={`/products/${id}`}>
        <Card.Img variant="top" src={thumbnail} />
      </Link>
      <Card.Body>
        <Link to={`/product/${id}`}>
          <Card.Title>{title}</Card.Title>
        </Link>
        <Card.Text>{description.slice(0, 100)}</Card.Text>
        <div className="product-info">
          <div className="product-price">
            <span className="price">
              ${(price - price * (discountPercentage / 100)).toFixed(2)}
            </span>
            {discountPercentage && (
              <span className="discount">{discountPercentage}% OFF</span>
            )}
          </div>
          <div className="product-rating">
            <span className="rating">{rating}</span>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </Card.Body>
      <div className="mt-5 d-flex justify-content-between ">
        <Button
          variant="warning"
          onClick={() => dispatch({ type: "addToCart", payload: product })}
        >
          Add to Cart
        </Button>
        <Link to={`/product/${id}`}>
          <Button variant="primary">View Product</Button>
        </Link>
      </div>
    </Card>
  );
};

export default ProductCard;

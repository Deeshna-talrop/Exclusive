import styled from "styled-components";

import Footer from "../includes/Footer";
import Headers from "../includes/Header";
import ProductPage, { CategoryContent } from "../screens/ProductPage";

import { Link, useParams } from "react-router-dom";

import Star from "../../assets/Star.svg";
import StarUnfilled from "../../assets/Star-unfilled.svg";
import Return from "../../assets/Icon-return.svg";
import Delivery from "../../assets/icon-delivery.svg";
import { useEffect, useMemo, useState } from "react";

export default function Product() {
  const { id } = useParams();
  const product = CategoryContent.find((p) => p.id === Number(id));
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(CategoryContent.slice(0, 4));
  }, []);

  const [styles, setStyles] = useState({
    border: "none",
  });

  const handleClick = () => {
    setStyles({
      border: "1px solid #000",
    });
    if (!product) {
      return <div>Product not found</div>;
    }
  };
  window.scrollTo(0, 0);
  return (
    <>
      <Headers />
      <ProductConatiner>
        <BreadCrumb>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "10px",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            Home
          </Link>{" "}
          /{" "}
          <Link
            to={"/products/"}
            style={{
              textDecoration: "none",
              margin: "0",
              margin: "0 10px ",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            {product.category}
          </Link>
          {""}/{""}
          <p
            style={{
              textDecoration: "none",
              margin: "0",
              marginLeft: "10px",
            }}
          >
            {product.name}
          </p>
        </BreadCrumb>
        <Products>
          <ProductImage>
            <img src={product.image} alt="Image" />
          </ProductImage>
          <ProductInfo>
            <ProductName>{product.name}</ProductName>
            <ProductRating>
              <StarListing>
                <RatingStar src={Star} alt="Image" />
                <RatingStar src={Star} alt="Image" />
                <RatingStar src={Star} alt="Image" />
                <RatingStar src={Star} alt="Image" />
                <RatingStar src={Star} alt="Image" />
                <RatingStar src={StarUnfilled} alt="Image" />
              </StarListing>
              <p style={{ margin: "0 10px 0 6px", whiteSpace: "nowrap" }}>
                ({product.rating} reviews)
              </p>{" "}
              {"|"}
              {product.details && product.details.inStock == true ? (
                <p
                  style={{
                    color: "#3fa60b",
                    marginLeft: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  in stock
                </p>
              ) : (
                <p
                  style={{
                    color: "#ff0000",
                    marginLeft: "10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Out of stock
                </p>
              )}
            </ProductRating>
            <ProductPrice>{product.price}</ProductPrice>
            {product.details && product.details.description ? (
              <Description>{product.details.description}</Description>
            ) : null}
            <Divider></Divider>
            <ColorDetails>
              Colors:
              {product.colors?.map((color, index) => (
                <ProductColor
                  key={index}
                  style={{ backgroundColor: `${color.color}`, styles }}
                  onClick={handleClick}
                ></ProductColor>
              ))}
            </ColorDetails>
            <Features>
              <Feature>
                <img src={Delivery} alt="Delivery" />
                <div>
                  <h4>Free Delivery</h4>
                  <a href="/">
                    Enter your postal code for Delivery Availability
                  </a>
                </div>
              </Feature>
              <Divider style={{ borderColor: "#656565" }} />
              <Feature>
                <img src={Return} alt="return" />
                <div>
                  <h4>Free shipping</h4>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <p>Free 30 Days Delivery Returns.</p>{" "}
                    <a href="/">Details</a>
                  </div>
                </div>
              </Feature>
            </Features>
            <Button>
              <button
                style={{
                  backgroundColor: "transparent",
                  border: "1px solid #000",
                  color: "#000",
                }}
              >
                Add To Cart
              </button>
              <button>Buy Now</button>
            </Button>
          </ProductInfo>
        </Products>
      </ProductConatiner>
      <ExtraProduct>
        <ProductDivider>
          <div></div>
          <p>Related Item</p>
        </ProductDivider>
        <ProductPage filteredProducts={filteredProducts} />
      </ExtraProduct>
      <Footer />
    </>
  );
}
const ExtraProductList = styled.div``;
const ProductConatiner = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const BreadCrumb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 80%;
  height: 100%;
  margin: 40px 0;
  font-size: 16px;
  font-weight: 500;
  padding: 0;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
    margin: 20px 0;
    width: 100%;
  }
`;
const Products = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin: 40px 0;
  gap: 40px;
  text-decoration: none;
  @media screen and (max-width: 1024px) {
    gap: 36px;
  }
  @media screen and (max-width: 620px) {
    gap: 20px;
    flex-direction: column;
  }
`;

const ProductImage = styled.div`
  border-radius: 4px;
  background-color: #f0f0f0;

  display: flex;
  min-height: 550px;
  min-width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1160px) {
    min-height: 550px;
  }
  @media screen and (max-width: 1046px) {
    min-height: 550px;
  }
  @media screen and (max-width: 1024px) {
    min-height: 500px;
  }
  @media screen and (max-width: 960px) {
    min-height: 450px;
  }
  @media screen and (max-width: 820px) {
    min-height: 400px;
  }
  @media screen and (max-width: 720px) {
    min-height: 350px;
  }
  @media screen and (max-width: 620px) {
    min-width: 100%;
  }
  @media screen and (max-width: 425px) {
    min-width: 100%;
    min-height: 250px;
  }

  img {
    width: 50%;
    height: 50%;
    border-radius: 4px;
    object-position: center;
    object-fit: contain;
    @media screen and (max-width: 620px) {
      width: 50%;
    }
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 50%;
  gap: 16px;
  text-decoration: none;
  @media screen and (max-width: 1024px) {
    gap: 12px;
    margin-top: 10px;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
  }
`;

const ProductName = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin: 0;
  color: #000;
  width: 100%;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (max-width: 1024px) {
    font-size: 26px;
  }
  @media screen and (max-width: 960px) {
    font-size: 24px;
  }
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
  color: #db4444;
  margin-right: 20px;
  text-decoration: none;
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
`;
const Description = styled.p`
  margin: 0;
  color: #666;
  line-height: 24px;
  font-size: 16px;
  @media screen and(max-width:1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 820px) {
    font-size: 12px;
    line-height: 18px;
  }
`;
const StarListing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: #666;

  img {
    width: 14px;
    height: 14px;
    margin-right: 2px;
    @media screen and (max-width: 1024px) {
      width: 14px;
      height: 14px;
    }
    @media screen and (max-width: 820px) {
      width: 12px;
      height: 12px;
    }
  }
  &:last-child {
    margin-right: 6px;
  }
  @media screen and (max-width: 720px) {
    margin-right: 0px;
  }
`;
const ProductRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  font-weight: 500;
  width: 100%;
  color: #666;
  p {
    margin: 0;
    font-size: 14px;
    @media screen and (max-width: 720px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;
const Divider = styled.div`
  width: 100%;
  border: 0.7px solid #ccc;
`;
const ColorDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  font-size: 18px;
  @media (min-width: 820px) {
    font-size: 16px;
    gap: 8px;
  }
`;
const ProductColor = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 1px solid #fff;
  @media screen and (max-width: 820px) {
    width: 16px;
    height: 16px;
  }
`;
const Features = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border: 1px solid #656565;
  margin: 12px 0;
  @media screen and (max-width: 820px) {
    margin: 0;
  }
`;
const Feature = styled.div`
  padding: 18px;
  margin-bottom: 6px;
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 1024px) {
    padding: 12px;
  }
  @media screen and (max-width: 820px) {
    padding: 10px;
  }
  img {
    margin-right: 12px;
    @media screen and (max-width: 1024px) {
      margin-right: 8px;
      width: 36px;
      height: 36px;
    }
    @media screen and (max-width: 820px) {
      width: 24px;
      height: 24px;
    }
  }
  h4 {
    margin: 0;
    margin-bottom: 6px;
    @media screen and (max-width: 1024px) {
      font-size: 14px;
      margin-bottom: 4px;
    }
    @media screen and (max-width: 820px) {
      font-size: 14px;
    }
  }
  div p {
    margin: 0;
    color: #000;
    font-size: 12px;
    margin-right: 4px;
  }
  div a {
    margin: 0;
    font-size: 12px;
    color: #000;
    text-decoration: underline;
    font-weight: 500;
  }
`;

const Button = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  width: 100%;
  button {
    background-color: #000;
    color: #fff;
    border: none;
    font-size: 16px;
    width: 50%;
    height: 40px;
    border-radius: 6px;
    cursor: pointer;
    @media screen and (max-width: 820px) {
      font-size: 14px;
      height: 36px;
    }
  }

  &:-child {
    background-color: transparent;
    border: 1px solid #000;
    color: #000;
  }
`;

const RatingStar = styled.img``;
const ExtraProduct = styled.div`
  width: 90%;
  margin: 0 auto;
`;
const ProductDivider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
  color: #db4444;
  div {
    width: 20px;
    height: 32px;
    background-color: #db4444;
    border-radius: 5px;
  }
  p {
    margin-left: 12px;
    font-size: 16px;
  }
  @media screen and (max-width: 960px) {
    p {
      font-size: 14px;
      margin: 0px;
      margin-left: 6px;
    }
    div {
      width: 18px;
      height: 28px;
      background-color: #db4444;
      border-radius: 5px;
    }
  }
  @media screen and (max-width: 820px) {
    p {
      font-size: 12px;
      margin: 0px;
      margin-left: 6px;
    }
    div {
      width: 16px;
      height: 24px;
      background-color: #db4444;
      border-radius: 5px;
    }
  }
`;

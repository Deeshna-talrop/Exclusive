import styled from "styled-components";
import { Link } from "react-router-dom";

import Star from "../../assets/Star.svg";
import StarUnfilled from "../../assets/Star-unfilled.svg";
import QuickView from "../../assets/Quick View.svg";
import WishList from "../../assets/wishlist.svg";
import { useState } from "react";
export const CategoryContent = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    image: require("../../assets/Dogfood.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
    colors: [{ color: "#000000" }, { color: "#ffff00" }],
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    image: require("../../assets/Camera.png"),
    price: "$100",
    rating: "4.9",
    category: "Camera",
    colors: [{ color: "#ff0000" }, { color: "#ffffff" }],
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    image: require("../../assets/Laptop.png"),
    price: "$100",
    rating: "4.9",
    category: "Laptop, computer",
  },
  {
    id: 4,
    name: "Curology Product Set ",
    image: require("../../assets/Cosmetics.png"),
    price: "$100",
    rating: "4.9",
    category: "beauty",
  },
  {
    id: 5,
    name: "Kids Electric Car",
    image: require("../../assets/Car.png"),
    price: "$100",
    rating: "4.9",
    category: "Toys",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    image: require("../../assets/Shoe.png"),
    price: "$100",
    rating: "4.9",
    category: "Shoe",
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    image: require("../../assets/Game.png"),
    price: "$100",
    rating: "4.9",
    category: "Game",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    image: require("../../assets/Jacket.png"),
    price: "$100",
    rating: "4.9",
    category: "Cloth",
  },
];
export default function ProductPage() {
  const [styles, setStyles] = useState({
    border: "none",
  });

  const handleClick = () => {
    setStyles({
      border: "1px solid #000",
    });
  };
  return (
    <>
      <ProductConatiner>
        <ProductList>
          {CategoryContent.map((category) => (
            <Product>
              <Link
                to={`/product/${category.id}`}
                style={{ width: "100%", textDecoration: "none" }}
              >
                <ProductImage>
                  <img src={category.image} alt="Image" />
                  <IconList>
                    <img src={WishList} alt="Wish List" />
                    <img src={QuickView} alt="Quick View" />
                  </IconList>
                  <button>Add To Cart</button>
                </ProductImage>
                <ProductInfo>
                  <ProductName>{category.name}</ProductName>
                  <ProductDetails>
                    <ProductPrice>{category.price}</ProductPrice>
                    <ProductRating>
                      <StarListing>
                        <RatingStar src={Star} alt="Image" />
                        <RatingStar src={Star} alt="Image" />
                        <RatingStar src={Star} alt="Image" />
                        <RatingStar src={Star} alt="Image" />
                        <RatingStar src={Star} alt="Image" />
                        <RatingStar src={StarUnfilled} alt="Image" />
                      </StarListing>
                      <p>({category.rating})</p>
                    </ProductRating>
                  </ProductDetails>
                  <ColorDetails>
                    {category.colors?.map((color, index) => (
                      <ProductColor
                        key={index}
                        style={{
                          backgroundColor: `${color.color}`,
                        }}
                        onClick={handleClick}
                      ></ProductColor>
                    ))}
                  </ColorDetails>
                </ProductInfo>
              </Link>
            </Product>
          ))}
        </ProductList>
      </ProductConatiner>
    </>
  );
}

const ProductConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin-bottom: 20px;
  width: 100%;
  @media screen and (max-width: 620px) {
    justify-content: space-evenly;
  }
`;

const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 20%;
  margin: 0 20px 40px 0;
  cursor: pointer;
  text-decoration: none;

  @media screen and (max-width: 1024px) {
    max-height: 260px;
    max-width: 20%;
  }
  @media screen and (max-width: 960px) {
    max-height: 240px;
    max-width: 22%;
    margin: 0 18px 36px 0;
  }
  @media screen and (max-width: 820px) {
    max-height: 220px;
    margin: 0 16px 32px 0;
  }
  @media screen and (max-width: 720px) {
    max-height: 200px;
    margin: 0 12px 20px 0;
  }
  @media screen and (max-width: 540px) {
    max-width: 28%;
  }
  @media screen and (max-width: 425px) {
    max-width: 30%;
  }
  @media screen and (max-width: 375px) {
    max-width: 42%;
  }
`;

const ProductImage = styled.div`
  border-radius: 4px;
  background-color: #f0f0f0;

  display: flex;
  min-height: 260px;
  min-width: 260px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1160px) {
    min-height: 240px;
    min-width: 240px;
  }
  @media screen and (max-width: 1046px) {
    min-height: 220px;
    min-width: 220px;
  }
  @media screen and (max-width: 1024px) {
    min-height: 200px;
    min-width: 200px;
  }
  @media screen and (max-width: 960px) {
    min-height: 180px;
    min-width: 180px;
  }
  @media screen and (max-width: 820px) {
    min-height: 160px;
    min-width: 160px;
  }
  @media screen and (max-width: 720px) {
    min-height: 140px;
    min-width: 130px;
  }

  @media screen and (max-width: 580px) {
    min-height: 120px;
    min-width: 100%;
  }
  @media screen and (max-width: 540px) {
    min-height: 120px;
    min-width: 100%;
  }

  img {
    width: 60%;
    height: 60%;
    border-radius: 4px;
    object-position: center;
    object-fit: contain;
    @media screen and (max-width: 1024px) {
      width: 55%;
      height: 55%;
    }
    @media screen and (max-width: 960px) {
      width: 55%;
      height: 55%;
    }
    @media screen and (max-width: 540px) {
      width: 50%;
      height: 50%;
    }
  }
  &:hover {
    button {
      visibility: visible;
      opacity: 1;
    }
  }
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 20%;
    color: #fff;
    text-decoration: none;
    background-color: #000;
    border: none;
    border-radius: 0 0 6px 6px;
    visibility: hidden;
    opacity: 0;
    cursor: pointer;
    transition: visibility 0.3s linear, opacity 0.3s linear;
  }
`;
const IconList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  position: absolute;
  top: 10px;
  right: 10px;
  text-decoration: none;

  img {
    width: 18px;
    padding: 6px;
    border-radius: 50px;
    background-color: #fff;
    &:hover {
      background-color: #f9f9f9;
    }
    @media screen and (max-width: 620px) {
      width: 14px;
      padding: 4px;
    }
  }
  cursor: pointer;
`;
const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 20px;
  width: 100%;
  gap: 10px;
  text-decoration: none;

  @media screen and (max-width: 960px) {
    gap: 8px;
    margin-top: 10px;
  }
  @media screen and (max-width: 820px) {
    gap: 6px;
    margin-top: 8px;
  }
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #000;
  width: 100%;
  text-decoration: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  @media screen and (max-width: 820px) {
    font-size: 12px;
  }
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  width: 100%;
`;
const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #db4444;
  margin-right: 20px;
  text-decoration: none;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  @media screen and (max-width: 820px) {
    font-size: 12px;
  }
  @media screen and (max-width: 720px) {
    margin-right: 10px;
  }
`;

const StarListing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #666;

  img {
    width: 16px;
    height: 16px;
    margin-right: 2px;
    @media screen and (max-width: 1024px) {
      width: 14px;
      height: 14px;
    }
    @media screen and (max-width: 960px) {
      width: 12px;
      height: 12px;
    }
    @media screen and (max-width: 820px) {
      width: 10px;
      height: 10px;
    }
    @media screen and (max-width: 720px) {
      display: none;
      width: 12px;
      height: 12px;
      &:first-child {
        display: block;
        margin-right: 4px;
      }
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
  justify-content: flex-end;
  align-items: center;
  font-weight: 500;
  width: 100%;
  color: #666;
  p {
    margin: 0;
    @media screen and (max-width: 720px) {
      font-size: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  @media screen and (max-width: 820px) {
    font-size: 10px;
  }
  @media screen and (max-width: 720px) {
    margin-left: 6px;
    font-size: 10px;
  }
`;
const ColorDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
`;
const ProductColor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;
const styledProduct = styled.div`
  border: 2px solid black;
`;
const RatingStar = styled.img``;
const ViewAllButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #db4444;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border: none;
  width: 234px;
  height: 46px;
  padding: 16px 48px 16px 48px;
  gap: 10px;
  border-radius: 4px;
  opacity: 0px;
  cursor: pointer;
  &:hover {
    background-color: #db2222;
  }
  @media screen and (max-width: 960px) {
    width: 180px;
    height: 36px;
    font-size: 14px;
    white-space: nowrap;
  }
`;

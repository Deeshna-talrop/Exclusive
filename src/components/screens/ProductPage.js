import styled from "styled-components";
import { Link } from "react-router-dom";

import Star from "../../assets/Star.svg";
import StarUnfilled from "../../assets/Star-unfilled.svg";
import QuickView from "../../assets/Quick View.svg";
import WishList from "../../assets/wishlist.svg";
import { useEffect, useState } from "react";
export const CategoryContent = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    image: require("../../assets/Dogfood.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
    isNew: true,
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
    isNew: false,
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    image: require("../../assets/Laptop.png"),
    price: "$100",
    rating: "4.9",
    category: "Computer",
    colors: [{ color: "#000" }, { color: "#fff" }],
    isNew: true,
    details: {
      inStock: false,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 4,
    name: "Curology Product Set ",
    image: require("../../assets/Cosmetics.png"),
    price: "$100",
    rating: "4.9",
    category: "Beauty",
    isNew: false,
    discount: "-20%",
    details: {
      inStock: false,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 5,
    name: "Kids Electric Car",
    image: require("../../assets/Car.png"),
    price: "$100",
    rating: "4.9",
    category: "Toys",
    colors: [{ color: "#ff0000" }, { color: "#16d4b8" }],
    isNew: false,
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    image: require("../../assets/Shoe.png"),
    price: "$100",
    rating: "4.9",
    category: "Shoe",
    colors: [{ color: "#ff0000" }, { color: "#000" }, { color: "#1d876c" }],
    isNew: false,
    details: {
      inStock: false,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    image: require("../../assets/Game.png"),
    price: "$100",
    rating: "4.9",
    category: "Game",
    isNew: false,
    discount: "-10%",
    details: {
      inStock: false,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    image: require("../../assets/Jacket.png"),
    price: "$100",
    rating: "4.9",
    category: "Cloth",
    colors: [
      { color: "#ff0000" },
      { color: "#000" },
      { color: "#6bdf88" },
      { color: "#f6f6f6" },
      { color: "#8ac6cc" },
      { color: "#8b6628" },
      { color: "#6464ac" },
    ],
    isNew: true,
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 9,
    name: "RGB liquid CPU Cooler",
    image: require("../../assets/speaker.png"),
    price: "$160",
    rating: "4.9",
    category: "Computer",
    isNew: false,
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 10,
    name: "IPS LCD Gaming Monitor",
    image: require("../../assets/Moniter.png"),
    price: "$370",
    rating: "4.9",
    category: "Computer",
    isNew: true,
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 11,
    name: "AK-900 Wired Keyboard",
    image: require("../../assets/keyboard.png"),
    price: "$960",
    rating: "4.9",
    category: "Computer",
    colors: [{ color: "#ff0000" }, { color: "#16d4b8" }],
    isNew: false,
    discount: "-10%",
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 12,
    name: "HAVIT HV-G92 Gamepad",
    image: require("../../assets/gameconsole.png"),
    price: "$120",
    rating: "4.9",
    category: "Game",
    colors: [{ color: "#ff0000" }, { color: "#a52323" }, { color: "#91ee35" }],
    isNew: true,
    details: {
      inStock: false,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 13,
    name: "Havic HV G-92 Gamepad",
    image: require("../../assets/gameconsole2.png"),
    price: "$192",
    rating: "4.9",
    category: "Game",
    colors: [{ color: "#ff0000" }, { color: "#000" }, { color: "#fff000" }],
    isNew: false,
    discount: "-10%",
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
  {
    id: 14,
    name: "Havic HV G-92 Gamepad v7",
    image: require("../../assets/gameconsole3.png"),
    price: "$192",
    rating: "4.9",
    category: "Game",
    colors: [{ color: "#ff0000" }, { color: "#000" }],
    isNew: false,
    discount: "-10%",
    details: {
      inStock: true,
      description:
        "PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.",
    },
  },
];

export default function ProductPage({ filteredProducts }) {
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
          {filteredProducts.length === 0 ? (
            <NoResultsFound>No results found</NoResultsFound>
          ) : (
            filteredProducts.map((category) => (
              <Product key={category.id}>
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
                    {category.isNew === true ? (
                      <div
                        style={{
                          backgroundColor: "#00FF66",
                          padding: "6px 12px",
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          borderRadius: "6px",
                          color: "#fff",
                        }}
                      >
                        New
                      </div>
                    ) : (
                      <div></div>
                    )}
                    {category.discount ? (
                      <div
                        style={{
                          backgroundColor: "#DB4444",
                          padding: "6px 12px",
                          position: "absolute",
                          top: "12px",
                          left: "12px",
                          borderRadius: "6px",
                          color: "#fff",
                        }}
                      >
                        {category.discount}
                      </div>
                    ) : (
                      <div></div>
                    )}
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
            ))
          )}
        </ProductList>
      </ProductConatiner>
    </>
  );
}
const NoResultsFound = styled.h3`
  text-align: center;
  width: 100%;
  margin: 20px 0;
  font-size: 24px;
  font-weight: 500;
  @media screen and (max-width: 620px) {
    font-size: 18px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 380px) {
    font-size: 14px;
  }
`;
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
  align-items: flex-start;
  padding: 0;
  gap: 30px;
  margin-bottom: 20px;
  margin-top: 0;
  width: 100%;
  @media screen and (max-width: 1440px) {
    gap: 22px;
  }
  @media screen and (max-width: 1024px) {
    gap: 18px;
  }
  @media screen and (max-width: 375px) {
    gap: 10px;
  }
`;

const Product = styled.li`
  display: grid;
  gap: 20px;
  min-width: 23%;
  max-width: 23%;
  align-items: flex-start;
  // margin: 0 0 40px 0;
  cursor: pointer;
  text-decoration: none;
  @media screen and (max-width: 1440px) {
    margin: 0 0 36px 0;
  }
  @media screen and (max-width: 1040px) {
    margin: 0 0 36px 0;
  }
  @media screen and (max-width: 1024px) {
    margin: 0 0 36px 0;
  }
  @media screen and (max-width: 960px) {
    max-width: 22%;
    margin: 0 0 36px 0;
  }
  @media screen and (max-width: 860px) {
    margin: 0 0 32px 0;
    min-width: 30%;
  }
  @media screen and (max-width: 820px) {
    margin: 0 0px 32px 0;
  }
  @media screen and (max-width: 720px) {
    max-height: 200px;
    margin: 0 0px 20px 0;
    min-width: 31%;
  }

  @media screen and (max-width: 620px) {
    min-width: 45%;
  }
  @media screen and (max-width: 540px) {
    max-width: 44%;
  }
  @media screen and (max-width: 425px) {
    max-width: 44%;
  }
  @media screen and (max-width: 375px) {
    min-width: 100%;
    max-height: 250px;
  }
`;

const ProductImage = styled.div`
  border-radius: 4px;
  background-color: #f0f0f0;

  display: flex;
  min-height: 260px;
  /* min-height: 200px; */
  min-width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 1440px) {
    min-height: 260px;
  }

  @media screen and (max-width: 1071px) {
    min-height: 240px;
    max-width: 220px;
  }
  @media screen and (max-width: 1046px) {
    min-height: 220px;
    max-width: 220px;
  }
  @media screen and (max-width: 1024px) {
    min-height: 200px;
  }
  @media screen and (max-width: 960px) {
    min-height: 180px;
  }
  @media screen and (max-width: 820px) {
    min-height: 160px;
  }
  @media screen and (max-width: 720px) {
    min-height: 140px;
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
      width: 45%;
      height: 55%;
    }
    @media screen and (max-width: 540px) {
      width: 50%;
      height: 50%;
    }
    @media screen and (max-width: 375px) {
      width: 40%;
      height: 40%;
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

  @media screen and (max-width: 1440px) {
    max-width: 200px;
  }
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

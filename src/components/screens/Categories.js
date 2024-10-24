import styled from "styled-components";
import CellPhone from "../../assets/CellPhone.svg";
import Camera from "../../assets/Camera.svg";
import Computer from "../../assets/Computer.svg";
import Headphone from "../../assets/Headphone.svg";
import Gamepad from "../../assets/Gamepad.svg";
import SmartWatch from "../../assets/SmartWatch.svg";

import ProductPage, { CategoryContent } from "./ProductPage";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const CategoriesListContent = [
  {
    id: 1,
    name: "CellPhone",
    image: CellPhone,
  },
  {
    id: 2,
    name: "Camera",
    image: Camera,
  },
  {
    id: 3,
    name: "Computer",
    image: Computer,
  },
  {
    id: 4,
    name: "Headphone",
    image: Headphone,
  },
  {
    id: 5,
    name: "Game",
    image: Gamepad,
  },
  {
    id: 6,
    name: "SmartWatch",
    image: SmartWatch,
  },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (selectedCategory) {
      const filteredProducts = CategoryContent.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filteredProducts);
    } else {
      setFilteredProducts(CategoryContent.slice(0, 8));
    }
    console.log(filteredProducts);
  }, [selectedCategory]);

  return (
    <CategoriesContainer>
      <Divider>
        <div></div>
        <p style={{ margin: "0px", marginLeft: "12px", fontWeight: "800" }}>
          Categories
        </p>
      </Divider>
      <SectionTitle>Browse By Category</SectionTitle>
      <Category>
        <CategoriesListContainer>
          <CategoriesList
            onClick={() => handleCategoryChange(null)}
            key="all"
            style={{
              backgroundColor:
                selectedCategory === null ? "#f9f9f9" : "transparent",
              border:
                selectedCategory === null
                  ? "1px solid #808080"
                  : "1px solid #f0f0f0",
            }}
          >
            <CategoryName>All</CategoryName>
          </CategoriesList>
          {CategoriesListContent.map((category) => (
            <CategoriesList
              key={category.id}
              onClick={() => handleCategoryChange(category.name)}
              style={{
                backgroundColor:
                  selectedCategory === category.name
                    ? "#f9f9f9"
                    : "transparent",
                border:
                  selectedCategory === category.name
                    ? "1px solid #808080"
                    : "1px solid #f0f0f0",
              }}
            >
              <Image src={category.image} alt="Image" />
              <CategoryName>{category.name}</CategoryName>
            </CategoriesList>
          ))}
        </CategoriesListContainer>
      </Category>
      <ProductPage filteredProducts={filteredProducts} />

      <Link to="/products" style={{ textDecoration: "none" }}>
        <ViewAllButton>View All Products</ViewAllButton>
      </Link>
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  color: #db4444;
  div {
    width: 20px;
    height: 40px;
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
const SectionTitle = styled.h3`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  margin: 27px 0px 27px 0px;
  font-size: 36px;
  font-weight: 600;
  @media screen and (max-width: 1024px) {
    font-size: 32px;
  }
  @media screen and (max-width: 960px) {
    font-size: 28px;
    margin: 12px 0px 10px 0px;
  }
  @media screen and (max-width: 540px) {
    font-size: 24px;
    margin: 10px 0px 0px 0px;
  }
`;

const Category = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0px 0px 53px 0;

  padding: 0;
  width: 100%;
  overflow: auto;
  overflow-x: scroll;
  scrollbar-width: none;
  @media screen and (max-width: 620px) {
    margin: 0px 0px 20px 0px;
  }
`;

const CategoriesListContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;
const CategoriesList = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  width: 100%;
  height: 120px;
  padding: 24px;
  border-radius: 4px;
  margin-right: 20px;
  &:last-child {
    margin-right: 0;
  }
  &:hover {
    border: 1px solid #f0f0f0;
    background-color: #f9f9f9;
  }
  @media screen and (max-width: 1024px) {
    height: 100px;
  }
  @media screen and (max-width: 960px) {
    height: 80px;
  }
  @media screen and (max-width: 820px) {
    height: 60px;
  }
  @media screen and (max-width: 720px) {
    height: 50px;
  }
  @media screen and (max-width: 620px) {
    height: 40px;
    margin-right: 10px;
  }
  @media screen and (max-width: 540px) {
    height: 30px;
  }
  @media screen and (max-width: 480px) {
    height: 30px;
    width: 200px;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  @media screen and (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 960px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 620px) {
    height: 26px;
  }
`;
const CategoryName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 12px;
  text-align: center;
  color: #000;
  text-decoration: none;
  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
  @media screen and (max-width: 960px) {
    font-size: 12px;
    font-weight: 500;
  }
  @media screen and (max-width: 620px) {
    font-weight: 400;
    margin-top: 14px;
    font-size: 10px;
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
  align-items: center;
  padding: 0;
  margin-bottom: 40px;
  width: 100%;
  @media screen and (max-width: 620px) {
    margin-bottom: 20px;
  }
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
  max-height: 326px;
  margin: 0 20px 40px 0;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    max-height: 260px;
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
  width: 100%;
`;
const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #db4444;
  margin-right: 20px;
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

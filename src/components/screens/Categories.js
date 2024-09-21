import styled from "styled-components";
import CellPhone from "../../assets/CellPhone.svg";
import Camera from "../../assets/Camera.svg";
import Computer from "../../assets/Computer.svg";
import Headphone from "../../assets/Headphone.svg";
import Gamepad from "../../assets/Gamepad.svg";
import SmartWatch from "../../assets/SmartWatch.svg";

import Jacket from "../../assets/Jacket.png";
import Star from "../../assets/Star.svg";

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
    name: "Gamepad",
    image: Gamepad,
  },
  {
    id: 6,
    name: "SmartWatch",
    image: SmartWatch,
  },
];

const CategoryContent = [
  {
    id: 1,
    name: "Breed Dry Dog Food",
    image: Jacket,
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 2,
    name: "CellPhone",
    image: Jacket,
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 3,
    name: "CellPhone",
    image: Jacket,
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 4,
    name: "CellPhone",
    image: Jacket,
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 5,
    name: "CellPhone",
    image: Jacket,
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 6,
    name: "CellPhone",
    image: Jacket,
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 7,
    name: "CellPhone",
    image: Jacket,
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 8,
    name: "CellPhone",
    image: Jacket,
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
];

export default function Categories() {
  return (
    <CategoriesContainer>
      <Divider>
        <div></div>
        <p>Categories</p>
      </Divider>
      <SectionTitle>Browse By Category</SectionTitle>
      <Category>
        <CategoriesListContainer>
          {CategoriesListContent.map((category) => (
            <CategoriesList key={category.id}>
              <Image src={category.image} alt="Image" />
              <CategoriesName>{category.name}</CategoriesName>
            </CategoriesList>
          ))}
        </CategoriesListContainer>
      </Category>
      <ProductConatiner>
        <ProductList>
          {CategoryContent.map((category) => (
            <Product>
              <ProductImage>
                <img src={category.image} alt="Image" />
              </ProductImage>
              <ProductInfo>
                <ProductName>{category.name}</ProductName>
                <ProductPrice>{category.price}</ProductPrice>
                <ProductRating>
                  <RatingStar src={Star} alt="Image" />
                  4.9
                </ProductRating>
              </ProductInfo>
            </Product>
          ))}
        </ProductList>
      </ProductConatiner>
    </CategoriesContainer>
  );
}

const CategoriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
`;

const Divider = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
`;
const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px 20px 0px;
  font-size: 36px;
  font-weight: 600;
`;

const Category = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 20px 0px 40px 0;
  padding: 0;
  width: 100%;
`;

const CategoriesListContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
`;
const CategoriesList = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #808080;
  width: 100%;
  height: 120px;
  padding: 24px 0px;
  border-radius: 4px;
  margin: 28px;
  &:nth-child(6) {
    margin-right: 0;
  }
  &:hover {
    border: 1px solid #f0f0f0;
    background-color: #f9f9f9;
  }
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
`;
const CategoriesName = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin-top: 12px;
  text-align: center;
  color: #000;
  text-decoration: none;
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
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
`;

const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 272px;
  margin: 0 20px 20px 0;
  cursor: pointer;
`;

const ProductImage = styled.div`
  border-radius: 10px;
  background-color: #f0f0f0;
  max-width: 272px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 20px;
`;

const ProductName = styled.div`
  font-size: 18px;
  font-weight: 500;
`;

const ProductPrice = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const ProductRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  img {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
`;

const RatingStar = styled.img``;
const ProductLink = styled.a`
  text-decoration: none;
`;

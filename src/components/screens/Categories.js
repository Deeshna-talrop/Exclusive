import styled from "styled-components";
import CellPhone from "../../assets/CellPhone.svg";
import Camera from "../../assets/Camera.svg";
import Computer from "../../assets/Computer.svg";
import Headphone from "../../assets/Headphone.svg";
import Gamepad from "../../assets/Gamepad.svg";
import SmartWatch from "../../assets/SmartWatch.svg";

import Star from "../../assets/Star.svg";
import StarUnfilled from "../../assets/Star-unfilled.svg";
import QuickView from "../../assets/Quick View.svg";
import WishList from "../../assets/wishlist.svg";

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
    image: require("../../assets/Dogfood.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 2,
    name: "CANON EOS DSLR Camera",
    image: require("../../assets/Camera.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 3,
    name: "ASUS FHD Gaming Laptop",
    image: require("../../assets/Laptop.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 4,
    name: "Curology Product Set ",
    image: require("../../assets/Cosmetics.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 5,
    name: "Kids Electric Car",
    image: require("../../assets/Car.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 6,
    name: "Jr. Zoom Soccer Cleats",
    image: require("../../assets/Shoe.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 7,
    name: "GP11 Shooter USB Gamepad",
    image: require("../../assets/Game.png"),
    price: "$100",
    rating: "4.9",
    category: "Dogs",
  },
  {
    id: 8,
    name: "Quilted Satin Jacket",
    image: require("../../assets/Jacket.png"),
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
              </ProductInfo>
            </Product>
          ))}
        </ProductList>
        <ViewAllButton>View All Products</ViewAllButton>
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
  @media screen and (max-width: 1024px) {
    margin-top: 20px;
    margin-bottom: 40px;
  }
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
const SectionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px 20px 0px;
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
  margin: 20px 0px 40px 0;
  padding: 0;
  width: 100%;
  overflow: auto;
  @media screen and (max-width: 620px) {
    margin: 20px 0px 20px 0px;
    padding: 0;
    width: auto;
  }
`;

const CategoriesListContainer = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  cursor: pointer;
  @media screen and (max-width: 480px) {
    overflow: auto;
    overflow-x: scroll;
    width: auto;
  }
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
    width: 100px;
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
const CategoriesName = styled.div`
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

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
                <a href="/">Add To Cart</a>
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
                    ({category.rating})
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
  margin-right: 20px;
  &:last-child {
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
  margin-bottom: 40px;
  width: 100%;
`;

const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 260px;
  max-height: 326px;
  margin: 0 32px 40px 0;
  cursor: pointer;
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

  img {
    width: 60%;
    height: 60%;
    border-radius: 4px;
    object-position: center;
  }
  &:hover {
    a {
      visibility: visible;
      opacity: 1;
    }
  }
  a {
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
    border-radius: 0 0 6px 6px;
    visibility: hidden;
    opacity: 0;
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
`;

const ProductName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0;
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: #db4444;
  margin-right: 20px;
`;

const StarListing = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #666;
  img {
    width: 16px;
    height: 16px;
    margin-right: 2px;
  }
  &:last-child {
    margin-right: 6px;
  }
`;
const ProductRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  color: #666;
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
`;

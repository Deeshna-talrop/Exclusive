import React, { useState, useCallback } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import logo from "../../assets/Logo.png";
import WishList from "../../assets/wishlist.svg";
import Cart from "../../assets/Cart1.svg";
import Search from "../../assets/search.svg";
import { Link } from "react-router-dom";
import DropdownArrow from "../../assets/DropDown.svg";
import DropdownArrowOpen from "../../assets/DropDownOpen.svg";
export default function Header() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = useCallback((option) => {
    setSelectedOption(option);
    console.log(option);
  }, []);

  const options = ["English", "French", "Japanese"];
  const defaultOption = options[0];

  return (
    <HeaderContainer>
      <Offer>
        <OfferContainer>
          <OfferText>
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <Link
              to="/products"
              style={{
                textDecoration: "underline",
                color: "#fff",
                fontWeight: "600",
                marginLeft: "10px",
                whiteSpace: "nowrap",
              }}
            >
              Shop Now
            </Link>
          </OfferText>
          <DropdownConatiner>
            <StyledDropdown
              options={options}
              onChange={handleSelect}
              value={defaultOption}
              placeholder="Select an option"
              arrowClosed={<img src={DropdownArrow} alt="cart" />}
              arrowOpen={<img src={DropdownArrowOpen} alt="cart" />}
            />
          </DropdownConatiner>
        </OfferContainer>
      </Offer>
      <NavBar>
        <LogoContainer>
          <a href="/">Exclusive</a>
        </LogoContainer>
        <NavBarList>
          <li style={{ fontWeight: "600", textDecoration: "underline" }}>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="" style={{ whiteSpace: "nowrap" }}>
              {" "}
              Contact
            </Link>
          </li>
          <li>
            <Link to="" style={{ whiteSpace: "nowrap" }}>
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link to="" style={{ whiteSpace: "nowrap" }}>
              {" "}
              Sign Up
            </Link>
          </li>
        </NavBarList>
        <NavBarRight>
          <SearchBar>
            <Input placeholder="What are you looking for?" />
            <img src={Search} alt="wishlist" />
          </SearchBar>
          <a href="">
            <img src={WishList} alt="wishlist" />
          </a>
          <a href="">
            <img src={Cart} alt="cart" />
          </a>
        </NavBarRight>
      </NavBar>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
const Offer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #000;
  color: #fff;
  font-size: 14px;
  align-items: center;
  padding: 4px 0;
  min-width: 100%;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;
const OfferContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  min-width: 80%;
  @media screen and (max-width: 960px) {
    min-width: 85%;
  }
`;
const OfferText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none;
  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 660px) {
    margin-left: 20px;
    justify-content: flex-start;
  }

  @media screen and (max-width: 0px) {
    margin-left: 12px;
    font-size: 12px;
    margin-left: 12px;
    white-space: nowrap;
    justify-content: flex-start;
    p {
      padding-left: 20px;
    }
  }
`;
const DropdownConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const StyledDropdown = styled(Dropdown)`
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  .Dropdown-placeholder {
    font-size: 16px;
    @media screen and (max-width: 960px) {
      font-size: 12px;
    }
  }

  @media screen and (max-width: 960px) {
    font-size: 12px;
  }

  .Dropdown-control {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
    border: none;
    gap: 10px;
    font-size: 16px;
    background-color: #000;
    color: #fff;
    padding: 0 10px 0 0;
    @media screen and (max-width: 960px) {
      font-size: 12px;
    }
  }

  .Dropdown-menu {
    background-color: #f9f9f9;
    border: none;
    padding: 10px;
    font-size: 16px;
    @media screen and (max-width: 960px) {
      font-size: 12px;
    }
  }

  .Dropdown-option {
    padding: 10px;
    font-size: 16px;
    margin-right: 10px;
    @media screen and (max-width: 960px) {
      font-size: 12px;
    }
  }
  .Dropdown-arrow {
    display: none;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 80%;
  margin: 0 auto;
  padding: 10px 0px 0px 0px;
  @media screen and (max-width: 960px) {
    padding: 10px 40px 20px 40px;
  }
  @media screen and (max-width: 820px) {
    padding: 10px 40px 10px 40px;
    width: 100%;
  }
    @media screen and (max-width: 560px) {
    margin: 0;
    }
  }
`;
const LogoContainer = styled.h1`
  display: flex;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: 800;
    color: #000;
    text-decoration: none;
    @media screen and (max-width: 960px) {
      font-size: 20px;
    }
    @media screen and (max-width: 540px) {
      font-size: 18px;
    }
  }
`;
const NavBarList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin-left: 40px;
  @media screen and (max-width: 560px) {
    padding-left: 12px;
  }
  li {
    margin: 0 20px;
    font-size: 16px;
    &:last-child {
      margin-right: 0;
    }
    &:first-child {
      margin-left: 0;
    }
    @media screen and (max-width: 960px) {
      margin: 0 18px;
    }
    @media screen and (max-width: 860px) {
      font-size: 14px;
      margin: 0 16px;
    }
    @media screen and (max-width: 820px) {
      font-size: 14px;
      margin: 0 16px;
    }
    @media screen and (max-width: 620px) {
      margin: 0 10px;
    }

    @media screen and (max-width: 540px) {
      display: none;
    }
    a {
      color: #000;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
        font-weight: 500;
      }
    }
  }

  @media screen and (max-width: 960px) {
    margin-left: 0px;
  }
`;

const NavBarRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
  a img {
    width: 32px;
    height: 32px;
    margin-right: 12px;
    @media screen and (max-width: 960px) {
      width: 26px;
      height: 26px;
    }
  }
`;
const SearchBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  height: 22px;
  padding: 12px 12px 12px 12px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  @media screen and (max-width: 960px) {
    width: 160px;
    font-size: 12px;
    padding: 7px 7px;
  }
  @media screen and (max-width: 820px) {
    width: 26px;
    height: 26px;
    border-radius: 0;
    border: none;
    font-size: 0;
    background-color: transparent;
    padding: 0;
  }
`;
const Input = styled.input`
  border: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  font-size: 14px;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  @media screen and (max-width: 820px) {
    display: none;
  }
`;
const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

import React, { useState, useCallback } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import logo from "../../assets/Logo.png";
import WishList from "../../assets/wishlist.svg";
import Cart from "../../assets/Cart1.svg";
import Search from "../../assets/search.svg";
import { Link } from "react-router-dom";

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
      <Offer className="offer">
        <OfferText>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
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
        <StyledDropdown
          options={options}
          onChange={handleSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
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
          <Input placeholder="What are you looking for?" />
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
  justify-content: space-between;
  align-items: center;
  background: #000;
  color: #fff;
  font-size: 14px;
  align-items: center;
  padding: 4px 0;
  width: 100%;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;
const Div = styled.div``;

const OfferText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  white-space: nowrap;
  @media screen and (max-width: 960px) {
    margin-left: 0px;
    overflow: auto;
  }
  @media screen and (max-width: 660px) {
    margin-left: 20px;
    justify-content: flex-start;
    overflow: scroll;
    overflow-x: hidden;
  }

  @media screen and (max-width: 0px) {
    margin-left: 12px;
    font-size: 12px;
    margin-left: 12px;
    white-space: nowrap;
    overflow: auto;
    overflow-x: scroll;
    justify-content: flex-start;
    p {
      padding-left: 20px;
    }
  }
`;

const StyledDropdown = styled(Dropdown)`
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  margin-right: 20px;
  z-index: 1;
  position: absolute;
  right: 0;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  @media screen and (max-width: 540px) {
    right: 0px;
  }

  .Dropdown-control {
    border: none;
    font-size: 16px;
    background-color: #000;
    color: #fff;
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
const Input = styled.input`
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: 180px 12px;
  background-size: 20px;
  width: 200px;
  height: 22px;
  padding: 12px 7px 12px 12px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
  @media screen and (max-width: 960px) {
    width: 160px;
    font-size: 12px;
    padding: 7px 7px;
    background-position: 148px 10px;
    background-size: 16px;
  }
  @media screen and (max-width: 820px) {
    width: 26px;
    height: 26px;
    background-position: center center;
    background-size: 16px;
    border-radius: 0;
    border: none;
    font-size: 0;
    background-color: transparent;
    padding: 0;
  }
`;
const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

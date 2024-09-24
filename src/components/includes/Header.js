import React, { useState, useCallback } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import logo from "../../assets/Logo.png";
import WishList from "../../assets/wishlist.svg";
import Cart from "../../assets/Cart1.svg";
import Search from "../../assets/search.svg";

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
          <Link href="/">Shop Now</Link>
        </OfferText>
        <StyledDropdown
          options={options}
          onChange={handleSelect}
          value={defaultOption}
          placeholder="Select an option"
        />
      </Offer>
      <NavBar>
        <img src={logo} alt="logo" />
        <NavBarList>
          <li style={{ fontWeight: "600", textDecoration: "underline" }}>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/"> Contact</a>
          </li>
          <li>
            <a href="/"> About</a>
          </li>
          <li>
            <a href="/"> Sign Up</a>
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
const Link = styled.a`
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
  margin-left: 6px;
  @media screen and (max-width: 960px) {
    font-size: 12px;
    margin-left: 12px;
  }
`;

const OfferText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 200px;
  @media screen and (max-width: 580px) {
    margin-left: 12px;
    font-size: 12px;
    white-space: nowrap;
    width: 540px;
    overflow: auto;
    overflow-x: scroll;
    justify-content: flex-start;
    p {
      padding-left: 20px;
    }
  }
`;

const StyledDropdown = styled(Dropdown)`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  z-index: 1;
  @media screen and (max-width: 960px) {
    width: 150px;
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
  max-width: 1170px;
  margin: 0 auto;
  padding: 10px 20px 20px 20px;
  @media screen and (max-width: 960px) {
    padding: 10px 40px 20px 40px;
  }
  @media screen and (max-width: 820px) {
    padding: 10px 40px 10px 40px;
  }
  img {
    width: 118px;
    height: 24px;
    gap: 0px;
    opacity: 0px;
    @media screen and (max-width: 960px) {
      width: 100px;
      height: 20px;
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
      margin: 0 12px;
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
  background-position: 170px 12px;
  background-size: 20px;
  width: 180px;
  height: 24px;
  padding: 12px 7px 12px 12px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 4px;
  margin-right: 10px;
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

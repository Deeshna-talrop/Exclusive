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
        <Div></Div>
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
        <img
          src={logo}
          alt="logo"
          style={{
            width: "118px",
            height: "24px",
            gap: "0px",
            opacity: "0px",
          }}
        />
        <NavBarList>
          <li style={{ fontWeight: "600", textDecoration: "underline" }}>
            Home
          </li>
          <li>Contact</li>
          <li>About</li>
          <li>Sign Up</li>
        </NavBarList>
        <NavBarRight>
          <Input placeholder="What are you looking for?" />
          <img
            src={WishList}
            alt="wishlist"
            style={{
              width: "32px",
              height: "32px",
              marginRight: "10px",
            }}
          />
          <img
            src={Cart}
            alt="cart"
            style={{
              width: "32px",
              height: "32px",
            }}
          />
        </NavBarRight>
      </NavBar>
    </HeaderContainer>
  );
}
const HeaderContainer = styled.div`
  border-bottom: 1px solid #e5e5e5;
`;
const Offer = styled.div`
  background: #000;
  color: #fff;
  font-size: 14px;
  align-items: center;
  padding: 4px 0;
  position: relative;
`;
const Div = styled.div``;
const Link = styled.a`
  color: #fff;
  font-weight: 700;
  text-decoration: underline;
  margin-left: 6px;
`;

const OfferText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledDropdown = styled(Dropdown)`
  width: 200px;
  height: 30px;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  position: absolute;
  top: 8px;
  right: 0;

  .Dropdown-control {
    border: none;
    font-size: 16px;
    background-color: #000;
    color: #fff;
  }

  .Dropdown-menu {
    background-color: #f9f9f9;
    border: none;
    padding: 10px;
    font-size: 16px;
  }

  .Dropdown-option {
    padding: 10px;
    font-size: 16px;
  }
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  padding: 10px 0 20px 0;
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
  }
  li:hover {
    cursor: pointer;
    text-decoration: underline;
    font-weight: 500;
  }
  li:last-child {
    margin-right: 0;
  }
  li:first-child {
    margin-left: 0;
  }
`;

const NavBarRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 20px;
`;
const Input = styled.input`
  background-image: url(${Search});
  background-repeat: no-repeat;
  background-position: 199px 10px;
  background-size: 20px;
  width: 200px;
  height: 26px;
  padding: 7px 12px 7px 20px;
  gap: 10px;
  border: none;
  background-color: #f5f5f5;
  border-radius: 4px;
  opacity: 0px;
  margin-right: 10px;
`;
const Icon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

import styled from "styled-components";
import Appstore from "../../assets/AppStore.png";
import QrCode from "../../assets/Qr Code.png";
import GooglePlay from "../../assets/GooglePlay.png";

import Instagram from "../../assets/icon-instagram.svg";
import Twitter from "../../assets/twitter.svg";
import Linkedin from "../../assets/Icon-Linkedin.svg";
import Facebook from "../../assets/facebook.svg";

import Send from "../../assets/icon-send.svg";

import React, { useState } from "react";

const FooterListContent = [
  {
    id: 1,
    title: "Account",
    content: [
      {
        id: 1,
        text: "My Account",
      },
      {
        id: 2,
        text: "Login / Register",
      },
      {
        id: 3,
        text: "Cart",
      },
      {
        id: 4,
        text: "Wishlist",
      },
      {
        id: 5,
        text: "Shop",
      },
    ],
  },
  {
    id: 2,
    title: "Quick Link",
    content: [
      {
        id: 1,
        text: "Privacy Policy.",
      },
      {
        id: 2,
        text: "Terms Of Use",
      },
      {
        id: 3,
        text: "FAQ",
      },
      {
        id: 4,
        text: "Contact",
      },
    ],
  },
];

const List = [
  {
    id: 1,
    image: Facebook,
  },
  {
    id: 2,
    image: Twitter,
  },
  {
    id: 3,
    image: Instagram,
  },
  {
    id: 4,
    image: Linkedin,
  },
];
export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Email submitted: ${email}`);
    setEmail("");
    setSubmitted(true);
  };
  return (
    <FooterContainer>
      <FooterListContainer>
        <FooterListFirst>
          <h1>Exclusive</h1>
          <h2>Subscribe</h2>
          <p>Get 10% off your first order</p>
          <Input onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit"></button>
          </Input>
        </FooterListFirst>
        <FooterList>
          <FooterListTitle>Support</FooterListTitle>
          <FooterListLink>
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </FooterListLink>
          <FooterListLink href="mailto:exclusive@example.com">
            exclusive@gmail.com
          </FooterListLink>
          <FooterListLink href="tel://1-555-555-5555">
            +88015-88888-9999
          </FooterListLink>
        </FooterList>
        {FooterListContent.map((footer) => (
          <FooterList>
            <FooterListTitle>{footer.title}</FooterListTitle>
            {footer.content.map((content) => (
              <FooterListLink href="/">{content.text}</FooterListLink>
            ))}
          </FooterList>
        ))}
        <FooterListLast>
          <h1>Download App</h1>
          <p>Save $3 with App New User Only</p>
          <Links>
            <Image>
              <img src={QrCode} alt="qr code" />
            </Image>
            <Download>
              <a href="https://play.google.com/" target="_blank">
                <img src={GooglePlay} alt="Google Play" />
              </a>
              <a href="https://apps.apple.com/" target="_blank">
                <img src={Appstore} alt="App Store" />
              </a>
              <a />
            </Download>
          </Links>
          <IconList>
            {List.map((list) => (
              <Icon key={list.id} href="/">
                <img src={list.image} alt="Icon" />
              </Icon>
            ))}
          </IconList>
        </FooterListLast>
      </FooterListContainer>
      <p>Copyright © 2022. All Rights Reserved.</p>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #000;
  background-color: #000;
  color: #fff;
  width: 100%;
  p {
    margin: 20px 0;
    color: rgba(255, 255, 255, 0.2);
    font-size: 14px;
    text-align: center;
  }
`;

const FooterListContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 80px 135px;
  gap: 64px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
`;
const FooterListFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  h1 {
    font-size: 24px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 20px;
  }
  h2 {
    font-size: 20px;
    font-weight: 700;
    margin: 0;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    color: #fff;
    margin: 0;
    margin-bottom: 16px;
    text-align: left;
    white-space: nowrap;
  }
}
`;
const Input = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  input {
    width: fit-content;
    padding: 12px;
    border-radius: 5px;
    border: 1px solid #fff;
    background-color: #000;
    color: #fff;
    margin-bottom: 20px;
    font-size: 14px;
    white-space: nowrap;
    overflow: ellipsis;
    &:focus {
      outline: none;
    }
  }
  button {
    position: absolute;
    right: 8px;
    top: 8px;
    bottom: 0;
    border: none;
    background: url(${Send});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #000;
    height: 24px;
    width: 24px;
    z-index: 2;
    cursor: pointer;
  }
`;

const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  list-style: none;
`;

const FooterListTitle = styled.li`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 20px;
`;

const FooterListLink = styled.a`
  font-size: 14px;
  color: #fff;
  width: 175px;
  text-decoration: none;
  margin-bottom: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const FooterListLast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 0;
  margin: 0;
  width: 100%;
  h1 {
    font-size: 20px;
    margin: 0;
    margin-bottom: 20px;
  }
  p {
    font-size: 12px;
    margin: 0;
    margin-bottom: 12px;
    color: rgba(250, 250, 250, 0.7);
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  margin-right: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Download = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 84px;
  a {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const IconList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;
const Icon = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  margin-right: 20px;
  img {
    width: 100%;
    height: 100%;
  }
`;

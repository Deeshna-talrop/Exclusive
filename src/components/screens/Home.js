import styled from "styled-components";
import Categories from "./Categories";

import Footer from "../includes/Footer";
import Headers from "../includes/Header";

import HeroImage from "../../assets/hero.jpg";
import Apple from "../../assets/apple.svg";
import Arrow from "../../assets/arrow-right.svg";
import About from "./About";
export default function Home() {
  return (
    <>
      <HomeContainer>
        <SpotlightConatiner>
          <Left>
            <TextLogo>
              <Image src={Apple} alt="Image" />
              <p>Iphone 14 Series</p>
            </TextLogo>
            <Title>Up to 10% off Voucher</Title>
            <Button>
              Shop Now
              <img src={Arrow} alt="Image" />
            </Button>
          </Left>
          <HeroImageContainer src={HeroImage} alt="Image" />
        </SpotlightConatiner>

        <Categories />
        <About />
      </HomeContainer>
    </>
  );
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  margin: 0 auto;
  overflow: hidden;
`;
const SpotlightConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #000;
  width: 100%;
  height: 400px;
  border-radius: 10px;
  margin: 60px 0px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    height: 300px;
    margin: 40px 0px;
  }
  @media screen and (max-width: 960px) {
    height: 250px;
    margin: 20px 0px;
  }
  @media screen and (max-width: 820px) {
    height: 200px;
    margin: 20px 0px;
  }
  @media screen and (max-width: 720px) {
    height: 200px;
    margin: 20px 0px;
  }
  @media screen and (max-width: 540px) {
    height: 150px;
    margin: 20px 0px;
  }
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
  p {
    color: #fff;
  }
  @media screen and (max-width: 820px) {
    margin-left: 40px;
  }
  @media screen and (max-width: 720px) {
    margin-left: 20px;
  }
  @media screen and (max-width: 540px) {
    margin-left: 20px;
  }
`;

const TextLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 540px) {
    margin-bottom: -6px;
  }
  @media screen and (max-width: 320px) {
    img {
      width: 16px;
      height: 16px;
    }
    p {
      font-size: 12px;
      line-height: 12px;
      white-space: nowrap;
    }
  }
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  @media screen and (max-width: 1024px) {
    width: 20px;
    height: 20px;
  }
`;

const Title = styled.div`
  color: #fff;
  width: 400px;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 20px;
  @media screen and (max-width: 1024px) {
    font-size: 42px;
    line-height: 52px;
  }
  @media screen and (max-width: 960px) {
    font-size: 42px;
    line-height: 48px;
  }
  @media screen and (max-width: 820px) {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 14px;
  }
  @media screen and (max-width: 720px) {
    font-size: 32px;
    line-height: 32px;
    width: 300px;
  }
  @media screen and (max-width: 540px) {
    font-size: 24px;
    line-height: 28px;
    width: 200px;
  }
  @media screen and (max-width: 480px) {
    margin-bottom: 14px;
  }
  @media screen and (max-width: 400px) {
    width: 150px;
    font-size: 20px;
    }
@media screen and (max-width: 400px) {
    width: 114px;
    font-size: 20px;
    }
    
  }
`;

const Button = styled.a`
  display: flex;
  flex-direction: row;
  border: none;
  color: #fff;
  background: none;
  font-size: 16px;
  font-weight: 500;
  text-decoration: underline;
  img {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
  &:hover {
    cursor: pointer;
    color: #7e7e7e;
  }
  @media screen and (max-width: 820px) {
    font-size: 14px;
  }
  @media screen and (max-width: 540px) {
    font-size: 12px;
    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const HeroImageContainer = styled.img`
  width: 610px;
  height: 453px;
  padding-top: 80px;
  @media screen and (max-width: 1024px) {
    width: 500px;
    height: 380px;
    padding-top: 100px;
  }
  @media screen and (max-width: 960px) {
    width: 400px;
    height: 300px;
    padding-top: 100px;
  }
  @media screen and (max-width: 820px) {
    width: 350px;
    height: 250px;
    padding-top: 100px;
  }
  @media screen and (max-width: 540px) {
    width: 300px;
    height: 200px;
    padding-top: 60px;
  }
  @media screen and (max-width: 540px) {
    width: 250px;
    height: 150px;
    padding-top: 60px;
  }
`;

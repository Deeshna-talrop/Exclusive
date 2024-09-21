import styled from "styled-components";
import Categories from "./Categories";

import HeroImage from "../../assets/hero.jpg";
import Apple from "../../assets/apple.svg";
import Arrow from "../../assets/arrow-right.svg";
import { AppleIcon } from "lucide-react";
export default function Home() {
  return (
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
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  margin: 0 auto;
`;
const SpotlightConatiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: #000;
  width: 1169px;
  height: 400px;
  border-radius: 10px;
  margin: 60px 0px;
  overflow: hidden;
`;
const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 60px;
  p {
    color: #fff;
  }
`;

const TextLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
`;
const Image = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 10px;
`;

const Title = styled.div`
  color: #fff;
  width: 400px;
  font-size: 48px;
  font-weight: 600;
  line-height: 60px;
  margin-bottom: 20px;
`;

const Button = styled.button`
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
`;

const HeroImageContainer = styled.img`
  width: 610px;
  height: 453px;
  padding-top: 80px;
`;

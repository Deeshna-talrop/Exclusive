import styled from "styled-components";
import Safety from "../../assets/safety.svg";
import Delivery from "../../assets/icon-delivery-1.svg";
import Customer from "../../assets/Icon-Customer service.svg";
const AboutList = [
  {
    id: 1,
    image: Delivery,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
  },
  {
    id: 2,
    image: Customer,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
  },
  {
    id: 3,
    image: Safety,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
  },
];
export default function About() {
  return (
    <AboutContainer>
      {AboutList.map((about) => (
        <AboutListConatiner key={about.id}>
          <Icon>
            <img src={about.image} alt="Icon" />
          </Icon>
          <Title>{about.title}</Title>
          <Description>{about.description}</Description>
        </AboutListConatiner>
      ))}
    </AboutContainer>
  );
}

const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 88px;
  margin: 0 auto;
  margin-bottom: 60px;
  @media screen and (max-width: 1024px) {
    gap: 64px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 960px) {
    gap: 56px;
  }
  @media screen and (max-width: 820px) {
    gap: 40px;
  }
  @media screen and (max-width: 760px) {
    gap: 32px;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 620px) {
    gap: 24px;
    flex-direction: column;
  }
`;

const AboutListConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
  @media screen and (max-width: 820px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 12px;
  background-color: rgba(47, 46, 48, 0.5);
  border-radius: 50%;
  img {
    width: 40px;
    height: 40px;
    padding: 10px;
    background-color: #000;
    border-radius: 50%;
    @media screen and (max-width: 1024px) {
      width: 30px;
      height: 30px;
      padding: 8px;
    }
    @media screen and (max-width: 960px) {
      width: 24px;
      height: 24px;
      padding: 6px;
    }
    @media screen and (max-width: 820px) {
      width: 24px;
      height: 24px;
      padding: 4px;
    }
  }
  @media screen and (max-width: 1024px) {
    padding: 10px;
  }
  @media screen and (max-width: 960px) {
    padding: 8px;
  }
  @media screen and (max-width: 820px) {
    padding: 6px;
  }
  @media screen and (max-width: 720px) {
    padding: 4px;
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 24px 0 12px 0;
  text-align: center;
  color: #000;
  white-space: nowrap;
  @media screen and (max-width: 1024px) {
    font-size: 18px;
    margin: 16px 0 8px 0;
  }
  @media screen and (max-width: 960px) {
    font-size: 16px;
    margin: 12px 0 6px 0;
  }
  @media screen and (max-width: 720px) {
    font-size: 14px;
  }
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  text-align: center;
  color: #000;
  @media screen and (max-width: 960px) {
    font-size: 12px;
    white-space: nowrap;
  }
  @media screen and (max-width: 720px) {
    font-size: 12px;
    white-space: normal;
  }
`;

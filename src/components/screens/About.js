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
  align-items: center;
  gap: 88px;
  margin: 0 auto;
  margin-bottom: 60px;
`;

const AboutListConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
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
  }
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: 600;
  margin: 24px 0 12px 0;
  text-align: center;
  color: #000;
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  text-align: center;
  color: #000;
`;

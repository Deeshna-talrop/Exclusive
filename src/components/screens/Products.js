import { Link } from "react-router-dom";
import Footer from "../includes/Footer";
import Headers from "../includes/Header";
import ProductPage from "./ProductPage";
import styled from "styled-components";

export default function Products() {
  return (
    <>
      <Headers />

      <ProductsContainer>
        <BreadCrumb>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "10px",
              color: "rgba(0, 0, 0, 0.5)",
            }}
          >
            Home
          </Link>{" "}
          /{" "}
          <p
            style={{ textDecoration: "none", margin: "0", marginLeft: "10px" }}
          >
            Products
          </p>
        </BreadCrumb>
        <ProductPage />
        <ProductPage />
      </ProductsContainer>

      <Footer />
    </>
  );
}

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  height: 100%;
`;

const BreadCrumb = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  margin: 40px 0;
  font-size: 14px;
  font-weight: 500;
  padding: 0;
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    margin: 20px 0;
  }
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  @media screen and (max-width: 820px) {

  }
  @media screen and (max-width: 720px) {
      margin: 10px 0;

  }
  }
`;

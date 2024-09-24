import Footer from "../includes/Footer";
import Headers from "../includes/Header";
import ProductPage from "./ProductPage";
import styled from "styled-components";

export default function Products() {
  return (
    <>
      <Headers />
      <ProductPage style={{ width: "90%" }} />
      <Footer />
    </>
  );
}

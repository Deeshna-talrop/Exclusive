import Home from "../screens/Home";
import Header from "../includes/Header";
import ReactDOM from "react-dom/client";
import { Router, Routes, Route } from "react-router-dom";
import Footer from "../includes/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Home.css";
import Freight from "../../components/freightBanner/FreightBanner";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Avaliation from "../../components/assessmentsHome/AssessmentsHome";
import CarrouselBanner from "../../components/bannerCarrousel/BannerCarrousel";
import BannerSecondary from "../../components/bannerSecondary/BannerSecondary";
import Categories from "../../components/categories/Categories";
import Nav from "../../components/nav/Nav";
import CardP from "../../components/cardProduct/CardProduct";
import AssessmentsHome from "../../components/assessmentsHome/AssessmentsHome";
import ItemPage from "../itemPage/ItemPage";
import axios from "axios";
import ProductList from "../../components/productList/ProductList";
const userName = localStorage.getItem('UserName')
function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    axios.get("http://localhost:8080/produto?size=12").then((response) => {
      setProducts(response.data.content);
    });
  };

  return (
    <>
      <Freight />
      <Header />
      <Nav />
      <CarrouselBanner />
      <BannerSecondary />
      <Categories />
      <p className="destaques"> PRODUTOS EM DESTAQUE </p>
      <div className="cardsHome">
        <ProductList products={products} />
      </div>

      <AssessmentsHome />
      <Footer />
    </>
  );
}
export default Home;

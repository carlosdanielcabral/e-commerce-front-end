import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../../context/AppContext';
import { getProductsByCategory } from '../../services/api';
import Header from '../../components/Header';
import ProductSkeleton from '../../components/ProductSkeleton';
import Slider from '../../components/Slider';
import Categories from '../../components/Categories';
import Footer from '../../components/Footer';
import './index.css';

const Principal = () => {
  const { darkMode } = useContext(AppContext);
  const [cars, setCars] = useState([]);
  const [personalCare, setPersonalCare] = useState([]);
  const [smartphones, setSmartphones] = useState([]);
  const [hasProducts, setHasProducts] = useState(false);
  const productsSkeleton = [];

  for (let i = 0; i < 5; i += 1) {
    productsSkeleton.push(<ProductSkeleton key={ `product-skeleton-${i}` }/>);
  }
  
  useEffect(() => {
    const getProducts = async () => {
      const cars = await getProductsByCategory('MLB5672');
      const beauty = await getProductsByCategory('MLB1246');
      const smartphonesData = await getProductsByCategory('MLB1051');
      setCars(cars.results);
      setPersonalCare(beauty.results);
      setSmartphones(smartphonesData.results);
      setHasProducts(true);
    }
    getProducts();
  }, [setCars, setPersonalCare, setSmartphones,setHasProducts]);

  return (
    <div className={ `principal-page ${darkMode && 'darkmode'}`}>
      <Header />

      <div className="principal-page-categories">
        <div className="principal-page-category cars">
          <h2>Automoveis</h2>
          {
            hasProducts
              ? <Slider products={ cars } />
              : productsSkeleton
          }
        </div>

        <Categories />
        <div className="principal-page-category personal-care">
          <h2>Beleza e cuidados pessoais</h2>
          {
            hasProducts
              ? <Slider products={ personalCare } />
              : (
                  <div className="products-skeleton">
                    {productsSkeleton}
                  </div>
              )
          }
        </div>

        <div className="principal-page-category smartphones">
          <h2>Celulares e telefones</h2>
          {
            hasProducts
              ? <Slider products={ smartphones } />
              : (
                  <div className="products-skeleton">
                    {productsSkeleton}
                  </div>
              )
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Principal;

import React from 'react';
import Header from '../../components/Header/Header';
import AppDownload from '../../components/AppDownload/AppDownload';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div>
    <div>
      <Header />
      <ExploreMenu/>
      <FoodDisplay />
    </div>
    <div>
      <AppDownload/>
      <Footer/>

    </div>
    </div>
  );
};

export default Home;

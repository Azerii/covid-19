import React from 'react';
import Header from './components/header/Header';
import Dash from './components/dashboard/Dash';
import Tabs from './components/tabs/Tabs';
import Content from './components/updates/Content';
// import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Dash></Dash>
      <Tabs></Tabs>
      <Content></Content>
      {/* <Banner></Banner> */}
      <Footer></Footer>
    </div>
  );
}

export default App;

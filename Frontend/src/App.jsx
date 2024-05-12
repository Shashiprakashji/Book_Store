import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Freebook from "./components/Freebook";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook></Freebook>
      <Cards></Cards>
      <Footer />
    </>
  );
}

export default App;

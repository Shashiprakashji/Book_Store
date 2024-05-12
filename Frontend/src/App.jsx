import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Freebook from "./components/Freebook";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook></Freebook>
      <Footer />
    </>
  );
}

export default App;

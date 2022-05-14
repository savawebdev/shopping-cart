import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Store from "./components/Pages/Store";

import asusFX706Img from "./assets/images/asus-fx706heb.webp";
import acerAN515Img from "./assets/images/acer-an515-45.jpg";
import aspireA515Img from "./assets/images/Aspire5_A515-45_FP-negru-1-windows.webp";

const App = () => {
  const [store, setStore] = useState([
    {
      id: 1,
      image: asusFX706Img,
      description:
        'Laptop Gaming ASUS TUF F17 FX706HEB-HX114, Intel Core i7-11800H pana la 4.6GHz, 17.3" Full HD, 16GB, SSD 512GB, NVIDIA GeForce RTX 3050 TI 4GB, Free DOS, negru',
      price: 1100,
    },

    {
      id: 2,
      image: acerAN515Img,
      description:
        'Laptop Gaming ACER Nitro 5 AN515-45-R7YG, AMD Ryzen 5 5600H pana la 4.2GHz, 15.6" Full HD, 16GB, SSD 512GB, NVIDIA GeForce RTX 3050 4GB, Free DOS, negru',
      price: 700,
    },
    {
      id: 3,
      image: aspireA515Img,
      description:
        'Laptop ACER Aspire 5 A515-45-R5EP, AMD Ryzen 5 5500U pana la 4.0GHz, 15.6" Full, 8GB, SSD 512GB, AMD Radeon Graphics, Windows 10 Home, negru',
      price: 500,
    },
  ]);

  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store data={store} />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

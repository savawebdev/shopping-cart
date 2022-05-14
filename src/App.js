import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import Home from "./components/Pages/Home";
import NavBar from "./components/NavBar/NavBar";
import Store from "./components/Pages/Store";

const App = () => {
  const [store, setStore] = useState([
    {
      id: 1,
      imageSrc: "./assets/images/asus-fx706heb.webp",
      description:
        'Laptop Gaming ASUS TUF F17 FX706HEB-HX114, Intel Core i7-11800H pana la 4.6GHz, 17.3" Full HD, 16GB, SSD 512GB, NVIDIA GeForce RTX 3050 TI 4GB, Free DOS, negru',
    },
  ]);
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

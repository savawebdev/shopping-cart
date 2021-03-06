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
import Cart from "./components/Pages/Cart";

const App = () => {
  const [store, setStore] = useState([
    {
      id: 1,
      name: "ASUS TUF F17 FX706HEB-HX114",
      image: asusFX706Img,
      description:
        'Laptop Gaming ASUS TUF F17 FX706HEB-HX114, Intel Core i7-11800H up to 4.6GHz, 17.3" Full HD, 16GB, SSD 512GB, NVIDIA GeForce RTX 3050 TI 4GB, Free DOS, black',
      price: 1100,
    },

    {
      id: 3,
      name: "ACER Nitro 5 AN515-45-R7YG",
      image: acerAN515Img,
      description:
        'Laptop Gaming ACER Nitro 5 AN515-45-R7YG, AMD Ryzen 5 5600H up to 4.2GHz, 15.6" Full HD, 16GB, SSD 512GB, NVIDIA GeForce RTX 3050 4GB, Free DOS, black',
      price: 700,
    },
    {
      id: 2,
      name: "ACER Aspire 5 A515-45-R5EP",
      image: aspireA515Img,
      description:
        'Laptop ACER Aspire 5 A515-45-R5EP, AMD Ryzen 5 5500U up to 4.0GHz, 15.6" Full, 8GB, SSD 512GB, AMD Radeon Graphics, Windows 10 Home, black',
      price: 500,
    },
  ]);

  const [cart, setCart] = useState({
    items: [],
    totalItems: 0,
  });

  const addItemToCart = (id) => {
    const item = store.find((el) => el.id === id);
    const cartItem = cart.items.find((el) => el.id === item.id);

    if (cartItem) {
      cartItem.quantity++;

      setCart((prev) => ({
        items: [
          ...prev.items.filter((item) => item.id !== cartItem.id),
          cartItem,
        ],
        totalItems: prev.totalItems + 1,
      }));
    } else {
      item.quantity = 1;

      setCart((prev) => ({
        items: [...prev.items, { ...item }],
        totalItems: prev.totalItems + 1,
      }));
    }
  };

  const clearCart = () => {
    setCart({
      items: [],
      totalItems: 0,
    });
  };

  const removeItemFromCart = (id) => {
    const item = cart.items.find((el) => el.id === id);

    setCart((prev) => ({
      items: prev.items.filter((el) => el.id !== id),
      totalItems: prev.totalItems - item.quantity,
    }));
  };

  const manageQuantity = (id, operation) => {
    const item = cart.items.find((el) => el.id === id);
    let newTotalItems = cart.totalItems;

    if (operation === "-") {
      if (item.quantity === 1) {
        return;
      }

      item.quantity--;
      newTotalItems--;
    } else if (operation === "+") {
      item.quantity++;
      newTotalItems++;
    }

    const newItems = cart.items.map((el) => (el.id === item.id ? item : el));

    setCart((prev) => ({
      items: newItems,
      totalItems: newTotalItems,
    }));
  };

  return (
    <BrowserRouter>
      <Header cart={cart} clearCart={clearCart} />
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/store"
            element={<Store data={store} addItemToCart={addItemToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                data={cart}
                removeItemFromCart={removeItemFromCart}
                manageQuantity={manageQuantity}
              />
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;

import { Fragment } from "react";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  return (
    <Fragment>
      <Header />
      <NavBar />
    </Fragment>
  );
};

export default App;

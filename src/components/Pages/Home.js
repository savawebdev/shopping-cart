import { Fragment } from "react";
import Benefits from "../Home/Benefits/Benefits";
import PromoBanner from "../Home/PromoBanner/PromoBanner";

const Home = () => {
  return (
    <Fragment>
      <PromoBanner />
      <Benefits />
    </Fragment>
  );
};

export default Home;

import { Fragment } from "react";
import Benefits from "../Home/Benefits/Benefits";
import StoreCTA from "../Home/StoreCTA/StoreCTA";
import NewsletterCTA from "../Home/NewsletterCTA/NewsletterCTA";
import PromoBanner from "../Home/PromoBanner/PromoBanner";

const Home = () => {
  return (
    <Fragment>
      <PromoBanner />
      <Benefits />
      <NewsletterCTA />
      <StoreCTA />
    </Fragment>
  );
};

export default Home;

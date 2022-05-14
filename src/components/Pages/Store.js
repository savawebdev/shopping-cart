import { Fragment } from "react";
import StoreGrid from "../Store/StoreGrid/StoreGrid";

const Store = (props) => {
  return (
    <Fragment>
      <StoreGrid items={props.data} addItemToCart={props.addItemToCart} />
    </Fragment>
  );
};

export default Store;

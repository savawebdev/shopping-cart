import { Fragment } from "react";
import StoreGrid from "../Store/StoreGrid/StoreGrid";

const Store = (props) => {
  return (
    <Fragment>
      <StoreGrid items={props.data} />
    </Fragment>
  );
};

export default Store;

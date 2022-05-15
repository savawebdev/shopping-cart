import CartCard from "../Cart/CartCard/CartCard";
import Summary from "../Cart/Summary/Summary";

const Cart = ({ data, removeItemFromCart, manageQuantity }) => {
  return (
    <>
      {data.items.map((item) => (
        <CartCard
          key={item.id}
          item={item}
          removeItemFromCart={removeItemFromCart}
          manageQuantity={manageQuantity}
        />
      ))}

      <Summary cart={data} />
    </>
  );
};

export default Cart;

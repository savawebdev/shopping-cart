import CartCard from "../Cart/CartCard/CartCard";

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
    </>
  );
};

export default Cart;

import CartCard from "../Cart/CartCard/CartCard";

const Cart = ({ data, removeItemFromCart }) => {
  return (
    <>
      {data.items.map((item) => (
        <CartCard
          key={item.id}
          item={item}
          removeItemFromCart={removeItemFromCart}
        />
      ))}
    </>
  );
};

export default Cart;

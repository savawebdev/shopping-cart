import CartCard from "../Cart/CartCard/CartCard";

const Cart = ({ data }) => {
  return (
    <>
      {data.items.map((item) => (
        <CartCard key={item.id} item={item} />
      ))}
    </>
  );
};

export default Cart;

import { useDispatch, useSelector } from "react-redux";
import { CounterActions } from "../../Store/CounterSlice";
import Products from "./Products";
import ProductItems from "./ProductItem";
import { cartAction } from "../../Store/CartSlice";
const DUMMYData = [
  {
    id: "p1",
    price: 6,
    title: "Panner Butter Masala",
    description: "Spicy and tasty",
  },

  {
    id: "p2",
    price: 10,
    title: " Kashmiri Panner",
    description: "Sweet and tasty",
  },

  {
    id: "p3",
    price: 12,
    title: "Panner Makhni",
    description: "butter and tasty",
  },
];

export default function CartBody() {

  const hide = useSelector((state) => state.hideCounter.hidecounter);

  return (
    <>
      {hide && (
        <section>
          <Products />
        </section>
      )}
      <h1 className="text-3xl text-center font-bold">
        Buy your favourite product
      </h1>
      {DUMMYData.map((product) => (
        <ProductItems
          key={product.id}
          id={product.id}
          price={product.price}
          title={product.title}
          description={product.description}
        />
      ))}
    </>
  );
}

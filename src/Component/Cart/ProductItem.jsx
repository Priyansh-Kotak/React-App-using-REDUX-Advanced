import { useDispatch } from "react-redux";
import AddToCart from "../../UI/AddToCart";
import { cartAction } from "../../Store/CartSlice";

export default function ProductItems(props) {
  const dispatch = useDispatch();
  const { title, id, price } = props;
  const addToCartHandler = () => {
    dispatch(
      cartAction.addItemsToCart({
        id,
        title,
        price,
      })
    );
  };
  return (
    <>
      <section className=" bg-white text-black md:m-auto md:mt-6 rounded-lg md:h-52 md:w-[50%] ">
        <section className="flex justify-between">
          <section>
            <h1>Test</h1>
            <p>{props.title}</p>
          </section>

          <section>
            <section className="bg-slate-500 text-white text-2xl rounded-lg md:p-3 md:w-fit">
              $ {props.price.toFixed(2)}
            </section>
          </section>
        </section>
        <section className="flex justify-end ">
          <AddToCart onClick={addToCartHandler} />
        </section>
      </section>
    </>
  );
}

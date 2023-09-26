import { useDispatch, useSelector } from "react-redux";
import AddToCart from "../../UI/AddToCart";
import { CounterActions } from "../../Store/CounterSlice";
import Products from "./Products";

export default function CartBody() {
  // const counter = useSelector((state)=>state.counter.counter);
  const dispatch = useDispatch();
  const hide = useSelector((state) => state.hideCounter.hidecounter);

  const counterHandler = () => {
    dispatch(CounterActions.counter());
    console.log("CounterHandler is clicked ");
  };
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
      <section className=" bg-white text-black md:m-auto md:mt-6 rounded-lg md:h-52 md:w-[50%] ">
        <section className="flex justify-between">
          <section>
            <h1>Test</h1>
            <p>Panner Butter Masala</p>
          </section>

          <section>
            <section className="bg-slate-500 text-white text-2xl rounded-lg md:p-3 md:w-fit">
              $6
            </section>
          </section>
        </section>

        <section className="flex justify-end ">
          <AddToCart onClick={counterHandler} />
        </section>
      </section>
    </>
  );
}

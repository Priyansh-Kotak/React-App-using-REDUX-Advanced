import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../Store/CartSlice";

export default function Products() {
  const items = useSelector((state) => state.cart.items);
  // const plushandler = useSelector((state)=> state.cart.items.quantity)
  const dispatch = useDispatch();
  // const { title, id, price } = props;

  const plushandler = (productID, totalPrice, ProductName) => {
    console.log("I am clicking the plus button");
    dispatch(
      cartAction.addItemsToCart({
        id: productID,
        title: ProductName,
        price: totalPrice,
      })
    );
  };

  const minusHandler = (productID) => {
    console.log("I am clicking the minus button");
    dispatch(cartAction.removeItemFromCart(productID));
  };

  return (
    <>
      <section className="bg-white text-black rounded-lg w-[30%] m-auto mt-5 p-9 my-10">
        <h1 className="text-3xl font-bold my-5">Your Shopping Cart</h1>
        <ul>
          {console.log(console.log(items))}
          {items.map((product) => (
            <li key={product.id} className="border-2  my-4 p-3 bg-slate-200">
              <section className="flex justify-between ">
                {console.log("WE are inside the map")}

                <h1 className="text-2xl font-bold">{product.name}</h1>
                <h2 className="text-xl font-bold">$ {product.totalPrice}</h2>
              </section>

              <section className="flex justify-between">
                <h2 className="text-xl font-bold">x {product.quantity}</h2>
                <section className="">
                  <button
                    className="px-3 mx-3 border-2 border-black"
                    onClick={() => minusHandler(product.id)}
                  >
                    -
                  </button>
                  <button
                    className="px-3 border-2 border-black"
                    onClick={() =>
                      plushandler(product.id, product.price, product.name)
                    }
                  >
                    +
                  </button>
                </section>
              </section>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

{
  /*  */
}

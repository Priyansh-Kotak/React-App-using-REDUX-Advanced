import { useEffect } from "react";
import Header from "./Component/Header";
import "./App.css";
import CartBody from "./Component/Cart/CartBody";
import { useDispatch, useSelector } from "react-redux";
import { sendCartData, fetchCartData } from "./Store/CartActions";

let isInitial = true;

function App() {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCartData());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(sendCartData(cart));
    }
  });

  return (
    <>
      <main>
        <section>
          <header>
            <Header />{" "}
          </header>{" "}
        </section>
        <body>
          <CartBody />
        </body>
      </main>
    </>
  );
}

export default App;

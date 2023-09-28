import { cartAction } from "./CartSlice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://redux-advanced-a93c6-default-rtdb.firebaseio.com/cart.json"
      );

      i 

      const data = await response.json();

      return data;
    };

    try {
      const cartData = await fetchData();
      dispatch(
        cartAction.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      console.log("Error");
    }
  };
};

export const sendCartData = (cart) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        "https://redux-advanced-a93c6-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            item: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log("Error somewhere");
    }
  };
};

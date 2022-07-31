import { uiActions } from "./ui-slice";
import { cartActions } from "./cart-slice";

export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://react-http-ed4ad-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("Could not fetch cart data.");
      }

      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotif({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotif({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data.",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-ed4ad-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify(cart),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Something went wrong.");
      }
    };

    try {
      await sendRequest();
      dispatch(
        uiActions.showNotif({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully .",
        })
      );
    } catch (error) {
      dispatch(
        uiActions.showNotif({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed.",
        })
      );
    }
  };
};

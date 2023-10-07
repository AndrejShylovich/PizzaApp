export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const alreadyExists = state.cartItems.filter(
        (item) => item._id === action.payload._id
      );
      /*return {
      ...state,
      cartItems: [...state.cartItems, action.payload]
    };*/

      if (alreadyExists.length > 0) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item._id === action.payload._id ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case "DELETE_FROM_CART":
      state.cartItems.map((item) => console.log(item._id.localeCompare(action.payload._id)))
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item._id.localeCompare(action.payload._id) !== 0
        ),
      };

    default:
      return state;
  }
};

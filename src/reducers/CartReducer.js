const initialState = {
  cartData: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter((movie) => movie.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export { initialState, cartReducer };

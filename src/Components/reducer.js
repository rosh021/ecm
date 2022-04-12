export const initialState = {
  basket: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_To_Basket":
      return {
        ...state,
        basket: [...state.basket, action.type],
      };

    default:
      return state;
  }
};

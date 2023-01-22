export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "[TODO] add card":
      return [...initialState, action.payload];

    case '[TODO] remove':
      return initialState.filter( todo =>todo.id !== action.payload)

    default:
      return initialState;
  }
};

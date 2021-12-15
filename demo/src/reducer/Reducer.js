const reducer = (state, action) => {
  const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);
  const step = 5;
  switch (action.type) {
    case "INCREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r + step),
      };
    case "DINREMENT_R":
      return {
        ...state,
        r: limitRGB(state.r - step),
      };
    case "INCREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g + step),
      };
    case "DINREMENT_G":
      return {
        ...state,
        g: limitRGB(state.g - step),
      };
    case "INCREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b + step),
      };
    case "DINREMENT_B":
      return {
        ...state,
        b: limitRGB(state.b - step),
      };
    default:
      return state;
  }
};

export default reducer;

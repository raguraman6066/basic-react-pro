const initialData = {
  name: "",
  city: "",
  products: [],
};
const myReducer = (state = initialData, action) => {
  if (action.type == "NAME") {
    state = {
      ...state,
      name: action.nameComp,
    };
  } else if (action.type == "CITY") {
    state = {
      ...state,
      city: action.cityName,
    };
    console.log(state);
  } else if (action.type == "PRODUCTS") {
    state = {
      ...state,
      products: action.products,
    };
    console.log(state);
  }
  return state;
};
export default myReducer;

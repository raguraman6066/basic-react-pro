export const productAction = (productItems) => {
  return {
    type: "PRODUCTS",
    products: productItems,
  };
};

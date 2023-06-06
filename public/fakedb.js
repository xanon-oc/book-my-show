// use local storage to manage cart data
const addToDb = (id) => {
  let movieCart = getMovieCart();
  // add quantity
  const quantity = movieCart[id];
  if (!quantity) {
    movieCart[id] = 1;
  } else {
    const newQuantity = quantity + 1;
    movieCart[id] = newQuantity;
  }
  localStorage.setItem("movie-cart", JSON.stringify(movieCart));
};

const removeFromDb = (id) => {
  const movieCart = getMovieCart();
  if (id in movieCart) {
    delete movieCart[id];
    localStorage.setItem("movie-cart", JSON.stringify(movieCart));
  }
};

const getMovieCart = () => {
  let movieCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("movie-cart");
  if (storedCart) {
    movieCart = JSON.parse(storedCart);
  }
  return movieCart;
};

const deleteMovieCart = () => {
  localStorage.removeItem("shopping-cart");
};

export {
  addToDb,
  removeFromDb,
  getMovieCart as getMovieCart,
  deleteMovieCart as deleteShoppingCart,
};

export default {
  addRequestToFavourites(request) {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    favourites.push(request);
    localStorage.setItem('favourites', JSON.stringify(favourites));
  },
  clearFavourites() {
    localStorage.removeItem('favourites');
  },
};

export default {
  addRequestToFavourites(request) {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    favourites.push(request);
    localStorage.setItem('favourites', JSON.stringify(favourites));
  },
  updateRequestInFavourites(request) {
    let favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    favourites = favourites.map((item) => (item.requestID !== request.requestID ? item : request));
    localStorage.setItem('favourites', JSON.stringify(favourites));
  },
  clearFavourites() {
    localStorage.removeItem('favourites');
  },
  deleteRequestFromFavourites(index) {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    favourites.splice(index, 1);
    localStorage.setItem('favourites', JSON.stringify(favourites));
  },
};

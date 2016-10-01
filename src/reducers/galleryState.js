const initialState = {
  urls: []
};

// Reducer
const galleryState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { urls: action.urlList };
    default:
      return state;
  }
};

export default galleryState;

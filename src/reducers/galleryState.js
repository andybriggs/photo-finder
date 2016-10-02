const initialState = {
  photoList: null
};

// Reducer
const galleryState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-GALLERY':
      return { photoList: action.photoList };
    default:
      return state;
  }
};

export default galleryState;

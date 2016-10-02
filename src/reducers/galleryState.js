const initialState = {
  photoList: []
};

// Reducer
const galleryState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { photoList: action.photoList };
    default:
      return state;
  }
};

export default galleryState;

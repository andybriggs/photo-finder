const initialState = {
  photoList: null,
  page: 1
};

// Reducer
const galleryState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-GALLERY':
      return {
        ...state,
        photoList: action.photoList
      };
    case 'UPDATE-PAGE':
      return {
        ...state,
        page: action.page
      };
    default:
      return state;
  }
};

export default galleryState;

const initialState = {
  photoList: null,
  page: 1,
  selectedImg: 1
};

// Reducer
const galleryState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-GALLERY':
      return {
        ...state,
        photoList: action.photoList
      };
    case 'UPDATE-VIEWER':
      return {
        ...state,
        selectedImg: action.selectedImg
      };
    case 'UPDATE-PAGE':
      return {
        ...state,
        page: action.page,
        selectedImg: action.selectedImg
      };
    default:
      return state;
  }
};

export default galleryState;

const initialState = {
  photoList: null,
  page: 1,
  selectedImg: 0,
  loading: false
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
    case 'LOADING':
      return {
        ...state,
        loading: action.loading
      };
    default:
      return state;
  }
};

export default galleryState;

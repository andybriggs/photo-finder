const initialState = {
  selectedImg: 1
};

// Reducer
const viewerState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-VIEWER':
      return { selectedImg: action.selectedImg };
    default:
      return state;
  }
};

export default viewerState;

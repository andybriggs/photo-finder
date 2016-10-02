const initialState = {
  selectedImg: null
};

// Reducer
const viewerState = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE':
      return { selectedImg: action.selectedImg };
    default:
      return state;
  }
};

export default viewerState;

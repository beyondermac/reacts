const INIT = 'INIT';

const initialState = {
  message: 'Hello World Default!'
};

export const setMessage = () => ({
  type: INIT,
  payload: 'Hello World!'
});

function reducer(state = initialState, action:any) {
  switch (action.type) {
    case INIT: {
      return { ...state, message: action.payload };
    }

    default:
      return state;
  }
}

export default reducer;

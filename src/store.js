import { createStore } from 'redux';

const initialState = {
  name: "isfhan"
};

const stateReducer = (state = initialState, action) => {
  if (action.type === "counter/incremented") {

    return { value: state.value + 1 };

  } else if (action.type === "counter/decremented") {

    return { value: state.value - 1 };
    
  }
  return state;
};




const store = createStore(stateReducer);

export default store;
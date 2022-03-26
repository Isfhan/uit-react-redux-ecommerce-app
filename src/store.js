import { createStore } from 'redux';

const initialState = {
  products: [
    {
      id:1,
      name:'ALM Headphones',
      price:450
    },
    {
      id:2,
      name:'Dado Watch',
      price:350
    },
    {
      id:3,
      name:'Mens Trimer',
      price:650
    },
    {
      id:4,
      name:'Surprise box',
      price:800
    },
    {
      id:5,
      name:'Women Sandals',
      price:120
    }
  ],
  basket: []
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
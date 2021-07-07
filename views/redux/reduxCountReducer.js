export const counterReducer = (state = {count: 0}, action) => {
  console.log('counterReducer');
  switch (action.type) {
    case 'counter/ins':
      return {count: state.count + 1};
    case 'counter/des':
      return {count: state.count - 1};
    default:
      return state;
  }
};

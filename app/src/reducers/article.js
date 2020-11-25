const article = (state={}, action) => {
  switch(action.type){
    case 'RETURN_ALL_ARTICLES':
      return Object.assign({}, state);
    case 'ARTICLES_ADD_LIST':
      return Object.assign({}, action.payload.response);
    default:
      return state;
  }
}

export default article;

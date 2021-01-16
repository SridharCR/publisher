const article = (state = {}, action) => {
  console.log('Inside Article reducer')
  console.log(action.type)
  switch (action.type) {
    case 'RETURN_ALL_ARTICLES':
      return Object.assign({}, state);
    case 'ARTICLES_LIST_ADD':
      return Object.assign({}, action.payload.response);
    default:
      return state;
  }
}

export default article;

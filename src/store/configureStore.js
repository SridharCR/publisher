import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';


export default function configureStore(initialState, debug = false) {
  console.log('Creating redux store')

  const middleware = applyMiddleware(thunk);
  const createStoreWithMiddleware = compose(middleware);

  const store = createStoreWithMiddleware(createStore)( rootReducer, initialState );
  return store;
}

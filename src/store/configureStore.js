import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/index';
import componentToggler from '../middlewares/componentToggler';
import notifier from '../middlewares/notifier';

const configureStore = preloadedState => (
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            thunkMiddleware,
            componentToggler,
            notifier
        )
    )
);

export default configureStore;

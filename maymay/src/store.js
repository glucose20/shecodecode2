import { configureStore} from '@reduxjs/toolkit';
import tutorialReducer from './reducers/tutorials';

const initialState = {};

const reducer = {
    tutorials: tutorialReducer,
}

const store = configureStore({ 
    reducer: reducer, 
    middleware:  (getDefaultMiddleware) => getDefaultMiddleware(),
    initialState})
export default store;
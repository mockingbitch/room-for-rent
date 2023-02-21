import { configureStore, combineReducers } from '@reduxjs/toolkit';
import demoReducer from './slides/demoSlide';
import authReducer from './slides/authSlide';
import categoryReducer from './slides/categorySlide';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    demo: demoReducer,
    auth: authReducer,
    category: categoryReducer
});

const persistConfig = {
    key: 'user',
    storage,
    whitelist: ['auth']
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk],
})
// export const persistor = persistStore(store)

import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts';
import { filterReducer } from './filter';
import { authReducer } from './auth';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfigAuth = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(persistConfigAuth, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);

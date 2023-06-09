import { configureStore } from '@reduxjs/toolkit';
import { addContact, contactsReducer } from './contactsSlice';
import {persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'contacts',
	storage,
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
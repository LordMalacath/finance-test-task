import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tickerApi } from "api";
import tickerReducer from "redux/slices/tickerData";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tickerData'],
};

const rootReducer = combineReducers({
  tickerData: tickerReducer,
  [tickerApi.reducerPath]: tickerApi.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(tickerApi.middleware),
});

export const persistor = persistStore(store);
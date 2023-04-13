import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { tickerApi } from "api";
import tickerReducer from "redux/slices/tickerSlice";
import appReducer from "redux/slices/appSlice";
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
  whitelist: ['app'],
};

const rootReducer = combineReducers({
  tickerData: tickerReducer,
  app: appReducer,
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
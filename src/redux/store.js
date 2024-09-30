import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import contactsReducer from "./contacts/slice";
import authReducer from "./auth/slice";
import filterReducer from "./filters/slice"

const persistedAuthReducer = persistReducer(
  {
    key: "jwt-token",
    storage,
    whitelist: ["token"],
  },
  authReducer
);

export const store = configureStore({
    reducer: {
        auth: persistedAuthReducer,
        contacts: contactsReducer,
        filters: filterReducer,
      },
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
          serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
          },
        }),
});

export default store;

export const persistor = persistStore(store);
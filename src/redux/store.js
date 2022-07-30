import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import usersSlice from "./users/users-slice";
import repositorySlice from "./repository/repository-slice";
import userinputSlice from "./userinput/userinput-slice";

const reducers = combineReducers({
  users: usersSlice.reducer,
  repository: repositorySlice.reducer,
  userinput: userinputSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["users", "repository", "userinput"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

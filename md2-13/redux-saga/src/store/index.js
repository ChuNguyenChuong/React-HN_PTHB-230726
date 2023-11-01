import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./users/index";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./saga";

const sagaMiddleWare = createSagaMiddleWare();

const store = configureStore({
  reducer: {
    users: userSlice,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(sagaMiddleWare),
});

sagaMiddleWare.run(rootSaga);

export default store;

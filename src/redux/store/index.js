import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import serviceListReducer from "../serviceListReducer";
import serviceByIDReducer from "../serviceByIDReducer";
import saga from "../../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    serviceList: serviceListReducer,
    serviceByID: serviceByIDReducer,
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(saga);

export default store;

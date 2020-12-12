import { createStore } from "redux";
import rolloutOperationReducer from "./modules/rolloutOperation";

const store = createStore(
  rolloutOperationReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

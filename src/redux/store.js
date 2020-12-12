import { createStore, combineReducers } from "redux";
import rolloutOperationReducer from "./modules/rolloutOperation";
import statusSelectionReducer from "./modules/statusSelection";

const rootReducer = combineReducers({
  rolloutOperation: rolloutOperationReducer,
  statusSelection: statusSelectionReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

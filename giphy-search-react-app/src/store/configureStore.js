import { createStore, compose, applyMiddleware } from "redux";
import ReduxPromise from "redux-promise";
import rootReducer from "../reducer";

function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose (
      applyMiddleware(ReduxPromise),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    module.hot.accept("../reducer", () => {
      const nextRootReducer = require("../reducer").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
export default configureStore;

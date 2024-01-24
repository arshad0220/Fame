import { legacy_createStore, applyMiddleware, combineReducers, compose } from "redux";
import { thunk } from "redux-thunk";
import { pricingReducer } from "./Pricing/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const enhancer = composeEnhancers(
    applyMiddleware(...middleware)
    // other store enhancers if any
  );

  const rootReducer = combineReducers({
    pricingReducer
  })

  export const Store= legacy_createStore(rootReducer, enhancer)
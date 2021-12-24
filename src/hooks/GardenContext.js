/* eslint-disable no-case-declarations */
// This is where the data state lives. It's wrapped around the root level of the
// app where it provides the state. You update the state object by using the dispatch
// function within your component or api call. It looks like this:
//
// dispatch({ type: 'SET_DEVICE_ID', payload: deviceId });
//
// You can access it within each component in two ways. If you need to access the dispatch
// outside of the return (to pass it to an api or using in the useEffect hook) you should import the
// store and use this inside the component function:
//
// const globalState = useContext(store);
// const { state, dispatch } = globalState;
//
// If you don't need to operate on the state variables and just need to render them, you can pass the
// state to be used in the JSX (in the return), you can access/pass the state like this:
//
// const { Consumer } = store;
// <Consumer>
//  {({ state, dispatch }) => (
//    <div className="setup">
//       <p>Blerg {state.user}</p>
//    </div>
//  )}
// </Consumer>
//

import React, { createContext, useReducer } from "react";

export const initialState = {
  user: {},
  garden: {
    id: null,
    name: "",
    zipcode: null,
  },
  loading: false,
};

const store = createContext(initialState);
const { Provider } = store;

const GardenContext = ({ children }) => {
  // eslint-disable-next-line no-shadow
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "GET_USER":
        return {
          ...state,
          user: action.payload,
        };
      case "TOGGLE_LOADING":
        const loadingData = {
          ...state,
          loading: !state.loading,
        };
        return loadingData;
      default:
        throw new Error("Unexpected action");
    }
  }, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, GardenContext };

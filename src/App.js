import React from "react";
import Root from "./components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducers";

const appStyle = {
  maxWidth: 1500,
  minHeight: 574,
  position: "relative"
};

let store = createStore(reducer);

const App = () => {
  return (
    <div style={appStyle}>
      <Provider store={store}>
        <Root />
      </Provider>
    </div>
  );
};

export default App;

import React from "react";
import { configure } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-15";
import App from "./App";
import store from "./store";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    configure(<Provider store={store}><App /></Provider>);
});

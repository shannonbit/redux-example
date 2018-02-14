import React from "react";
import { configure, shallow } from "enzyme";
import { Provider } from "react-redux";
import Adapter from "enzyme-adapter-react-15";
import App from "./App";
import store from "./store";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
    shallow(<Provider store={store}><App /></Provider>);
});

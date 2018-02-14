import React from 'react';
import App from './App';
import { configure } from "enzyme";
import Adapter from 'enzyme-adapter-react-15';
import { Provider } from "react-redux";
import store from "./store";

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  configure(
      <Provider store={store}>
          <App />
      </Provider>
  );
});

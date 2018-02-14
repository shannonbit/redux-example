import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import { ProductList } from "../../components/ProductList";

configure({ adapter: new Adapter() });

it("renders no products when store is empty", () => {
    const wrapper = shallow(<ProductList products={[]} />);
    expect(wrapper.find(".product").length).toBe(0);
});

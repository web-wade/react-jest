import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new Adapter() });
it("renders without crashing", () => {
    // const div = document.createElement('div');
    // const container = div.getElementsByClassName('App');
    // expect(container.length).toBe(1);
    const wrapper = shallow(<App />);
    console.log(wrapper.debug());
    expect(wrapper.find(".App").length).toBe(1);
    expect(wrapper.find(".App").prop("title")).toBe("wade");
    expect(wrapper.find('[data-test="container"]').length).toBe(1);
    expect(wrapper.find('[data-test="container"]')).toExist();
    expect(wrapper.find('[data-test="container"]')).toHaveProp("title", "wade");
});

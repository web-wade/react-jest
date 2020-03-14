import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../../components/Header";

Enzyme.configure({ adapter: new Adapter() });
it("Header 组件包含一个input框", () => {
    const wrapper = shallow(<Header />);
    const inputElem = wrapper.find("[data-test='input']");
    expect(inputElem.length).toBe(1);
});

it("Heder 组件input框内容，初始化为空", () => {
    const wrapper = shallow(<Header />);
    const inputElem = wrapper.find("[data-test='input']");
    expect(inputElem.prop("value")).toEqual("");
});

it("Heder input用户输入随着改变", () => {
    const wrapper = shallow(<Header />);
    const inputElem = wrapper.find("[data-test='input']");
    inputElem.simulate("change", {
        target: {
            value: "今天要学习Jest"
        }
    });
    expect(wrapper.state("value")).toEqual("今天要学习Jest");
    const newinputElem = wrapper.find("[data-test='input']");
    expect(newinputElem.prop("value")).toEqual("今天要学习Jest");
});

it("Header 组件 inout输入回车时，无内容，无操作", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = wrapper.find("[data-test='input']");
    wrapper.setState({
        value: ""
    });
    inputElem.simulate("keyup", {
        keyCode: 13
    });
    expect(fn).not.toHaveBeenCalled();
});

it("Header 组件 inout输入回车时，有内容，有操作", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = wrapper.find("[data-test='input']");
    wrapper.setState({
        value: "学习React"
    });
    inputElem.simulate("keyup", {
        keyCode: 13
    });
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenLastCalledWith("学习React");
    expect(inputElem.prop('value')).toBe('');
});

it("Header 组件 inout输入回车时，有内容，有操作,最后应该清除掉", () => {
    const fn = jest.fn();
    const wrapper = shallow(<Header addUndoItem={fn} />);
    const inputElem = wrapper.find("[data-test='input']");
    wrapper.setState({
        value: "学习React"
    });
    inputElem.simulate("keyup", {
        keyCode: 13
    });
    const newinputElem =  wrapper.find("[data-test='input']");
    expect(newinputElem.prop('value')).toBe('');
});

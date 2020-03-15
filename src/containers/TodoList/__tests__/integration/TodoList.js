import React from "react";
import { mount } from "enzyme";
import TodoList from "../../index";
import { Provider } from "react-redux";
import { finTestWrapper } from "../../../../utils/testUtils";
import store from "../../../../store/createStore";

it("1.输入框输入内容 2.点击回车 3.列表展示用户输入的内容", () => {
    const wrapper = mount(
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
    const inputElem = finTestWrapper(wrapper, "input");
    const value = "wade";
    inputElem.simulate("change", {
        target: { value }
    });
    inputElem.simulate("keyUp", {
        keyCode: 13
    });
    const listItem = finTestWrapper(wrapper, "list-item");
    expect(listItem.length).toEqual(1);
    expect(listItem.text()).toContain(value);
});

it("1.用户打开页面 2.应该展示接口返回的数据 ", () => {
    const wrapper = mount(
        <Provider store={store}>
            <TodoList />
        </Provider>
    );
    
});

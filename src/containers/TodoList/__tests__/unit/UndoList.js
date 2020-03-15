import React from "react";
import { shallow } from "enzyme";
import UndoList from "../../components/UndoList";
import { finTestWrapper } from "../../../../utils/testUtils";

it("没有数据时count为0,列表无内容", () => {
    const wrapper = shallow(<UndoList list={[]} />);
    const countElem = finTestWrapper(wrapper, "count");
    const listElem = finTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual("0");
    expect(listElem.length).toBe(0);
});

it("有数据时count为长度,列表不为空", () => {
    const listData = [
        { status: "div", value: "学习React" },
        { status: "div", value: "学习React2222" }
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const countElem = finTestWrapper(wrapper, "count");
    const listElem = finTestWrapper(wrapper, "list-item");
    expect(countElem.text()).toEqual(listData.length + "");
    expect(listElem.length).toBe(listData.length);
});

it("未完成列表有内容时，要存在删除按钮", () => {
    const listData = [
        { status: "div", value: "学习React" },
        { status: "div", value: "学习React2222" }
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const deleteElem = finTestWrapper(wrapper, "delete-item");
    expect(deleteElem.length).toBe(listData.length);
});

it("未完成列表有内容是，点击某个删除按钮，会调用删除方法", () => {
    const listData = [
        {
            status: "div",
            value: "学习React"
        },
        {
            status: "div",
            value: "学习React"
        }
    ];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList list={listData} deleteItem={fn} />);
    const deleteElem = finTestWrapper(wrapper, "delete-item");
    deleteElem.at(index).simulate("click", { stopPropagation: () => {} });
    expect(fn).toHaveBeenLastCalledWith(index);
});

it("当某一项被点击时，触发changeStatus函数 ", () => {
    const listData = [
        {
            status: "div",
            value: "学习React"
        },
        {
            status: "div",
            value: "学习React"
        }
    ];
    const fn = jest.fn();
    const index = 1;
    const wrapper = shallow(<UndoList list={listData} changeStatus={fn} />);
    const deleteElem = finTestWrapper(wrapper, "list-item");
    deleteElem.at(index).simulate("click");
    expect(fn).toHaveBeenLastCalledWith(index);
});

it("当某一项状态input时，展示输入框 ", () => {
    const listData = [
        {
            status: "input",
            value: "学习React"
        },
        {
            status: "div",
            value: "学习React"
        }
    ];
    const wrapper = shallow(<UndoList list={listData} />);
    const inputElem = finTestWrapper(wrapper, "input");
    expect(inputElem.length).toBe(1);
});

it("当某一个输入款失去焦点时，触发handleBlur函数 ", () => {
    const listData = [
        {
            status: "input",
            value: "学习React"
        },
        {
            status: "div",
            value: "学习React"
        }
    ];
    const fn = jest.fn();
    const wrapper = shallow(<UndoList list={listData} handleBlur={fn} />);
    const inputElems = finTestWrapper(wrapper, "input");
    inputElems.simulate("blur");
    expect(fn).toHaveBeenLastCalledWith(0);
});

it("当某一个输入款变更时，触发valueChange函数 ", () => {
    const listData = [
        {
            status: "input",
            value: "学习React"
        },
        {
            status: "div",
            value: "学习React"
        }
    ];
    const fn = jest.fn();
    const wrapper = shallow(<UndoList list={listData} valueChange={fn} />);
    const inputElems = finTestWrapper(wrapper, "input");
    inputElems.simulate("change", {
        target: { value: "2222" }
    });
    expect(fn).toHaveBeenLastCalledWith(0, "2222");
});

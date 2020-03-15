jest.mock('./util')
//jest.mock发现util是一个类，会自动把类的构造函数和方法变成jest.fn()
import Util from "./util";
import demoFunction from "./demo"

test('测试demoFunction ', () => {
    demoFunction();
    expect(Util).toHaveBeenCalled();
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();
}); 
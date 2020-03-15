import { generateConfig, generateConfigTwo } from "./snapshot";

test("测试generateConfig函数", () => {
  expect(generateConfig()).toMatchInlineSnapshot(`
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
    }
  `);
});

// test('测试generateConfigTwo函数', () => {
//     expect(generateConfigTwo()).toMatchSnapshot({
//         time: expect.any(Date)
//     });
// })

test("测试generateConfigTwo函数", () => {
  expect(generateConfigTwo()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});

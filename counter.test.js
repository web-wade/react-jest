import Counter from "./counter"

let counter = null;

// beforeAll(()=>{
//     counter = new Counter();
// })




afterAll(() => {
    console.log("afterall")
});

describe('测试增加相关的代码', () => {
    beforeEach(() => {
        counter = new Counter();
    });
    test('测试 addone', () => {
        counter.addOne();
        expect(counter.number).toBe(1);
    }); 
    test('测试 addTwo', () => {
        counter.addTwo(); 
        expect(counter.number).toBe(2);
    }); 
});

describe('测试减少相关的代码', () => {
    beforeEach(() => {
        counter = new Counter();
    });
    test.only('测试 minusOne', () => {
        counter.minusOne();
        expect(counter.number).toBe(-1);
     });  
    
    
    test('测试 minusTwo', () => {
        counter.minusTwo();
        expect(counter.number).toBe(-2);
     });  
});



 
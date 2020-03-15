import { fetchData } from "./fetchData"

// test('fetch', (done) => {
//     fetchData((data) => {
//         expect(data).toEqual({
//             success: true
//         })
//         done();
//     })
// })

// test('fetch', () => {
//    return fetchData().then((response) => {
//         expect(response.data).toEqual({
//             success: true
//         }) 
//     })
// })

// test('fetch 404', () => {
//     expect.assertions(1);
//    return fetchData().catch((e) => {
//        console.log(e)
//         expect(e.toString().indexOf('404')>-1).toBe(true)
//     })
// })

// test('fetch success', () => {
//     return expect(fetchData()).resolves.toMatchObject({ data: { success: true } })
// }) 

// test('fetch  404', () => {
//     return expect(fetchData()).rejects.toThrow()
// }) 

// test('fetch  ', async () => {
//     await expect(fetchData()).rejects.toThrow()
// }) 

test('fetch  404', async () => {
    expect.assertions(1)
    try{
        await fetchData()
    }catch(e){
        expect(e.toString().indexOf('404')>-1).toBe(true)
    }
}) 


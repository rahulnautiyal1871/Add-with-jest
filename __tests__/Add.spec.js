const Add = require('../index');

describe('Add function test cases',()=>{

    it('returns 200 Ok  when parameters is valid', ()=>{
        let strg = '1,3'
        expect(Add(strg)).toBe(4);
    })
    
    it('returns 200 Ok  when parameters with new line ', ()=>{
        let strg = '1\n2,3\n'
        expect(Add(strg)).toBe(6);
    })

    it('returns 200 Ok  when parameter is Empty ', ()=>{
        let strg = ''
        expect(Add(strg)).toBe(0);
    })

    it('returns 200 Ok  when parameter is not valid ', ()=>{
        let strg = '2'
        expect(Add(strg)).toBe(0);
    })

    it('returns 200 Ok  when parameter is not a string ', ()=>{
        let strg = 2
        expect(Add(strg)).toBe('Invalid Parameter');
    })

})


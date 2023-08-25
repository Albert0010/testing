const {isValidTypeErrorMessage,validNumbersCases} = require('../../app/_helper/constant.js')

// const add = calculator.add;
// const multiple = calculator.multiple;

// const validNumbersCases = (caseName,result,params) => {
//     it(caseName,()=>{
//         expect(add(...params)).to.equal(result);
//     });
// }


describe('Calculator add functionality with valid numbers',()=>{
    validNumbersCases('should correctly add two positive numbers',9,[4,5]);
    validNumbersCases('should correctly add a positive number and zero',4,[4,0]);
    validNumbersCases('should correctly add a negative number and zero',-4,[-4,0]);
    validNumbersCases('should correctly add two negative numbers',-9,[-4,-5]);
    validNumbersCases('should correctly add positive number and a negative number',-1,[4,-5]);
    validNumbersCases('should correctly add many different numbers',[4,2,3,5,4,8,0,-19,20,15,93,123,100,47].reduce((a,b)=>a+b),[4,2,3,5,4,8,0,-19,20,15,93,123,100,47]);

    // it('should correctly add two positive numbers',()=>{
    //     expect(add(4,5)).to.equal(9);
    // });
    // it(' should correctly add a positive number and zero',()=>{
    //     expect(add(4,0)).to.equal(4);
    // })
    // it(' should correctly add a negative number and zero.',()=>{
    //     expect(add(-4,0)).to.equal(-4);
    // })
    // it(' should correctly add two negative numbers',()=>{
    //     expect(add(-4,-5)).to.equal(-9);
    // })
    // it('should correctly add positive number and a negative number',()=>{
    //     expect(add(4,-5)).to.equal(-1);
    // })
})

describe("Calculator add functionality with invalid type's",()=>{
    validNumbersCases('should return error message',isValidTypeErrorMessage,['15',10]);
})
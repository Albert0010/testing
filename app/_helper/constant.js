const {expect} = require("chai");
const calculator = require("../Calculator");
console.log(calculator.add(1,2))
module.exports = {
    isValidTypeErrorMessage:'Please enter valid type',
    isAllNumbers:(params)=>{
        return params.every((item)=>typeof item === 'number' && !isNaN(item))
    },
    validNumbersCases:(caseName,result,params) => {
        it(caseName,()=>{
            expect(calculator.add(...params)).to.equal(result);
        });
    }
}

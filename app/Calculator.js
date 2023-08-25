const _helper = require('./_helper/constant.js')
console.log({_helper})
class Calculator {
    constructor() {
    }
    add(...params){
        return _helper.isAllNumbers(params) ?  params.reduce((num1,num2)=>num1+num2) : _helper.isValidTypeErrorMessage
    }
    multiple(...params){
        return params.reduce((num1,num2)=>num1*num2);
    }
}

module.exports = new  Calculator();
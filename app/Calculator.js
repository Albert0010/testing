import constants from '../_helper/constant.js';

const {isValidTypeErrorMessage,isAllNumbers} = constants


class Calculator {
    constructor() {
    }
    add(...params){
        return isAllNumbers(params) ?  params.reduce((num1,num2)=>num1+num2) : isValidTypeErrorMessage
    }
    multiple(...params){
        return params.reduce((num1,num2)=>num1*num2);
    }
}

export default new  Calculator();
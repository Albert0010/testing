import constants from '../../_helper/constant.js';
import calculator from "../../app/Calculator.js";

const {addValidNumbersCases,isValidTypeErrorMessage,multipleValidNumbersCases} = constants;
const {add,multiple} = calculator;



describe('Calculator add functionality with valid numbers',()=>{
    beforeEach((done)=>{
        typeof add === 'function' && done();
    })

    addValidNumbersCases('should correctly add two positive numbers',9,[4,5],add);
    addValidNumbersCases('should correctly add a positive number and zero',4,[4,0],add);
    addValidNumbersCases('should correctly add a negative number and zero',-4,[-4,0],add);
    addValidNumbersCases('should correctly add two negative numbers',-9,[-4,-5],add);
    addValidNumbersCases('should correctly add positive number and a negative number',-1,[4,-5],add);
    addValidNumbersCases('should correctly add decimal numbers',5.85,[3.14,2.71],add);
    addValidNumbersCases('should correctly add decimal numbers',3000000,[2000000,1000000],add);
    addValidNumbersCases('should correctly add many different numbers',[4,2,3,5,4,8,0,-19,20,15,93,123,100,47].reduce((a,b)=>a+b),[4,2,3,5,4,8,0,-19,20,15,93,123,100,47],add);
    addValidNumbersCases('should return error message',isValidTypeErrorMessage,['15',10],add);
    addValidNumbersCases('should return error message',isValidTypeErrorMessage,[NaN,[10]],add);
})


describe("Calculator multiple functionality with valid numbers",()=>{
    beforeEach((done)=>{
        typeof multiple === 'function' && done();
    })
    multipleValidNumbersCases('should correctly multiple two positive numbers',150,[15,10],multiple);
    multipleValidNumbersCases('should correctly multiple negative and positive numbers',-150,[-15,10],multiple);
    multipleValidNumbersCases('should correctly multiple two negative numbers',150,[-15,-10],multiple);
    multipleValidNumbersCases('should correctly multiple zero and number',0,[-15,0],multiple);
    multipleValidNumbersCases('should correctly multiple decimal numbers',4.0,[2.5,1.6],multiple);
    multipleValidNumbersCases('should correctly multiple large numbers',2000000000,[50000,40000],multiple);
})
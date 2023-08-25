import {expect} from 'chai'
import {assert} from 'chai'
export default {
    isValidTypeErrorMessage:'Please enter valid type',
    isAllNumbers(params){
        return params.every((item)=>typeof item === 'number' && !isNaN(item))
    },
    addValidNumbersCases(caseName,result,params,add)  {
        it(caseName,()=>{
            expect(add(...params)).to.equal(result);
        });
    },
    multipleValidNumbersCases(caseName,result,params,multiple){
        it(caseName,()=>{
            assert.equal(multiple(...params), result);
        });
    }
}

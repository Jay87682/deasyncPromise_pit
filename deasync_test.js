'use strict';
const deasyncPromise = require("deasync-promise");

module.exports = function() {

    let my_var;

    deasyncPromise(test_1())

    function test_1() {
        return new Promise(function(resolve, reject) {
            test(2).then(function(result) {
                console.log('test_1: ');
                console.log(result);

                my_var = result;                
                resolve();
            }).catch(function(error) {
                console.log('test_1 error:');
                console.log(error)
                reject(error)
            })
        })
    }


    function test(x) {
        return new Promise(function(resolve, reject) {
            if(x != 1) {
                //If reject nothing, the behavior will be stranger for deasyncPromise.
                reject();
            }
            resolve(x)
        });
    }

    return {my_var};
}
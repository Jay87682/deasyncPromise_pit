# deasyncPromise_pit
Show the stranger behavior of deasyncPromise
1. Use deasyncPromise to invoke sync promise function
2. In promise function reject()

Expect result:
deasyncPromise should throw error
Result:
It just return without throwing error


This is how deasyncPromise implement:

```
module.exports = function(promise) {
	var result, error, done = false;
	promise.then(function(res) {
		result = res;
	}, function(err) {
		error = err;
	}).then(function() {
		done = true;
	});
    while(!done) {
        loop();
    }
    if (error) {
      //If error is undefined, it will pass this throw
    	throw error;
    }
    return result;
}
```

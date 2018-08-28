# deasyncPromise_pit
Show the stranger behavior of deasyncPromise
1. Use deasyncPromise to invoke sync promise function
2. In promise function reject()

Expect result:
deasyncPromise should throw error
Result:
It just return without throwing error

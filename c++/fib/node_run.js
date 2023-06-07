const factory = require('./fib.module')


factory().then((instance) => {
  const value = instance.ccall("fib", "number", ["number"], [10]); // using ccall etc. also work
  console.log('fib result: ', value)
});
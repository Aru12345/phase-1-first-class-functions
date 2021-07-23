function receivesAFunction(callback) {
    callback();
  }

  const returnsANamedFunction = () => returnsANamedFunction
  function returnsAnAnonymousFunction() {
    return () => console.log("this is an anonymous function");
  }
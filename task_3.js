const factorial = n =>
    n<0 ?
        (()=>{
            throw new TypeError('Negative number')
        })()
        :
        n<=1 ?
            1:
            n*factorial(n-1);
console.log(factorial(5));
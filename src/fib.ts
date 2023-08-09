function nThFibonacciNumber(num:number):number{
    if(num == 1){
        return 0
    }if(num <= 2){
        return 1
    }
    return nThFibonacciNumber(num-1) + nThFibonacciNumber(num-2)
}

console.log(nThFibonacciNumber(6))
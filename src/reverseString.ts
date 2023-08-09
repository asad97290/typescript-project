
function solve<T extends number|string>(arr:T[]):T[]{
    let len = arr?.length;
    if(len == 1){
      return [arr[0]];
    }
    return [arr[len-1]].concat(solve(arr.slice(0,len-1)));
  }
  
  let str:string = "hello"
  let num:number[] = [1,2,3,4]
  
  console.log(str)
  console.log(num)

  console.log(solve<string>(Array.from(str)).join(''))
  console.log(solve<number>(num))
/*Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

The first mission: let all elements in the array keep two decimal places(No need to convert number n).

The second mission: Traversal arr, count the number of the element which smaller than n and return it.*/

function howManySmaller(arr,n){
  let smallest = n
  let b = arr.map(s => s.toFixed(2))
  b.forEach(function(item){
    if(item < smallest){
      smallest = item
    }
  })
  let num = Math.floor(parseInt(smallest))
  return num
}

// Return the Nth Even Number
//
// nthEven(1) //=> 0, the first even number is 0
// nthEven(3) //=> 4, the 3rd even number is 4 (0, 2, 4)
//
// nthEven(100) //=> 198
// nthEven(1298734) //=> 2597466


function nthEven(n){
  console.log(n);
  if (n == 1)
    return 0;
  var sum = 0;
  var counter = 1;
  for(var  i = 0;; i = i + 2) {
    sum += 2;
    counter++;
    if (counter >= n)
      return sum;
  }
}

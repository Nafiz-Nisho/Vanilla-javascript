

// Fibonacci Recursive Way 


function fibonacciRecursive (n) {

  if (n == 0) {

    return 0;
  }

  if (n == 1)
{
    return 1;

} else {
         
    return fibonacciRecursive (n-1) + fibonacciRecursive (n-2);
}

}

var result = fibonacciRecursive(7)

console.log(result)


// OUTPUT 13
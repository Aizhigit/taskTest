var fib = []; 
fib[0] = 0;
fib[1] = 1;
for (var i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  fib.push(i);
}
console.log(fib);
   



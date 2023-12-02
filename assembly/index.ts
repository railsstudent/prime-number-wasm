// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function isPrime(n: i32): bool {
  if (n <= 1) {
    return false;
  } else if (n === 2 || n === 3) {
    return false;
  } else if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }
  
  for (var i = 5; i <= Math.sqrt(n); i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  
  return true;
} 
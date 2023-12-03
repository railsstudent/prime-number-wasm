// The entry file of your WebAssembly module.

// module import
@external("env", "console.log")
declare function primeNumberLog(primeNumber: i32): void;

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
  
  for (let i = 5; i <= Math.sqrt(n); i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
} 

export function findFirstNPrimes(n: i32): Array<i32> {
  let primes = new Array<i32>(n);
  for (let i = 0; i < n; i++) {
    primes[i] = 0;
  }
  primes[0] = 2;
  let num = 3;

  let index = 0;
  while(index < n - 1) {
    let isPrime = true;

    for (let i = 0; i <= index; i++) {
      primeNumberLog(primes[i]);
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes[index + 1] = num;
      index = index + 1;
    }
    num = num + 2;
  }

  return primes;
}

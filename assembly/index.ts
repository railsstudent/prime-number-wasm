// The entry file of your WebAssembly module.

// module import
declare function primeNumberLog(primeNumber: i32): void;

export function isPrime(n: i32): bool {
  if (n <= 1) {
    return false;
  } else if (n === 2 || n === 3) {
    return true;
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
  primeNumberLog(primes[0]);

  let num = 3;
  let index = 0;
  while(index < n - 1) {
    let isPrime = true;

    for (let i = 0; i <= index; i++) {
      if (num % primes[i] === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primeNumberLog(num);
      primes[index + 1] = num;
      index = index + 1;
    }
    num = num + 2;
  }

  return primes;
}

const MAX_SIZE = 1000001;
 
export function optimizedSieve(n: i32): Array<i32> {
  const isPrime = new Array<bool>(MAX_SIZE);
  isPrime.fill(true, 0, MAX_SIZE);

  const primes = new Array<i32>();
  const smallestPrimeFactors = new Array<i32>(MAX_SIZE);
  smallestPrimeFactors.fill(1, 0, MAX_SIZE);

  isPrime[0] = false;
  isPrime[1] = false;

  // Fill rest of the entries
  for (let i = 2; i < n; i++) {
    // If isPrime[i] === true, 
    // then i is a prime number
    if (isPrime[i]) {
      // put i into prime[] array
      primes.push(i);

      // A prime number is its own smallest
      // prime factor
      smallestPrimeFactors[i] = i;
    }

    // Remove all multiples of  i*prime[j] which are
    // not prime by making isPrime[i*prime[j]] = false
    // and put smallest prime factor of i*Prime[j] as prime[j]
    // [ for exp :let  i = 5 , j = 0 , prime[j] = 2 [ i*prime[j] = 10 ]
    // so smallest prime factor of '10' is '2' that is prime[j] ]
    // this loop run only one time for number which are not prime
    for (let j = 0; j < primes.length && i * primes[j] < n && primes[j] <= smallestPrimeFactors[i]; j++) {
      const nonPrime = i * primes[j];
      isPrime[nonPrime] = false;

      // put smallest prime factor of i*prime[j]
      smallestPrimeFactors[nonPrime] = primes[j];
    }
  }

  const results = new Array<i32>();
  for (let i = 0; i < primes.length && primes[i] <= n; i++) {
    results.push(primes[i]);
  }

  return results;
}
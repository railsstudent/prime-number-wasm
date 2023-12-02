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
  
  for (let i = 5; i <= Math.sqrt(n); i = i + 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
} 

// function generateprime(N)
// {
// 	let primes = []; // Initialize an empty array to store prime numbers
// 	primes.push(2); // Add 2 as the first prime number
// 	let num = 3; // Start checking for prime numbers from 3
// 	while (primes.length < N) { // Keep searching until we
// 								// find N prime numbers
// 		let is_prime = true; // Assume the current number is
// 							// prime until proven otherwise
// 		for (let i = 0; i < primes.length; i++) {
// 			if (num % primes[i] == 0) { // If the current number is 
// 										// divisible by any previously 
// 										// found prime numbers

// 				is_prime = false; // Then it is not a prime
// 								// number
// 				break; // Exit the loop since we've already
// 					// proven it's not prime
// 			}
// 		}
// 		if (is_prime) { // If the current number is still
// 						// prime after checking all
// 						// previously found prime numbers
// 			primes.push(num); // Add it to our array of
// 							// prime numbers
// 		}
// 		num += 2; // Check the next odd number (since even
// 				// numbers other than 2 are not prime)
// 	}
// 	for (let i = 0; i < primes.length;
// 		i++) { // Print the first N prime numbers
// 		console.log(primes[i] + " ");
// 	}
// 	console.log("<br>");
// }

export function getFirstNPrimes(n: i32): Array<i32> {
  return [1];
}

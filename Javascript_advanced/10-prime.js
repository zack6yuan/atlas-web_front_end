function countPrimeNumbers() {
  for (let x = 2; x < 101; x++) {
    if (x > 1 &&  x % 1 == 0 && x % x == 0) {
      return x.length;
    }
  }
}
countPrimeNumbers();
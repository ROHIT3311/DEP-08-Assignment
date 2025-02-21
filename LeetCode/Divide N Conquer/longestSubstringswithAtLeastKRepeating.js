function atLeastKRepeating(str, k) {
  let h1 = new Map();

  for (let i = 0; i < str.length; i++) {
    h1.set(str.charAt(i), (h1.has(str.charAt(i)) + 1) | 0);
  }

  console.log(h1);

  let sum = 0;
  for (let [char, count] of h1) {
    if (count >= k) {
      sum += count;
    }
  }

  console.log(sum);
}

atLeastKRepeating("abbccd", 2);

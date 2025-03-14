function GreatestWordVowels(str) {
  const wordArray = str.split(" ");

  let word = "";
  let maxVowelCount = 0;

  for (let currWord of wordArray) {
    let vowelCount = 0;
    for (let char of currWord) {
      if ("aeiou".includes(char.toLowerCase())) {
        vowelCount++;
      }
    }
    if (maxVowelCount < vowelCount) {
      word = currWord;
    }
  }

  return word;
}

const sentence = "Hello this is world ";
console.log(GreatestWordVowels(sentence));

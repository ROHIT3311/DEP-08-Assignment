function LongestWordInSen(sentence) {
  const wordArray = sentence.split(" ");
  console.log(wordArray);

  let word = "";

  for (let i = 0; i < wordArray.length; i++) {
    if (word.length < wordArray[i].length) {
      word = wordArray[i];
    }
  }

  console.log(word);
}

let sentence = "Hello this is leetcode";
LongestWordInSen(sentence);

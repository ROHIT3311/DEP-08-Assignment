function GreatestWordVowels(sentence) {
    
const wordArray = sentence.split(" ");

console.log(wordArray);

let word = "";
let maxVowelCount = 0;

for(let currWord of wordArray){
  
    let vowelCount = 0;
    for(let char of currWord){
    
        if( "aeiou".includes(char.toLowerCase())){
            vowelCount++;
        }
    }
    if(maxVowelCount < vowelCount){
        word = currWord;
    }
}

console.log(word);
}

const sentence = "Hello this is leetcode ";
GreatestWordVowels(sentence);


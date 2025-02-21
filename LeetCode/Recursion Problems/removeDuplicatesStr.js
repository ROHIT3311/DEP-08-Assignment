function removeDuplicate(str, i, newStr, arr) {
  if (i == str.length) {
    console.log(newStr);
    return;
  }

  if (arr[str.charAt(i).charCodeAt(0) - "a".charCodeAt(0)] == true) {
    removeDuplicate(str, i + 1, newStr, arr);
  } else {
    arr[str.charAt(i).charCodeAt(0) - "a".charCodeAt(0)] = true;
    removeDuplicate(str, i + 1, (newStr += str.charAt(i)), arr);
  }
}

function removeDuplicateUsingSet(str) {
  let s1 = new Set();

  for (let i = 0; i < str.length; i++) {
    if (!s1.has(str.charAt(i))) {
      s1.add(str.charAt(i));
    }
  }
  let newStr = "";

  for (s of s1) {
    newStr += s;
  }

  console.log(newStr);
}
removeDuplicate("appncollege", 0, "", []);
removeDuplicateUsingSet("appppnaacolllege");

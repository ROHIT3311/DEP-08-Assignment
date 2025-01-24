function SortInObjects(obj) {
  obj.sort((a, b) => {
    return a.score - b.score;
  });
  console.log(obj);
}

let employees = [
  { name: "John", dob: "Dec 15, 2007", score: 80 },
  { name: "Ana", dob: "Jan 15, 2009", score: 75 },
  { name: "Zion", dob: "Feb 15, 2011", score: 90 },
];

SortInObjects(employees);

// '|' pipe operator is nothing but union in ts. It is used to get the type either 
//  in one data type or another data type. Examples are given below

let value: number | string = 2;

function getData(userName: string): string | number {
  return 1;
}

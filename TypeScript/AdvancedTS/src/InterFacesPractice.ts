// Whenever we can create an interfaces and have any variable and functions. We have to just decalre their.
// Their function definiton and variable initailization should be in class where we can implement our
// interface. In class where we can implementing the interface can have other varibales and functions.
// Doesn't neet to have only functions and varibles which is in interfaces.

interface Person {
  name: string;
  mobNumber: number;
  emailId: string;
}

class Person1 implements Person {
  constructor(
    public name: string,
    public mobNumber: number,
    public emailId: string
  ) {}
}

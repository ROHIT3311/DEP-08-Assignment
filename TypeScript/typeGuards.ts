// Type guards is nothing but, whenever we define more that one data type to one variable to check either this or that.
// Developers can use type guard method to check about type of varible which i have implemented below

function detectType(val: number | string) {
  if (typeof val === "string") {
    return val;
  }
  return val + 3;
}

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAccount(account: User | Admin) {
  if ("isAdmin" in account) {
    return account.isAdmin;
  }
}

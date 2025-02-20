// function that take arguments is object
function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "dev", isPaid: true });

// createUser({ name: "don", isPaid: true, email: "don@g.com" });  // notic it get error but if see below code it not give error
let newUser = { name: "don", isPaid: true, email: "don@g.com" };
createUser(newUser); // it not give error here even its bad code or behavior of js

// function that return object
function course(): { name: string; isPaid: boolean } {
  return { name: "Dev", isPaid: false };
}

// if we have some properties that is used multiple time in different funtion it would be defing again and again is very chellaging.
// so we can use type it called alise that define properties and not define value of it wether we provide what kind of value come up into that.
//example
type User = {
  name: string;
  email: string;
  isActive: boolean;
  password: string;
};
export {};

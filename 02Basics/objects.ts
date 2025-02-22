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
  //   isPaid: boolean;
};

// by useing this type called User we can pass all the information to other.
// it like create your own data type by using this keyword "type"

// function createNewUser(user: User): User {
//   return {
//     name: user.email,
//     email: user.email,
//     isActive: user.isActive,
//     password: user.password,
//   };
// }

function createNewUser(u: User) {
  console.log("name:" + u.name);
  console.log("email:" + u.email);
  console.log("isActive:" + u.isActive);
  console.log("password:" + u.password);
}

createNewUser({
  name: "Dev",
  email: "don@g.com",
  isActive: true,
  password: "picture abhi baki hai mere dost",
});

// how to crate a type that readonly
type User1 = {
  readonly _id: string; // this can not be chage after it declare
  name: string;
  email: string;
  isActive: boolean;
  password: string;
  readonly activitys: number[]; // here you can push the element even it's readonly
};

let myUser1: User1 = {
  _id: "EMP_118",
  name: "Dev",
  email: "d@d.com",
  isActive: true,
  password: "Hello there",
  activitys: [1, 2],
};

myUser1.email = "dev@dev.com";
myUser1.activitys.push(5); //this is allowed
myUser1.activitys[0] = 3; //this is allowed
// myUser1.activitys = [1, 2, 3]; this is not allowed
console.log(myUser1);

// there some propertis are optional so to do that you can check this below code
type User2 = {
  name: string;
  email: string;
  isActive: boolean;
  password: string;
  isPaid: boolean;
  cardDeatails?: number; // by using ? it make optional
};

let myUser2: User2 = {
  name: "Dev",
  email: "d@d.com",
  isActive: true,
  password: "Hello there",
  isPaid: true,
};
console.log(myUser2);

// how to combin different types into one type for used in some function or other requirement
type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: string;
};
type cardDeatails = cardNumber &
  cardDate & {
    cvv: number;
  };
export {};

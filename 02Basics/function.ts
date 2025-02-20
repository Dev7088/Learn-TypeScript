// function addTwo(num) {
//   num.toUpperCase();
//   return num + 2;
// }

// addTwo(5); this is allow but it can not be in our case so we can do this

function addTwo(num: number) {
  return num + 2;
}
addTwo(5);

function getUpper(val: string) {
  return val.toUpperCase;
}
getUpper("dev");

function signUpUser(name: string, email: string, isPaid: boolean) {}
signUpUser("dev", "d2@g", false);

// how to pass default value in function
let loginUser = (name: string, email: string, isPaid: boolean = false) => {};
loginUser("d", "d@d");

// how to set funtion type
function addFive(num: number): number {
  return num + 5;
  //   return "hello";
}
const value = addFive(5);

const getHello = (s: string): string => {
  return "Hello, there";
};

// const heros = ["Iron Man", "Batman", "Spiderman"];
// heros.map((hero) => {
//   return `hero is ${hero}`;
// });
// better version of this code id below

const heros = ["Iron Man", "Batman", "Spiderman"];
heros.map((hero): string => {
  return `hero is ${hero}`;
});

// if the function not return something
function consoleError(errmsg: string): void {
  console.log(errmsg);
}

//Some functions never return a value:
function handleError(errmsg: string): never {
  throw new Error(errmsg);
}

// there is usecase where multiple values can be return by function based on some condition
// function getValue(myVal: number): string {
//   if (myVal > 5) {
//     return true;
//   }
//   return "200 ok";
// }

export {};

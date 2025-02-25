const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(value: number | boolean): boolean | number {
  return value;
}

function identityTwo(val: any): any {
  return val;
}

function identityThree<Type>(val: Type): Type {
  return val;
}
identityThree(7);

// advantage of this Type generics that you can define you on generaic type and used it
function identityFour<T>(val: T): T {
  return val;
}

interface Bootel {
  brand: string;
  type: string;
  numberOfBottle: number;
}
const data = identityFour<Bootel>({
  brand: "Holo",
  type: "medium",
  numberOfBottle: 30,
});
console.log(data);

// how and use all kind of data type in Array
// function getSearchProducts<T>(products : Array<T>) this also right syntax both are same

function getSearchProducts<T>(products: T[]): T {
  // do some database operations
  const myIndex = 3;
  return products[myIndex];
}

// Let's do same thing with the arrow function
const getMoreSearchProducts = <T>(products: Array<T>): T => {
  // do some database operations
  const myIndex = 4;
  return products[myIndex];
};

//
interface Database {
  connection: string;
  username: string;
  password: string;
}
function anothereFunction<T, U extends Database>(valOne: T, valTwo: U): object {
  return {
    valOne,
    valTwo,
  };
}
anothereFunction(3, { connection: "", username: "", password: "" });

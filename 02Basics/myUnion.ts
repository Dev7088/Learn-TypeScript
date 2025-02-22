let score: number | string = 33;
score = "Not Score";

// how to use union on type
type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let dev: User | Admin = { name: "Dev", id: 22 };
dev = { username: "Dev", id: 7088 };

// function that accept id with multiple type like number and string
function getDbId(id: string | number) {
  //API Call or someting ...
  console.log(`DB id is: ${id}`);

  // id.toLowerCase() // this give error because it canbe id
  //if you can to convert then you have to make some conditon

  if (typeof id === "string") {
    id.toLowerCase();
  }
}
getDbId(3);
getDbId("How ARE YOU");

//Array
const data: number[] | string[] = [1, 2, 3, 4]; // this is only going to be only a string or number not both at same time
const data1: (number | string)[] = [1, 2, "3"]; // this allow both number and string in this same array

// literal type  of that should not be allowed to change it just like the constant
let pi: 3.14 = 3.14;
// pi=3.149 this is not allowed

let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = "aisle";
// seatAllotment = "crew" not allowed becaused
export {};

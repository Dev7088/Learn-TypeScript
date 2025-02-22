"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function that take arguments is object
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "dev", isPaid: true });
// createUser({ name: "don", isPaid: true, email: "don@g.com" });  // notic it get error but if see below code it not give error
var newUser = { name: "don", isPaid: true, email: "don@g.com" };
createUser(newUser); // it not give error here even its bad code or behavior of js
// function that return object
function course() {
    return { name: "Dev", isPaid: false };
}
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
function createNewUser(u) {
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
var myUser1 = {
    _id: "EMP_118",
    name: "Dev",
    email: "d@d.com",
    isActive: true,
    password: "Hello there",
    activitys: [1, 2],
};
myUser1.email = "dev@dev.com";
myUser1.activitys.push(5);
myUser1.activitys[0] = 3;
console.log(myUser1);

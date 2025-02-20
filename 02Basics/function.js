"use strict";
// function addTwo(num) {
//   num.toUpperCase();
//   return num + 2;
// }
Object.defineProperty(exports, "__esModule", { value: true });
// addTwo(5); this is allow but it can not be in our case so we can do this
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase;
}
addTwo(5);
getUpper("dev");
function signUpUser(name, email, isPaid) { }
signUpUser("dev", "d2@g", false);
// how to pass default value in function
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("d", "d@d");

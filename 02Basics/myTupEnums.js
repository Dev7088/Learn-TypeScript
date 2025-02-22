"use strict";
// tuple
// it is used to give data in very specific mananer
// usaly very used in api because in api data they are in specific mananer
// tuple array or tuple have the exact number of argument or data not more or less.
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = ["Dev", 7088, true];
// user = [7088, "dev", true]; this is not allowed
var rgb = [255, 221, 123];
var newUser = [88, "Dev"];
// bad of tuples are you can change the value of the tuple by accesing the index of the arry then it can be chnage
// but it depend on the ts version i think in the new version this will not allowed.
// newUser[1] = 33; this gives error because ts version is new
newUser.push("Jay");
newUser.push(82);
console.log(newUser);

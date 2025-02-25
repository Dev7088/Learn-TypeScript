"use strict";
// class User {
//   public name: string; // the default modifier is public so no need to mention as public
//   readonly email: string;
//   private city: string = ""; // you can also define private by using like this #city: string; this is also make private it used in JS
//   constructor(name: string, email: string) {
//     this.name = name;
//     this.email = email;
//     this.city = "kalol";
//   }
// }
// this same as above it's professional
class User {
    constructor(name, email, userId) {
        this.name = name;
        this.email = email;
        this.userId = userId;
        this._courseCount = 1;
        this.city = "Kalol";
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple ${this.email}`;
    }
    get getCourseCount() {
        return this._courseCount;
    }
    set courseCount(courseNumber) {
        // seter method do not have any return type
        if (courseNumber <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNumber;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const dev = new User("dev", "d@d.com", 25); // no need to mention variable because it constructor
// dev.city = "Kalol";  // this gives error because you are try to access outsite of the class

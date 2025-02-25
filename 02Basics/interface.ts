// interface is like a class where you can define variable(properties) and mathod without it's body
// Every thing define in interface you have to provide this when you use or extend this like if you define variabel and method then you have to provide that with define type in interface.
// The optiocal('?') variable and method  that you define in inteface that is not compulsory to use in where you extends or type you provide
// Example : the operating system is like inteface for hardware it doesn't allow you that what happen when you click button(key) how does it happen you don't know and you don't care about it. you know that is working😂
interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string; // this declares method
  startTrial(): string; // this is good and easy to understand that is method it same as above mention method
  getCoupon(couponname: string, value: number): number;
}

// reopening interface (you can use other define interface with extra option you can add)
// you can use other define interface(this can be writen by some else or get improted) and add some more properties or methods
interface User {
  githubToken: string;
}

// extends can use other define interface property and method to another interface
interface Admin extends User {
  role: "admin" | "ta" | "learner";
}

const dev: User = {
  dbId: 25,
  githubToken: "Token here",
  email: "d@d.com",
  userId: 7088,
  startTrial: () => {
    return "Hello there, Now you are the part of the trials";
  },
  getCoupon: (name: "dev10", off: 10) => {
    return 10;
  },
};

const adminDev: Admin = {
  role: "admin",
  dbId: 25,
  githubToken: "Token here",
  email: "d@d.com",
  userId: 7088,
  startTrial: () => {
    return "Hello there, Now you are the part of the trials";
  },
  getCoupon: (name: "dev10", off: 10) => {
    return 10;
  },
};

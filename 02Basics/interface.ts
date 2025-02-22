// interface is like a class where you can define variable(properties) and mathod without it's body
// Every thing define in interface you have to provide this when you use or extend this like if you define variabel and method then you have to provide that with define type in interface.
// The optiocal('?') variable and method  that you define in inteface that is not compulsory to use in where you extends or type you provide

interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string; // this declares method
  startTrial(): string; // this is good and easy to understand that is method it same as above mention method
  getCoupon(couponname: string, value: number): number;
}

const dev: User = {
  dbId: 25,
  email: "d@d.com",
  userId: 7088,
  startTrial: () => {
    return "Hello there, Now you are the part of the trials";
  },
  getCoupon: (name: "dev10", off: 10) => {
    return 10;
  },
};

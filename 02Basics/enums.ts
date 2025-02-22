//enums are used to restrict the choice like if there is 3 choice in enums than you can get only one of them
// enum SeatChoice {
//   AISLE = 19,  // default it sart with 0 then it get increment by ohter
//   MIDDLE = 50,
//   WINDOW,
// }

// enum SeatChoice {
//   AISLE = "aisle",
//   MIDDLE = "middle",
//   WINDOW = "window",
// }

// without const or let or var keyword TS produce more code (it's eife code) but with keyword it produce less so use keyword for best practice

const enum SeatChoice {
  AISLE = "aisle",
  MIDDLE = 7,
  WINDOW,
}

const seat = SeatChoice.WINDOW;

export {};

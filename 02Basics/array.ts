// const superHeros =  []
// superHeros.push("Iron man") // it give error becaus its type is never

const superHeros: string[] = [];
superHeros.push("Iron man");

// Another way to define array
const superPower: Array<number> = [];
superPower.push(5);

// create different type of arrays
type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = [];
allUsers.push({ name: "Dev", isActive: true });
console.log(allUsers);

const MLModels: number[][] = [[255, 255, 255], []];

export {};

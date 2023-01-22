import { MyDemo } from "./A";

console.log({ MyDemo });

function addElement<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

const array = addElement([1, "2"]);

// console.log(array.push({}));

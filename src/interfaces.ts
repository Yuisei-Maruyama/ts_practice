// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number
}

const add: AddFn = (n1: number, n2: number) => {
  return n1 + n2
}

interface Named {
  readonly name?: string
}

interface Greetable extends Named {
  // Namedの継承
  greet(phase: string): void
}

class Person implements Greetable {
  name?: string
  age = '30'
  constructor(n?: string) {
    if (n) {
      this.name = n
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + ' ' + this.name)
    } else {
      console.log('Hi')
    }
  }
}

// user1 = {
//   name: 'Max',
//   age: '20',
//   greet(phase: string) {
//     console.log(phase + ' ' + this.name);
//   }
// }

const user1: Greetable = new Person()
console.log(user1)

user1.greet('hello I am');





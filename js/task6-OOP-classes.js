function sayHello(greeting) {
  console.log(`${greeting}, ${this.name}!`);
}

const user = {
  name: 'Alice',
};

const greet = sayHello.bind(user);

greet('Hello');

interface Dog{
  name: string;
  age: number;
  favoritePark?: string;
}

type DogReadOnly = {
  readonly [K in keyof Dog]-?: Dog[K];
}

class MyDog implements Dog {
  age;
  name;

  constructor(name, age){
    this.name = name;
    this.age = age;
  }
}

const dog = new MyDog('Apollo', 14);

interface Person {
  name: string;
  age: number;
  nationality: string;
}

interface Brazilian extends Omit<Person, 'nationality'>{

}

//const brazilian: Brazilian ={
//}

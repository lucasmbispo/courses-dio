// Generic Types

function addAppendix<t>(array: any[], value: t){
  return array.map(() => value);

}

addAppendix(['A', 'B', 'C'], 1)

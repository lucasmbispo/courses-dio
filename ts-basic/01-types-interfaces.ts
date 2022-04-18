//types
//interfaces

interface IAnimal {
  name: string;
  type: 'land' | 'aquatic';
  domestic: boolean;

}
interface IFeline extends IAnimal{
  nightVision: boolean;
}

interface ICanine extends IAnimal{
  size: 'small' | 'medium' | 'big';
}

type IDomestic = IFeline | ICanine;

const animal: IDomestic = {
  domestic: true,
  name: 'Dog',
  size: 'medium',
  type: 'land',
}

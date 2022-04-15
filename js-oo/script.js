class ContaBancaria{

  constructor(agencia, numero, tipo){
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = 0;
  }

  get saldo(){
    return this._saldo;
  }

  set saldo(value){
    this._saldo = value;
  }

  sacar(value){
    if(value > this._saldo){
      return "Operation Denied.";
    }
    this._saldo = this._saldo - value;

    return this._saldo;
  }

  depositar(value){
    this._saldo = this._saldo + value;

    return this._saldo;

  }

}

class ContaCorrente extends ContaBancaria{

  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero);
    this.tipo='corrente';
    this.cartaoCredito = cartaoCredito;
  }

  get cartaoCredito(){
    return this._cartaoCredito;
  }

  set cartaoCredito(value){
    this._cartaoCredito = value;
  }
}

class ContaPoupanca extends ContaBancaria{

  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo='poupanca';
  }


}

class ContaUniversitaria extends ContaBancaria{

  constructor(agencia, numero) {
    super(agencia, numero);
    this.tipo='universitaria';
  }

  sacar(value) {
    if(value > 500)
    
    return "Operação negada!";
  }


}

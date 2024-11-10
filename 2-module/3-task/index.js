let calculator = {
  sum(){
    return this.a + this.b
  },
  mul(){
    return this.a * this.b
  },
  read(num1, num2){
    this.a = +num1;
    this.b = +num2;
  }
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально

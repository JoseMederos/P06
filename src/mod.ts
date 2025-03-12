export interface Arithmeticable<T> {
  add(op1: T, op2: T): T;
  substract(op1: T, op2: T): T;
  multiply(op1: T, op2: T): T;
  divide(op1: T, op2: T): T;
}

export class ArithmeticableCollection<T> implements Arithmeticable<T> {
  constructor(private items: T[]) {
  }
  
}
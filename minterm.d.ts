export default class Minterm {

  values: number[];
  value: number;
  used: boolean;

  constructor(values: number[], value: number)

  toString(): string

  equals(minterm: Minterm): boolean

  getValues(): number[]
  getValue(): number
  isUsed(): boolean
  use(): void

  combine(minterm: Minterm): undefined | Minterm

}
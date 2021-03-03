import Minterm from "./minterm"

/**
 * A class to handle processing the Quine-McCluskey Algorithm.
 *
 */
export default class QuineMcCluskey {
  variables: number[]
  values: number[]

  /**
   * Creates a new QuineMcCluskey object to process the Quine-Mccluskey Algorithm
   * @class
   * @param variables
   * @param values
   */
  constructor(variables: number[], values: number[])

  /**
   * Gets the binary value equivalent of a given decimal value
   * @param value - The decimal value to convert
   * @returns - The binary value equivalent
   */
  getBits(value: number): string

  /**
   * Creates the initial grouping for the bits from the values
   * given to the Quine-McCluskey Algorithm
   * @returns - The initial grouping.
   */
  initialGroup(): Minterm[][]

  /**
     * Creates a power set of all valid prime implicants that covers the rest of an expression.
     * This is used after the essential prime implicants have been found.
     * @param {number} values
     * @param {Minterm[]} primeImplicants
     * @returns {Minterm[]} - The power set
     */
  powerSet(value: number, primeImplicants: Minterm[]): Minterm[]

  /**
   * Returns an array of all the prime implicants for an expression
   * @param {(Minterm[][]|null)} [groups=null] - TODO
   * @returns {Minterm[]} - The prime implicant array.
   */
  getPrimeImplicants(groups: Minterm[][]): Minterm[]

  /**
   * Solves for the expression returning the minimal amount of prime implicants needed
   * to cover the expression.
   * @returns {Minterm[]} - The prime implicants.
   */
  solve(): Minterm[]

  /**
   * Returns the expression in a readable form
   * @returns {string} - The formatted expression.
   */
  getFunction(): string
}
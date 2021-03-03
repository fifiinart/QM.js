/**
 * Converts a value from decimal to binary
 *
 * @param value The value to convert to binary
 * @returns The binary representation
 */
declare function decToBin(value: number): string

/**
 * Returns whether or not a value is in an array
 *
 * @param value The value to look for in an array
 * @param array The array to look for a value in
 *
 */
declare function valueIn<T>(value: T, array: T[]): boolean
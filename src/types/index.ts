/**
 * Generic type to create a type that can be null or undefined.
 * 
 * @param T The type.
 * 
 * @example
 * type MaybeString = Maybe<string>; // string | null | undefined
 * 
 */
export type Maybe<T> = T | null | undefined;

/**
 * Generic type to create a type that can be nullified.
 * 
 * @param T The type.
 * 
 * @example
 * type NullableString = Nullable<string>; // string | null
 * 
 */
export type Nullable<T> = T | null;

/**
 * Used to override default function signatures
 * 
 * @param BaseFunction - The function to override
 * @param T - Custom arguments
 * 
 * @example
 * const calculateAreaOfSquare: (a: number) => number = (a: number) => a * a;
 * const calculateAreaofRectangle: DerivedFunction<typeof calculateAreaOfSquare, [number]> = (a: number, b: number) => a * b;
 * typeof calculateAreaofRectangle // (a: number, b: number) => number
 * 
 * */
export type DerivedFunction<
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  BaseFunction extends (...args: any[]) => unknown,
  T extends unknown[] = unknown[]
> = BaseFunction extends (...a: infer U) => infer R
  ? (...a: [...U, ...T]) => R
  : never;

/**
 * Converts string or template literals to UPPER_SNAKE_CASE
 * 
 * @param S - String or template literal
 * @param D - Delimiter
 * 
 * @example
 * type NewType = UpperSnakecase<'hello world'>; // HELLO_WORLD
 * type NewType = UpperSnakecase<'hello:world' | 'test:arg', ':'>; // HELLO_WORLD | TEST_ARG
 * 
 */
export type UpperSnakecase<
  S extends string,
  D extends string = ''
> = S extends `${infer FirstWord}${D}${infer Rest}`
  ? D extends ''
    ? Uppercase<S>
    : `${Uppercase<FirstWord>}_${Uppercase<Rest>}`
  : never;

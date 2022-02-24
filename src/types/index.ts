export type Maybe<T> = T | null | undefined;
export type Nullable<T> = T | null;

/**
 * Used to override default function signatures
 *
 * @example:
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

// Generic type for generator function that returns void
export type VoidGenerator<T = unknown, TNext = unknown> = Generator<
  T,
  void,
  TNext
>;

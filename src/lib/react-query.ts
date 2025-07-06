import {
  QueryClient,
  type UseMutationOptions,
  type UseMutationResult,
  type UseQueryOptions,
  type UseQueryResult,
} from '@tanstack/react-query';

export type QueryHandler<TData, TParams = void> = [TParams] extends [void]
  ? (
      options?: Omit<UseQueryOptions<TData, Error>, 'queryKey' | 'queryFn'>
    ) => UseQueryResult<TData, Error>
  : (
      params: TParams,
      options?: Omit<UseQueryOptions<TData, Error>, 'queryKey' | 'queryFn'>
    ) => UseQueryResult<TData, Error>;

export type MutationHandler<TData, TVariables> = (
  options?: Omit<
    UseMutationOptions<TData, Error, TVariables, unknown>,
    'mutationFn' | 'mutationKey'
  >
) => UseMutationResult<TData, Error, TVariables>;

export const queryClient = new QueryClient();

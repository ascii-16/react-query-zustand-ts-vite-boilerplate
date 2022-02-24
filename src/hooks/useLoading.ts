import { useAppSelector } from './useRedux';

const useLoading = (action: string): boolean => {
  const loadingState = useAppSelector((state) => state.loader.loadingActions);

  return loadingState.includes(action);
};

export default useLoading;

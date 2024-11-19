export type NetworkStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected';

export type APIResponse<TData> = {
  page: number;
  total_pages: number;
  total_results: number;
  results: TData;
};

export type BaseState<TData> = {
  status: NetworkStatus;
  data: TData;
  error: string | null;
};

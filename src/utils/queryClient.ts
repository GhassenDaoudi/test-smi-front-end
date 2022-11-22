import {QueryClient} from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {queries: {retryOnMount: false, refetchOnMount: false}},
});
export default queryClient;

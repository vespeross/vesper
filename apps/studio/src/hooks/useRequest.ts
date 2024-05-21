import useSWR from 'swr';
import axios from 'axios';
const fetcher = (slug: string) => axios.get(`${import.meta.env.VITE_API_BASE_URL}/api/v1${slug}`).then((res) => res.data);
export const useRequest = <T>(slug: string) => {
    const { data, error, isLoading } = useSWR<T>(slug, fetcher);
    return {
        data,
        error,
        isLoading,
    };
};
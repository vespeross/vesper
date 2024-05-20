const useURL = (slug: string) => {
    const BASE_URL = import.meta.env.VITE_BACKEND_URL;
    return `${BASE_URL}/${slug}`;
}
export default useURL;
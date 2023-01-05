import { useQuery } from "react-query";
import { API } from "../services/api";

async function getFetch(ctx) {
    const [, path] = ctx.queryKey;
    const { data } = await API.get(path);
    return data;
}

export default function useProductsQuery(path) {
    return useQuery(['animeSession', path], getFetch, { cacheTime: 0 });
}
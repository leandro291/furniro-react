import { cachedGet } from './api-client';
import { normalizeProduct } from './normalize-product';

const API_SOURCE = import.meta.env.VITE_API_SOURCE ?? "fakestore"

export const GetProducts = async ({ page = 1, limit } = {}) => {

    if (API_SOURCE === "furniro") {
        // page_size: best-effort, se ignora si el backend no soporta override (GAP conocido)
        const data = await cachedGet('/api/catalog/products/', { page, page_size: limit })

        return {
            count: data.count,
            next: data.next,
            previous: data.previous,
            results: data.results.map(normalizeProduct),
        }
    }

    const data = await cachedGet('/products', { limit })

    return {
        count: data.length,
        next: null,
        previous: null,
        results: data.map(normalizeProduct),
    }
}

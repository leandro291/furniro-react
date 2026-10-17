import axios from "axios"

const API_SOURCE = import.meta.env.VITE_API_SOURCE ?? "fakestore"

const BASE_URLS = {
    fakestore: import.meta.env.VITE_FAKESTORE_BASE_URL,
    furniro: import.meta.env.VITE_FURNIRO_BASE_URL,
}

// Render free tier duerme la instancia tras inactividad: el primer request en frío
// puede tardar 30-50s en responder, por eso Furniro necesita un timeout más alto.
const TIMEOUTS = {
    fakestore: 10000,
    furniro: 40000,
}

export const apiClient = axios.create({
    baseURL: BASE_URLS[API_SOURCE],
    timeout: TIMEOUTS[API_SOURCE],
})

// Caché GET en memoria con TTL corto: evita re-pedir el mismo catálogo al navegar
// entre home/shop/detalle y deduplica requests concurrentes (misma promesa).
// ponytail: sin invalidación manual, el stock puede tardar hasta TTL_MS en refrescarse.
const TTL_MS = 60000
const cache = new Map()

export const cachedGet = (url, params) => {
    const key = url + JSON.stringify(params ?? {})
    const hit = cache.get(key)
    if (hit && Date.now() - hit.at < TTL_MS) return hit.promise

    const promise = apiClient.get(url, { params }).then((res) => res.data)
    cache.set(key, { promise, at: Date.now() })
    promise.catch(() => cache.delete(key))
    return promise
}

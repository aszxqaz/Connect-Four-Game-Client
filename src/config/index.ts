const { PROD, VITE_API_URL_PROD, VITE_API_URL_DEV } = import.meta.env;

export const configs = {
    httpBaseUrl: PROD ? VITE_API_URL_PROD : VITE_API_URL_DEV,
    wsBaseUrl: PROD ? VITE_API_URL_PROD : VITE_API_URL_DEV
}
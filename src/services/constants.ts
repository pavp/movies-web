export const BASE_URL = 'https://api.themoviedb.org/3'
export const BASE_REQUEST_TOKEN_URL = 'https://www.themoviedb.org/authenticate/'
export const API_KEY = 'ccfad9722012a42c8c22e2cd2964d1fb'
export const API_GET_DETAIL = '/movie/'
export const API_REQUEST_TOKEN = '/authentication/token/new'
export const API_CREATE_SESSION = '/authentication/session/new'
export const API_WISHLIST_ITEM = (account_id?: number) => `/account/${account_id}/watchlist`
export const API_GET_WISHLIST_MOVIES = (account_id?: number) => `/account/${account_id}/watchlist/movies`

export const BASE_URL = process.env.REACT_APP_BASE_URL
export const BASE_REQUEST_TOKEN_URL = process.env.REACT_APP_BASE_REQUEST_TOKEN_URL
export const API_KEY = process.env.REACT_APP_API_KEY
export const API_GET_DETAIL = '/movie/'
export const API_REQUEST_TOKEN = '/authentication/token/new'
export const API_CREATE_SESSION = '/authentication/session/new'
export const API_WISHLIST_ITEM = (account_id?: number) => `/account/${account_id}/watchlist`
export const API_GET_WISHLIST_MOVIES = (account_id?: number) => `/account/${account_id}/watchlist/movies`

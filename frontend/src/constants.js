/* eslint-disable no-undef */
export const BASE_URL =
  process.env.NODE_ENV === "development" ? "http://localhost:500" : "";

export const PRODUCTS_URL = "api/products";
export const URERS_URL = "api/users";
export const ORDERS_URL = "api/orders";
export const PAYPAL_URL = "api/config/paypal";

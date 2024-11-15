
export const passWalidation = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

export const FIRESTORE_PATH_NAMES = {
    REGISTRED_USERS: "registeredUsers",
    PRODUCTS: "products"
}

export const ROUTE_CONSTANTS = {
    LOGIN: "/login",
    REGISTER: "/register",
    CABINET: "/cabinet",
    PROFILE:"/cabinet/profile",
    DASHBOARD: "/cabinet/dashboard",
    GENERAL: "/"

}
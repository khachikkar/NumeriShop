

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
    MYPRODUCTS: "/cabinet/myproducts",
    CART: "/cart",
    GENERAL: "/",

    PRODUCT_DETAILS: "/product/:productId",
    LOVED: "/loved",

    FILTEREDPAGE: "/:pageid"

}




export const PRODUCT_CATEGORY_OPTIONS={
MAN:{
    label: "man",
},
WOMAN:{
    label: "woman",
},
KID:{
    label: "kid",
}

}


export const IMAGE_CAROUSEL_OPTIONS={

    CONTENT_STYLE_ONE: {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundImage: 'url("https://i.pinimg.com/736x/c0/f3/1e/c0f31e6f21cede626308eef00d63705d.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    CONTENT_STYLE_TWO: {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundImage: 'url("https://i.pinimg.com/736x/a5/5b/0a/a55b0a701228a2b147b8a76137a739c7.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    CONTENT_STYLE_THREE: {
        height: '500px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        backgroundImage: 'url("https://i.pinimg.com/736x/31/34/10/3134104e03a72e813024dea9407f549c.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    }
}

export const CAROUSEL_BUTTON_OPTIONS = {
    MAN: {
        text: "Uncover Man Styles",
        buttonUrl: "/man"
    },
    WOMAN: {
        text: "Uncover Woman Styles",
        buttonUrl: "/woman"
    },
    KID: {
        text: "Uncover Kid Styles",
        buttonUrl: "/kid"
    }
}


export const CATEGORIES_IMAGES_OPTIONS={
    MAN: {
        text: "Man",
        imageUrl: "https://i.pinimg.com/736x/d5/7f/98/d57f98c76745edc62467f28f578d539b.jpg"
    },
    WOMAN: {
        text: "Woman",
        imageUrl: "https://i.pinimg.com/736x/b5/3d/00/b53d00bc1eaf036569e448368e19baa3.jpg"
    },
    KID: {
        text: "Kid",
        imageUrl: "https://i.pinimg.com/736x/03/ca/57/03ca57be52ed19a16c949082f2804989.jpg"
    }
}
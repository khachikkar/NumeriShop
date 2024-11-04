import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {onAuthStateChanged} from "firebase/auth";

import {auth, db} from "../../../services/firebase";
import {doc, getDoc} from "firebase/firestore";
import {FIRESTORE_PATH_NAMES} from "../../../core/constants/constants";

const initialState = {
    loading: true,
    authUserProfile: {
        userData: {},
        isAuth: false
    },
    error:null
}

export const fetchUserProfileInfo = createAsyncThunk("data/fetchUserProfileInfo", async()=>{
    return new Promise((resolve, reject)=>{
        onAuthStateChanged(auth, (user)=>{
            if(user){
                const {uid} = user
                const userRef = doc(db, FIRESTORE_PATH_NAMES.REGISTRED_USERS, uid)
                getDoc(userRef)
                    .then((userData)=>{
                        if(userData.exists()){
                            resolve(userData.data())
                        }else{
                            resolve(null)
                        }
                    })
            }else{
                reject("OOPS")
            }
        })
    })
})







const userProfileSlice = createSlice({
    name: "userProfile",
    initialState,
    reducers:{
        setIsAuth: (state, action)=>{
            state.authUserProfile.isAuth = action.payload
        }
    },
    extraReducers:(promise)=>{
        promise
            .addCase(fetchUserProfileInfo.pending, (state)=>{

            })
            .addCase(fetchUserProfileInfo.fulfilled, (state, action)=>{
                state.loading = false
                state.authUserProfile.userData = action.payload
                state.authUserProfile.isAuth = true
            })
            .addCase(fetchUserProfileInfo.rejected, (state, action)=>{
                state.loading = false
                state.error = action.payload
                state.authUserProfile.userData = {}
                state.authUserProfile.isAuth = false
            })
    }
})






// petqa export anenq reducer functionnery mer userProfileSlice.actions ic
// isk Reducer  funckcian userProfileSlice.reducer -ic

export const {setIsAuth} = userProfileSlice.actions
export default userProfileSlice.reducer
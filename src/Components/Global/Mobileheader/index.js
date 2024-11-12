import React, {useState} from "react"
import "./index.css"
import { HomeOutlined,  UserOutlined,   HeartOutlined } from '@ant-design/icons';
import {useSelector} from "react-redux";
import AuthProfileDropDown from "../../shared/AuthProfileDropDown";
import {ROUTE_CONSTANTS} from "../../../core/constants/constants";
import {useNavigate} from "react-router-dom";
import {IoBagHandleOutline} from "react-icons/io5";
// import AuthProfileDropDown from "../../shared/AuthProfileDropDown";
// import {useSelector} from "react-redux";

const MobileHeader = () => {

    const [activeId, setActive] = useState("")

    const handleSetActive = (id) => {
   setActive(id)
    }


    const {authUserProfile: {isAuth, userData}} = useSelector(store=>store.userProfile)
    const navigate = useNavigate()


    return (
        <div className="mobile-header">
            <div
                id="home"
                onClick={() => {
                    handleSetActive('home')
                    navigate(ROUTE_CONSTANTS.GENERAL)
                }}
                className={activeId === 'home' ? 'active' : ''}
            >
                <HomeOutlined style={{ fontSize: '24px' }} />
                Home
            </div>

            <div
                id="saved"
                onClick={() => {
                    handleSetActive('saved')
                    // navigate(ROUTE_CONSTANTS.PROFILE)
                }}

                className={activeId === 'saved' ? 'active' : ''}
            >
                <HeartOutlined style={{ fontSize: '24px' }} />
                Saved
            </div>

            <div
                id="cart"
                onClick={() => handleSetActive('cart')}
                className={activeId === 'cart' ? 'active' : ''}
            >
                <div className="icon-container">
                    <IoBagHandleOutline size={24}/>
                    {2 > 0 && <span className="badge">2</span>}
                </div>
                Cart
            </div>

            <div
                id="profile"
                onClick={() => handleSetActive('profile')}
                className={activeId === 'profile' ? 'active' : ''}

            >

                {
                    isAuth  ?    <AuthProfileDropDown userProfileInfo={userData} />
                        :  <UserOutlined style={{ fontSize: '24px' }} />
                }



                {/*<AuthProfileDropDown userProfileInfo={userData} />*/}
            </div>
        </div>
    );

}


export default MobileHeader
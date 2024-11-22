import React, {useState} from "react"
import "./index.css"
import { HomeOutlined,  UserOutlined,   HeartOutlined } from '@ant-design/icons';
import {useSelector} from "react-redux";
import AuthProfileDropDown from "../../shared/AuthProfileDropDown";
import {ROUTE_CONSTANTS} from "../../../core/constants/constants";
import {Link, useNavigate} from "react-router-dom";
import {IoBagHandleOutline} from "react-icons/io5";
import {Badge} from "antd";
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
                    navigate(ROUTE_CONSTANTS.LOVED)
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
                    <Link to={ROUTE_CONSTANTS.CART}>
                        <Badge count={3}>
                            <IoBagHandleOutline size={24}/>
                        </Badge>
                    </Link>

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
                        :  <UserOutlined onClick={()=>navigate(ROUTE_CONSTANTS.LOGIN)} style={{ fontSize: '24px' }} />
                }



                {/*<AuthProfileDropDown userProfileInfo={userData} />*/}
            </div>
        </div>
    );

}


export default MobileHeader
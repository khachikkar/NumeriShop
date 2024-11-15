import React, { useState } from 'react';
import {Modal, Form, notification} from "antd"
import ModalForm from "../Form";
import generateUid from "../../../core/helpers/generateUid";


import {doc, setDoc} from "firebase/firestore";
import {db} from "../../../services/firebase";
import {FIRESTORE_PATH_NAMES} from "../../../core/constants/constants";
import {useSelector} from "react-redux";


const AddProductModal = ({isOpen, setShowModal, onClose})=>{

    //added uid for product
const {authUserProfile: {userData}} = useSelector(store=>store.userProfile)


console.log(userData.uid)

const [loading, setLoading] = useState(false);

const handleClose = ()=>{
    onClose()
    form.resetFields()
}

const handleCreateProduct = async(values)=>{


    setLoading(true)
    const productId = generateUid()


    const ProductModel = {
        userId: userData.uid,
        productId,
        ...values
    }

    try{
//send backend

    const docRef = doc(db, FIRESTORE_PATH_NAMES.PRODUCTS, productId)
    await setDoc(docRef, ProductModel)
    form.resetFields()
    notification.success({
        message: 'Product created',
    })

    }catch(e){
        console.log(e)
        notification.error({
            message: e.message,
        })
    }finally {
        setLoading(false)
        setShowModal(false)
    }

}

const [form] = Form.useForm()

    return(
        <Modal
        title="Add Product"
        open={isOpen}
        width={600}
        centered
        okText="Add Product"
        confirmLoading={loading}
        onCancel={handleClose}
        onOk={form.submit}
        >
<ModalForm form={form}  onFinish={handleCreateProduct}  />
        </Modal>
    )
}

export default AddProductModal
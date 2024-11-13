import React, { useState } from 'react';
import {Modal, Form} from "antd"
import ModalForm from "../Form";


const AddProductModal = ({isOpen, setShowModal, onClose})=>{


const [loading, setLoading] = useState(false);

const handleClose = ()=>{
    onClose()
    form.resetFields()
}

const handleCreateProduct = (values)=>{
    setLoading(true)
    console.log(values)
    setLoading(false)
    setShowModal(false)
    form.resetFields()
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
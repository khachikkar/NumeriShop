import React, {useState} from 'react';
import "./index.css"
import {Button} from "antd";
import AddProductModal from "../ProductModal/Add";

const Dashboard = () => {

    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = ()=>{
        setShowModal(true);
    }
    const handleCloseModal = ()=>{
        setShowModal(false);
    }



    return (
        <div>
           <h2 style={{marginBottom:"20px"}}>User Dashboard</h2>
            <Button onClick={handleOpenModal} type="primary">Add Product</Button>
            <AddProductModal isOpen={showModal} setShowModal={setShowModal} onClose={handleCloseModal} />
        </div>
    )
}

export default Dashboard
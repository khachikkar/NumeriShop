import React from 'react';
import {Form, Input} from 'antd';


const ModalForm = ({form, onFinish}) => {
return (
<Form layout="vertical" form={form} onFinish={onFinish}>


    <Form.Item
        label="Product Name"
        name="productName"
        rules={[
                    {
                        required: true,
                        message: "Please enter an Product Name",
                    }
                ]}
            >
        <Input type="text" placeholder="Enter Product Name"/>
    </Form.Item>

    <Form.Item //todo change to a select
        label="Product Category"
        name="productCategory"
        rules={[
            {
                required: true,
                message: "Please enter an Product Category",
            }
        ]}
    >
        <Input type="text" placeholder="Enter Product Category"/>
    </Form.Item>

    <Form.Item
        label="Product Description"
        name="productDescription"
        rules={[
            {
                required: true,
                message: "Please enter an Product Description",
            }
        ]}
    >
        <Input type="text" placeholder="Enter Product Description"/>
    </Form.Item>

    <Form.Item
        label="Product Image URL"
        name="productImageUrl"
        rules={[
            {
                required: true,
                message: "Please enter an Product Image URL",
            }
        ]}
    >
        <Input type="text" placeholder="Enter Product Image URL"/>
    </Form.Item>

    <Form.Item
        label="Product Price"
        name="productPrice"
        rules={[
            {
                required: true,
                message: "Please enter an Product Price",
            }
        ]}
    >
        <Input type="number" placeholder="Enter Product Price"/>
    </Form.Item>

    <Form.Item
        label="Product Saled Price"
        name="productSaledPrice"

    >
        <Input type="number" placeholder="Enter Product Saled Price"/>
    </Form.Item>

    <Form.Item
        label="Product Rate"
        name="productRate"
        rules={[
            {
                required: true,
                message: "Please enter an Product Rate",
            }
        ]}
    >
        <Input type="number" placeholder="Enter Product Rate"/>
    </Form.Item>

    <Form.Item
        label="Product Sizes"
        name="productSizes"
        rules={[
            {
                required: true,
                message: "Please enter an Product Sizes",
            }
        ]}
    >
        <Input type="text" placeholder="Enter Product Sizes"/>
    </Form.Item>


</Form>
)
}

export default ModalForm






// const model = {
//     productname: "",
//     description: "",
//     productImageUrl: "",
//     price: 0,
//     saledprice: 0,
//     rate: 0,
//     sizes: ["S", "M", "L"]
// }
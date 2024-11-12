import React from 'react';
import { Card, Button, Typography, Rate,  Space } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Text } = Typography;







const ProductCard = ({ product }) => {
    return (
        <Card
            hoverable
            style={{ width: 300 }}
            cover={
                <img
                    alt={product.title}
                    src={product.image}
                    style={{ height: 200, objectFit: 'cover' }}
                />
            }
            actions={[

                <Button
                    type="primary"
                    icon={<ShoppingCartOutlined />}
                    style={{ backgroundColor: '#000', border: 'none' }}
                >
                    Add to Cart
                </Button>,
            ]}
        >
            <Meta
                title={<Text strong>{product.title}</Text>}
                description={
                    <Space direction="vertical" size="small">
                        <Text type="secondary">{product.description}</Text>
                        <Rate disabled defaultValue={product.rating} />
                        <Text strong style={{ fontSize: '1.2em' }}>${product.price}</Text>
                    </Space>
                }
            />
        </Card>
    );
};

export default ProductCard;

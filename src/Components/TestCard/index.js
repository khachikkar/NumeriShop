import React, { useState, useEffect } from 'react';
import { Card, Button, Typography, Rate, Space, Avatar } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";
import { FIRESTORE_PATH_NAMES } from "../../core/constants/constants";

const { Meta } = Card;
const { Text } = Typography;

const ProductCard = ({ product }) => {
    const {
        // productCategory, toadd
        productDescription,
        productImageUrl,
        productName,
        productPrice,
        productRate,
        // productSaledPrice,
        // productSizes,
        userId
    } = product;

    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const userDoc = doc(db, FIRESTORE_PATH_NAMES.REGISTRED_USERS, userId);
                const userSnapshot = await getDoc(userDoc);
                if (userSnapshot.exists()) {
                    setUser(userSnapshot.data());
                } else {
                    console.warn("User not found for userId:", userId);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]);

    return (
        <Card
            hoverable
            style={{ width: 300 }}
            cover={
                <img
                    alt={productName}
                    src={productImageUrl}
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
                title={<Text strong>{productName}</Text>}
                description={
                    <Space direction="vertical" size="small">
                        <Text type="secondary">{productDescription}</Text>
                        <Rate disabled defaultValue={productRate} />
                        <Text strong style={{ fontSize: '1.2em' }}>${productPrice}</Text>
                        {user && (
                            <div>
                                <Avatar src={user.image || null} />
                                <Text>{user.name} {user.lastname}</Text>
                            </div>
                        )}
                    </Space>
                }
            />
        </Card>
    );
};

export default ProductCard;

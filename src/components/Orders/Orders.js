import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeOrder, addProduct, removeProduct} from "../../features/orders/orderSlice";
import {
    MainWrapper,
    MainTitle,
    OrderWrapper,
    Product,
    Item,
    ItemImage,
    Count,
    Busket,
    OrderTitle,
    ProductAmount,
    CountSubTitle,
    Guarantees,
    DetailedProduct,
    Button
} from "./Orders.style";
import {ReactComponent as BurgerIcon} from "../../images/burger.svg";
import {ReactComponent as BasketIcon} from "../../images/basket.svg";
import Modal from "../Modal/Modal";

const Orders = () => {
    const orders = useSelector((state) => state.orders.value);
    const dispatch = useDispatch();
    const [selectedOrder, setSelectedOrder] = useState({});
    const [productIdToDelete, setProductIdToDelete] = useState();
    const isProductsExist = selectedOrder.products && selectedOrder.products.length;

    return (
        <>
            <MainTitle>
                orders / {orders.length}
            </MainTitle>
            {productIdToDelete &&
                <Modal>
                    <div>
                        {selectedOrder.products[productIdToDelete].title}
                        <div style={{display: "flex", width: '150px', height: 150}}>
                            <Button onClick={() => {
                                dispatch(removeProduct({productIdToDelete, orderId: selectedOrder.id}))
                                setProductIdToDelete(0)
                            }}>delete</Button>
                            <Button>Cansel</Button>
                        </div>
                    </div>
                 </Modal>}
            <MainWrapper>
                <div
                    style={isProductsExist ? {width: '50%'} : {width: '80%'}}
                >
                    {orders.map(el => {
                        return (
                            <OrderWrapper key={el.id} onClick={() => setSelectedOrder(el)}>
                                {!isProductsExist && <OrderTitle>{el.title}</OrderTitle>}
                                <Product>{el.products.map(item => {
                                    return (
                                        <Item key={item.id}>
                                            <ProductAmount>
                                                <ItemImage>
                                                    <BurgerIcon/>
                                                </ItemImage>
                                                <Count>
                                                    {el.products.length}
                                                    <CountSubTitle>
                                                        products
                                                    </CountSubTitle>
                                                </Count>
                                            </ProductAmount>
                                            <Guarantees>
                                                <div>
                                                    {item.guarantee.start.split(' ')[0].slice(5).replace(/-/g, '/')}
                                                </div>
                                                <div>
                                                    {item.guarantee.end.split(' ')[0]
                                                        .replace(/-/g, '/')
                                                        .split('/')
                                                        .reverse().join('/')}
                                                </div>
                                            </Guarantees>
                                            <div>
                                                {item.price.map(val => {
                                                    return (
                                                        <div>
                                                            {val.value}
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <Busket onClick={e => {
                                                e.preventDefault()
                                                e.stopPropagation();
                                                dispatch(removeOrder(el.id))

                                            }}
                                            >
                                                <BasketIcon/>
                                            </Busket>
                                        </Item>
                                    )
                                })[0]}
                                </Product>
                            </OrderWrapper>
                        )
                    })}
                </div>
                <div>
                    {isProductsExist
                        ? <div>
                            <button onClick={() => dispatch(addProduct(selectedOrder.id))}>add</button>
                            {selectedOrder.products.map((item,i) => {
                                return (
                                    <>
                                        <button onClick={() => setSelectedOrder({})}>X</button>
                                        <button onClick={() => {
                                            setProductIdToDelete(i)
                                        }}>delete product</button>
                                        <DetailedProduct>
                                            <div>{item.title}</div>
                                            <div style={{display: 'flex'}}>
                                                <img src={item.photo} alt=""/>
                                                <div>{item.type}</div>
                                            </div>
                                        </DetailedProduct>
                                    </>
                                )
                            })}
                        </div>
                        : ""}
                </div>
            </MainWrapper>
        </>

    );
};

export default Orders;
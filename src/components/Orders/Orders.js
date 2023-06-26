import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeOrder} from "../../features/orders/orderSlice";
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
    DetailedProduct
} from "./Orders.style";
import {ReactComponent as BurgerIcon} from "../../images/burger.svg";
import {ReactComponent as BasketIcon} from "../../images/basket.svg";

const Orders = () => {
    const orders = useSelector((state) => state.orders.value);
    const dispatch = useDispatch();
    const [selectedProducts, setSelectedProducts] = useState([]);
    return (
        <>
            <MainTitle>
                orders / {orders.length}
            </MainTitle>
            <MainWrapper>
                <div
                    style={selectedProducts.length ? {width: '50%'} : {width: '80%'}}
                >
                    {orders.map(el => {
                        return (
                            <OrderWrapper key={el.id} onClick={() => setSelectedProducts(el.products)}>
                                {!selectedProducts.length && <OrderTitle>{el.title}</OrderTitle>}
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
                    {selectedProducts.length
                        ? <div>
                            {selectedProducts.map(item => {
                                return (
                                    <>
                                        <DetailedProduct>
                                            <div>{item.title}</div>
                                            <div style={{display: 'flex'}}>
                                                <img src={item.photo} alt=""/>
                                                <div>{item.type}</div>
                                            </div>
                                            <button onClick={() => setSelectedProducts([])}>X</button>
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
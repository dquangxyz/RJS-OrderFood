import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import classes from './Cart.module.css'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
    const cartCtx = useContext(CartContext)
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0

    const removeItemHandler = (id)=>{cartCtx.removeItem(id)}
    const addItemHandler = (item) => {cartCtx.addItem({...item, amount: 1})}

    // const cartItems = [{id: 'c1', name: 'Sushi', amount: 2, price: 12.99}]
    return (
        <Modal onHideCart={props.onHideCart}>
            <ul className={classes['cart-items']}>
                {cartCtx.items.map(item => 
                    <CartItem 
                        key={item.id} 
                        name={item.name} 
                        amount={item.amount} 
                        price={item.price}
                        onRemove={removeItemHandler.bind(null,item.id)}
                        onAdd={addItemHandler.bind(null, item)}
                    />
                )}
            </ul>
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasItems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
// Cart.js
import React from 'react';
import './Cart.css'; // Import CSS file

const Cart = ({ cart, removeFromCart, updateQuantity }) => {
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleQuantityChange = (index, newQuantity) => {
    updateQuantity(index, newQuantity);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart && cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <div>
            <p>{item.name}</p>
            <p>Price: {item.price}</p>
            <div>
              <button onClick={() => removeFromCart(index)}>-</button>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="total-price">
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;

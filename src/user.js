import React, { Component } from "react";

class UserContainer extends Component {
  state = {
    cart: [],
  };

  handleAddToBasket = item => {
    this.setState(state => {
      return {
        cart: [...state.cart, item],
      };
    });
  }

  handleBuy = () => {
    this.setState({cart: []});
  };  

  render() {
    return (
      <div>
        <h1>User</h1>
        <div>
        {
          this.props.list.map((item) => {
            return (
              <div>
                <p>{item.productName},&nbsp;
                ${item.price},&nbsp;
                {item.description}&nbsp;
                <button onClick={() => this.handleAddToBasket(item)}>Add</button></p>
              </div>
            )
          })
        } 
        </div>
        <div>
        <h5>Cart:</h5>
        {
           this.state.cart.map((cartItem) => {
            return (
              <div>
              <p>{cartItem.productName},&nbsp;
                ${cartItem.price},&nbsp;
                {cartItem.description}&nbsp;</p>
              </div>
            )
          })
        }
        Your total is: ${this.state.cart.reduce(( previousValue, currentValue ) => { 
          return previousValue += parseInt(currentValue.price) }, 0)}&nbsp; 
        <button onClick={() => this.handleBuy()}>Buy</button>
        </div>
      </div>
    );
  }
}

export default UserContainer;
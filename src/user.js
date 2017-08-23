import React, { Component } from "react";

class UserContainer extends Component {
  state = {
    cart: [],
    total: 0,
  };

  handleAddToBasket = item => {
    this.setState(state => {
      return {
        cart: [...state.cart, item],
        total: state.total+item.price,
      };
    });
  }

  handleBuy = (e) => {
    e.preventDefault();
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
                {item.description}</p>
              </div>
            )
          })
        } 
        </div>
        <div>
        <br />
        <button>Buy</button>
        </div>
      </div>
    );
  }
}

export default UserContainer;
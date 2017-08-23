import React, { Component } from "react";

const EMPTY_PRODUCT = {
  productName: "",
  description: "",
  price: 0,
};

class AdminContainer extends Component {
  state = EMPTY_PRODUCT;
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleAddItem = (e) => {
    e.preventDefault();

    this.props.onAddItem(this.state);
    this.setState(EMPTY_PRODUCT);
  };
  render() {
    return (
      <div>
        <h1>Admin</h1>
        <div>
          <form onSubmit={this.handleAddItem}>
            <input
              name="productName"
              value={this.state.productName}
              onChange={this.handleChange}
              required
            />
            <br />
            $
            <input
              type="number"
              placeholder="1.00"
              step="0.01"
              min="0"
              required
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
            />
            <br />
            <textarea
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
            <br />
            <button>Add</button>
          </form>
        </div>
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
      </div>
    );
  }
}

export default AdminContainer;
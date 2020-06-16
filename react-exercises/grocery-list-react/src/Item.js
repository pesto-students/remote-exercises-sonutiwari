import React from "react";

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false,
    };
  }
  handleClick() {
    this.setState({
      isSelected: !this.state.isSelected,
    });
  }
  render() {
    console.log(this.state.isSelected);
    return (
      <li
        style={this.state.isSelected ? redTextStyle : blackTextStyle}
        onClick={this.handleClick.bind(this)}
      >
        {this.props.value}
      </li>
    );
  }
}

const redTextStyle = {
  color: "#FF0000",
};

const blackTextStyle = {
  color: "#000000",
};

export default Item;

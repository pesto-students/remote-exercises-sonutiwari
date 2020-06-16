import React from 'react';

class Item extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isSelected: false
    }
  }
  handleClick(){
    this.setState({
      isSelected: !this.state.isSelected
    });
  }
  render(){
    console.log(this.state.isSelected);
    return (
      <li 
      style={this.state.isSelected? redTextStyle: blackTextStyle}
       onClick={this.handleClick.bind(this)}>
        {this.props.value}
      </li>
    );
  }
}

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      groceryList: new Map(),
      inputValue: ""
    }
  }
  handleChange(event){
    this.setState({
      ...this.state,
      inputValue: event.target.value
    })
  }
  addGrocery(){
    const value = this.state.inputValue;
    const currentFreq = this.state.groceryList.get(value);
    this.setState({
      ...this.state,
      inputValue: "",
      groceryList: this.state.groceryList.set(value, currentFreq ? currentFreq + 1: 1)
    });
  }
  render(){
    const items = [];
    let index = 0;
    for (const [key, value] of this.state.groceryList){
      items.push(<Item key={index++} value={key + value} />);
    }
    return (
      <div className="App">
        <h1 style={{textAlign:"center"}}>Grocery List.</h1>
        <input value={this.state.inputValue} onChange={this.handleChange.bind(this)}/> <br />
        <button onClick={this.addGrocery.bind(this)}>Add</button>
        <ul>
        {items}
        </ul>
      </div>
    );
  }
}

const redTextStyle = {
  color: "#FF0000"
}

const blackTextStyle = {
  color: "#000000"
}
export default App;

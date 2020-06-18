import React, {Component} from 'react';
import withState from './WithState';
import withHandlers from './WithHandlers';

const enhance = withState('counter', 'setCounter', 0);
const Counter = enhance(({ counter, setCounter }) => (
  <div>
    Count: {counter}
    <button onClick={() => setCounter((n) => n + 1)}>Increment</button>
    <button onClick={() => setCounter((n) => n - 1)}>Decrement</button>
  </div>
));

const stateEnhancer = withState('value', 'updateValue', '');
const handlers = withHandlers({
  onChange: (props) => (event) => {
    props.updateValue(event.target.value);
  },
  onSubmit: (props) => (event) => {
    event.preventDefault();
    console.log(props.value);
  },
});

function FormComponent({ value, onChange, onSubmit }) {
  return <form onSubmit={onSubmit}>
    <label>
      Value
      <input type="text" value={value} onChange={onChange} />
    </label>
    <input type="submit" value="Click" />
  </form>
}

const FormWithHandler = handlers(FormComponent);
const Form = stateEnhancer(FormWithHandler);


class App extends Component {
    render() {
      return (
      <div className="App">
        <Counter />
        <Form />
      </div>
    );
    }
}

export default App;

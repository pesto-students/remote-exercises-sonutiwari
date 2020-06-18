import { createFactory, Component } from 'react'

const withState = (key, setter, initialState) => OriginalComponent => {
  const factory = createFactory(OriginalComponent)
  class WithState extends Component {
    state = {
      stateValue:
        typeof initialState === 'function'
          ? initialState(this.props)
          : initialState,
    }

    updateStateValue = (updateFn, callback) =>
      this.setState(
        ({ stateValue }) => ({
          stateValue:
            typeof updateFn === 'function' ? updateFn(stateValue) : updateFn,
        }),
        callback
      )

    render() {
      return factory({
        ...this.props,
        [key]: this.state.stateValue,
        [setter]: this.updateStateValue,
      })
    }
  }
  return WithState;
}

export default withState

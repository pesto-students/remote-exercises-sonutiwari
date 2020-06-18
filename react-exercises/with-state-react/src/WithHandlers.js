import { Component, createFactory } from 'react'
const mapValues = (obj, func) => {
    const result = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = func(obj[key], key);
      }
    }
    return result;
}

const withHandlers = handlers => BaseComponent => {
  const factory = createFactory(BaseComponent)
  class WithHandlers extends Component {
    handlers = mapValues(
      typeof handlers === 'function' ? handlers(this.props) : handlers,
      createHandler => (...args) => {
        const handler = createHandler(this.props)

        if (typeof handler !== 'function') {
          console.error("Handler should be a function.")
        }
        return handler(...args)
      }
    )

    render() {
      return factory({
        ...this.props,
        ...this.handlers,
      })
    }
  }
  return WithHandlers
}

export default withHandlers
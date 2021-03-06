import '../opbeat-e2e'
import React from 'react'
import ReactDOM from 'react-dom'


class CompositeComponent extends React.Component {
  render () {
    return (
      <span>Composite component</span>
    )
  }
}

class ES6Component extends React.Component {
  render() {
    return (
      <span id="ES6Component" onClick={() => render()}>es6 component</span>
    )
  }
}

var FuncComponent = () => <span>func Component</span> 

function render () {
  ReactDOM.render(
    (
      <div>
        <CompositeComponent />
        <ES6Component />
        <FuncComponent />
      </div>
    ),
    document.getElementById('reactMount')
  )
}

render()
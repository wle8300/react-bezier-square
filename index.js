import placeholder from './placeholder.png'
import BezierSquare from './bezier-square.svg'

import React, {Component} from 'react'

export default class ReactBezierSquare extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div style={this.style(this.props)}>
        {this.props.children}
      </div>
    )
  }

  style(props) {

    return Object.assign(
      {},
      {
        display: 'inline-flex',
        overflow: 'hidden',
        WebkitMask: `url(${BezierSquare}) 0% 0% / contain no-repeat`,
        mask: `url(${BezierSquare}) 0% 0% / contain no-repeat`,
      },
      props.style
    )
  }
}

ReactBezierSquare.defaultProps = {
  children: <img src={placeholder} />
}

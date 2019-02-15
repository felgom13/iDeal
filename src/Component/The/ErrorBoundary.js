import React from 'react'

import Error from 'Component/Shared/Error'

export default class ErrorBoundary extends React.Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { children, ...rest } = this.props

    return this.state.hasError ? <Error {...rest} /> : children
  }
}

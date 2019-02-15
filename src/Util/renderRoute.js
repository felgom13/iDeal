import React, { Suspense } from 'react'

import Loading from 'Asset/Error/Loading.svg'

import ErrorBoundary from 'Component/The/ErrorBoundary'

export default function renderRoute(Component) {
  return function(p) {
    return (
      <ErrorBoundary message="Something went wrong." picture={Loading}>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Component {...p} />
        </Suspense>
      </ErrorBoundary>
    )
  }
}

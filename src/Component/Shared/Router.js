import React from 'react'
import { Route, Switch } from 'react-router-dom'

const AddReward = React.lazy(() => import('Page/AddReward'))
const ClaimReward = React.lazy(() => import('Page/ClaimReward'))
const Customization = React.lazy(() => import('Page/Customization'))
const History = React.lazy(() => import('Page/History'))
const Report = React.lazy(() => import('Page/Report'))
const Strategy = React.lazy(() => import('Page/Strategy'))

const render = Component => p => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <Component {...p} />
  </React.Suspense>
)

export default () => (
  <Switch>
    <Route component={render(AddReward)} path="/add-reward" />
    <Route component={render(ClaimReward)} path="/claim-reward" />
    <Route component={render(Customization)} path="/customization" />
    <Route component={render(History)} path="/history" />
    <Route component={render(Report)} path="/report" />
    <Route component={render(Strategy)} path="/strategy" />
  </Switch>
)

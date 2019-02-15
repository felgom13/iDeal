import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'

import renderRoute from 'Util/renderRoute'

const AddReward = lazy(() => import('Page/AddReward'))
const ClaimReward = lazy(() => import('Page/ClaimReward'))
const Customization = lazy(() => import('Page/Customization'))
const History = lazy(() => import('Page/History'))
const Report = lazy(() => import('Page/Report'))
const Strategy = lazy(() => import('Page/Strategy'))

export default () => (
  <Switch>
    <Route component={renderRoute(AddReward)} path="/add-reward" />
    <Route component={renderRoute(ClaimReward)} path="/claim-reward" />
    <Route component={renderRoute(Customization)} path="/customization" />
    <Route component={renderRoute(History)} path="/history" />
    <Route component={renderRoute(Report)} path="/report" />
    <Route component={renderRoute(Strategy)} path="/strategy" />
  </Switch>
)

import React from 'react'
import { useAuth } from '../hooks/Authentication'
import { Route as ReactDOMRoute, Redirect } from 'react-router-dom'

function Route({ isPrivate = false, component: Component, ...rest}) {
  const { signed } = useAuth()

  return (
    <ReactDOMRoute {...rest} render={({ location }) => {
      return isPrivate === signed ? (
        <Component />
      ):  <Redirect to={{
            pathname: isPrivate ? '/' : 'config',
            state: { from: location }
          }} />
    }} />
  )

}

export default Route

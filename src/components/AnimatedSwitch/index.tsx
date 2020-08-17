import React, { ReactNode } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'
import './AnimatedSwitch.scss'

interface Iprops {
  type: string
  duration: number
  children: ReactNode
}
const AnimatedSwitch = (props: Iprops) => {
  const { children } = props
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames={props.type || 'fade'}
            timeout={props.duration || 300}
          >
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  )
}

export default AnimatedSwitch

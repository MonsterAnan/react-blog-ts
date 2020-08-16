import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Route, Switch } from "react-router-dom";
import "./AnimatedSwitch.scss";


interface TransitionProps {
  type: string;
  duration: number;
  children:any;
}
const AnimatedSwitch = (props:TransitionProps) => {
  const { children } = props;
  return (
    <Route
      render={({ location }) => (
        <TransitionGroup component={null}>
          <CSSTransition
            key={location.key}
            classNames={props.type || "fade"}
            timeout={props.duration || 300}
          >
            <Switch location={location}>{children}</Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
  );
};

export default AnimatedSwitch;

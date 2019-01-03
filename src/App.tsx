import React, { Component } from 'react';

import { connect } from "react-redux";
import { setState } from "./actions";

import { HomeContainer } from "./containers/Home";

import "./index.css";
interface IProps {
  test: boolean;
  setState: (state: any) => void;
}
export default class App extends Component<IProps> {
  private handleClick = () => {
    this.props.setState({
      test: true
    });
  }

  public render() {
    return (
      <HomeContainer />
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    test: state.app.test
  };
};
export const AppContainer = connect(
  mapStateToProps,
  { setState }
)(App);

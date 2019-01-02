import React, { Component } from 'react';

import { connect } from "react-redux";
import { setState } from "../actions";

interface IHomeProps {
  test: boolean;
  setState: (state: any) => void;
}
export default class Home extends Component<IHomeProps> {
  private handleClick = () => {
    this.props.setState({
      test: true
    });
  }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Home</h1>
          <button onClick={this.handleClick}>click me</button>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    test: state.app.test
  };
};
export const HomeContainer = connect(
  mapStateToProps,
  { setState }
)(Home);

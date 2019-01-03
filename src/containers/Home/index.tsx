import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setState } from '../../actions';

import { Wrapper, Row, Col, Box, Header, Title, Form } from './styles';

interface IHomeProps {
  test: boolean;
  setState: (state: any) => void;
}
export default class Home extends Component<IHomeProps> {
  private handleClick = () => {
    this.props.setState({
      test: true
    });
  };

  public render() {
    return (
      <Wrapper>
        <Row>
          <Col span={12}>
            <Box>
              <Header>
                <Title>Payment Details</Title>
              </Header>
              <Form>form data</Form>
            </Box>
          </Col>
        </Row>
      </Wrapper>
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

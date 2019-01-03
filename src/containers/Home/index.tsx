import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setState, onFieldChange } from '../../actions';

import {
  Wrapper,
  Row,
  Col,
  Box,
  Header,
  Title,
  Form,
  InputGroup,
  ButtonContainer
} from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

interface IHomeProps {
  payment: any;
  setState: (state: any) => void;
  onFieldChange: (state: object) => void;
}
export default class Home extends Component<IHomeProps> {
  public static defaultProps = {
    payment: {
      price: ''
    }
  };

  private handleInputChange = (name: string, value: any) => {
    this.props.onFieldChange({
      form: 'payment',
      name,
      value
    });
  };

  private handleCheckout = () => {
    console.log("handle save");
  }

  public render() {
    const { payment } = this.props;
    return (
      <Wrapper>
        <Row>
          <Col span={12}>
            <Box>
              <Header>
                <Title>Payment Details</Title>
              </Header>
              <Form>
                <InputGroup>
                  <TextInput
                    label="Price"
                    name="price"
                    value={payment.price}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <TextInput
                    label="Card Number"
                    name="cardNumber"
                    value={payment.price}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <TextInput
                    label="MM/YY"
                    name="expireDate"
                    value={payment.price}
                    onChange={this.handleInputChange}
                  />
                  <TextInput
                    label="CCV"
                    name="ccv"
                    value={payment.price}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <ButtonContainer>
                  <Button onClick={this.handleCheckout}>Checkout</Button>
                </ButtonContainer>
              </Form>
            </Box>
          </Col>
        </Row>
      </Wrapper>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    payment: state.form.payment
  };
};
export const HomeContainer = connect(
  mapStateToProps,
  { setState, onFieldChange }
)(Home);

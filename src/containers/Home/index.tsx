import React, { Component } from 'react';

import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { isUndefined } from 'lodash';
import { setState, onFieldChange } from '../../actions';

import { validate } from '../../util/validator';

import {
  Wrapper,
  Row,
  Col,
  Box,
  Header,
  Title,
  Form,
  InputGroup,
  ButtonContainer,
  Img
} from './styles';

import TextInput from '../../components/TextInput';
import Button from '../../components/Button';

interface IHomeProps {
  frmPayment: any;
  frmErrors: any;
  setState: (state: any) => void;
  onFieldChange: (state: object) => void;
}

const validationRule = {
  price: {
    name: 'price',
    required: true,
    type: 'decimal'
  },
  name: {
    name: 'name',
    required: true,
    type: 'string'
  },
  cardNumber: {
    name: 'cardNumber',
    required: true,
    length: [16, 16],
    type: 'creditcard'
  },
  expireDate: {
    name: 'expireDate',
    required: true,
    type: 'string',
    pattern: /^(1[0-2]|0[1-9]|\d)\/([2-9]\d[1-9]\d|[1-9]\d)$/,
    errorMessage: 'Invalid Date'
  },
  ccv: {
    name: 'ccv',
    required: true,
    type: 'number',
    length: [3, 3]
  }
};
export default class Home extends Component<IHomeProps> {
  public static defaultProps = {
    frmPayment: {
      price: ''
    },
    frmErrors: {}
  };

  private handleInputChange = (name: string, value: any) => {
    const { frmErrors } = this.props;
    const validateStatus: any = validate(validationRule, {
      [name]: value
    });

    const getErrorState = () => {
      if (validateStatus[name]) {
        return { ...frmErrors, [name]: validateStatus[name] };
      } else {
        const { [name]: _, ...restErrors } = frmErrors;
        return restErrors;
      }
    };

    this.props.onFieldChange({
      form: 'payment',
      name,
      value
    });

    this.props.setState({
      frmErrors: getErrorState()
    });
  };

  private handleCheckout = () => {
    const { frmPayment } = this.props;
    const validateStatus = validate(validationRule, frmPayment);
    if (isEmpty(validateStatus)) {
      console.log('save data');
    } else {
      this.props.setState({
        frmErrors: validateStatus
      });
    }
  };

  private renderIcon = (value: string) => {
    const mastercard = new RegExp(
      /^5[1-5][0-9]{14}$|^2(?:2(?:2[1-9]|[3-9][0-9])|[3-6][0-9][0-9]|7(?:[01][0-9]|20))[0-9]{12}$/
    );
    const americanExpress = new RegExp(/^3[47][0-9]{13}$/);
    const visa = new RegExp(/^4[0-9]{12}(?:[0-9]{3})?$/);
    const discover = new RegExp(
      /^65[4-9][0-9]{13}|64[4-9][0-9]{13}|6011[0-9]{12}|(622(?:12[6-9]|1[3-9][0-9]|[2-8][0-9][0-9]|9[01][0-9]|92[0-5])[0-9]{10})$/
    );
    let imageName;
    if (visa.test(value)) {
      imageName = 'visa';
    } else if (mastercard.test(value)) {
      imageName = 'mastercard';
    } else if (americanExpress.test(value)) {
      imageName = 'american-express';
    } else if (discover.test(value)) {
      imageName = 'discover';
    }

    if (isUndefined(imageName)) return <span />;

    return (
      <Img
        src={process.env.PUBLIC_URL + '/' + imageName + '.png'}
        alt={imageName}
      />
    );
  };

  public render() {
    const { frmPayment, frmErrors } = this.props;
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
                    error={frmErrors.price}
                    value={frmPayment.price}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <TextInput
                    label="Name on Card"
                    name="name"
                    error={frmErrors.name}
                    value={frmPayment.name}
                    onChange={this.handleInputChange}
                  />
                </InputGroup>
                <InputGroup>
                  <TextInput
                    label="Card Number"
                    name="cardNumber"
                    error={frmErrors.cardNumber}
                    value={frmPayment.cardNumber}
                    onChange={this.handleInputChange}
                    renderIcon={this.renderIcon}
                  />
                </InputGroup>
                <InputGroup>
                  <TextInput
                    label="MM/YY"
                    name="expireDate"
                    error={frmErrors.expireDate}
                    value={frmPayment.expireDate}
                    onChange={this.handleInputChange}
                    small={true}
                  />
                  <TextInput
                    label="CCV"
                    name="ccv"
                    error={frmErrors.ccv}
                    value={frmPayment.ccv}
                    onChange={this.handleInputChange}
                    small={true}
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
    frmPayment: state.form.payment,
    frmErrors: state.app.frmErrors
  };
};
export const HomeContainer = connect(
  mapStateToProps,
  { setState, onFieldChange }
)(Home);

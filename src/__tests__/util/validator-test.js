import { validate } from '../../util/validator';
const formData = {
  price: 250,
  name: 'P Jane',
  cardNumber: '4111111111111111',
  expireDate: '02/20',
  ccv: 123
};

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

describe('validator function test', () => {
  it('Should give error message, if requied field is not field', () => {
    // validate without pass vehicleType data (it is requied value)
    const { price: _, ...resetFormData } = formData;
    let validateStatus = validate(validationRule, resetFormData);
    expect(validateStatus).toHaveProperty('price');
  });

  it('Should give error if the send strings to the numeric only field', () => {
    const stringAgeData = {
      ...formData,
      ccv: 'thirty five'
    };
    let validateStatus = validate(validationRule, stringAgeData);
    expect(validateStatus).toHaveProperty('ccv');
  });

  it('Should give error if value is not decimal', () => {
    const minusValueData = {
      ...formData,
      price: -123
    };
    let validateStatus = validate(validationRule, minusValueData);
    expect(validateStatus).toHaveProperty('price');
  });

  it('Should give provided error message if value not match for given pattern', () => {
    const withInvalidUserName = {
      ...formData,
      expireDate: '02-25'
    };
    let validateStatus = validate(validationRule, withInvalidUserName);
    expect(validateStatus).toHaveProperty('expireDate');
  });

  it('Should give a error if value lenght not match the given range', () => {
    const withInvalidLengthUsername = {
      ...formData,
      cardNumber: 411111111111
    };
    let validateStatus = validate(validationRule, withInvalidLengthUsername);
    expect(validateStatus).toHaveProperty('cardNumber');
  });

  it('Should give a error if credit card is not valid', () => {
    const withInvalidLengthUsername = {
      ...formData,
      cardNumber: 4111111111111112
    };
    let validateStatus = validate(validationRule, withInvalidLengthUsername);
    expect(validateStatus.cardNumber).toEqual('Invalid Credit Card Number');
    expect(validateStatus).toHaveProperty('cardNumber');
  });
});

const setError = (errorObject: object, name: string, errMsg: string) => {
  return {
    ...errorObject,
    [name]: errMsg
  };
};

const LuhnCheck = (function()
{
	const luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
	return function(str: any)
	{
		let counter = 0;
		let incNum;
		let odd = false;
		const temp = String(str).replace(/[^\d]/g, "");
		if ( temp.length == 0)
			return false;
		for (let i = temp.length-1; i >= 0; --i)
		{
			incNum = parseInt(temp.charAt(i), 10);
			counter += (odd = !odd)? incNum : luhnArr[incNum];
		}
		return (counter%10 == 0);
	}
})();

export const validate = (schema: any, data: any): object => {
  const fields = Object.keys(schema);
  return fields.reduce((errorObject: any, fieldName: any) => {
    const fieldDef = schema[fieldName];
    const value = data[fieldName];

    // if data object does not contain a value for a required field submit errors
    if (fieldDef.type !== 'boolean' && fieldDef.required && !value) {
      const errMsg = 'Cannot be left empty';
      return setError(errorObject, fieldName, errMsg);
    }
    // validate for number
    if (value && fieldDef.type === 'number') {
      if (!/^\d+$/.test(value)) {
        const errMsg = 'Only allow numeric values';
        return setError(errorObject, fieldName, errMsg);
      }
    }

    // validate for decimal
    if (value && fieldDef.type === 'decimal') {
      if (!/^\d+(\.\d+)?$/.test(value)) {
        const errMsg = 'Only allow decimal values';
        return setError(errorObject, fieldName, errMsg);
      }
    }
    // pattern validation; skip unicode
    if (value && fieldDef.pattern) {
      const regexp = new RegExp(fieldDef.pattern);
      if (!regexp.test(value)) {
        const errMsg = fieldDef.errorMessage || 'Invalid value';
        return setError(errorObject, fieldName, errMsg);
      }
    }

    // Length validation
    if (value && fieldDef.length) {
      const valueLength = value.length;
      const lengthDef = fieldDef.length.slice();
      if (valueLength < lengthDef[0] || valueLength > lengthDef[1]) {
        // error = "[" + name + "] " + errlabel + fieldDef.length.join('-') + " " + crlabel;
        const errMsg = lengthDef[0] === lengthDef[1] ? `Length should be equal to ${lengthDef[0]}` : `Should have length between ${fieldDef.length.join(
          '-'
        )} characters`;
        return setError(errorObject, fieldName, errMsg);
      }
    }

    // valdiate credit card number
    if (value && fieldDef.type === 'creditcard') {
      if (!LuhnCheck(value)) {
        const errMsg = 'Invalid Credit Card Number';
        return setError(errorObject, fieldName, errMsg);
      }
    }

    return errorObject;
  }, {});
};

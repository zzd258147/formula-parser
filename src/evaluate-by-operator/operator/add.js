import Decimal from 'decimal.js';
import {toNumber} from './../../helper/number';
import {ERROR_VALUE} from './../../error';

export const SYMBOL = '+';

export default function func(first, ...rest) {
  const result = rest.reduce((acc, value) => Decimal(acc).add(toNumber(value)).toNumber(), toNumber(first));

  if (isNaN(result)) {
    throw Error(ERROR_VALUE);
  }

  return result;
}

func.SYMBOL = SYMBOL;

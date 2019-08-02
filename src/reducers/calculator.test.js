import { calculator } from './calculator';

describe ('Calculator Reducer', () => {

    const initialState = {
        afterOperator: false,
        displayValue: '',
        firstNumber: null,
        memory: null,
        operator: null
    };

    it ('should return the initial state', () => {
        expect(calculator(undefined, {})).toEqual(initialState);
    });
});
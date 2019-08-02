import { findAnswer } from '../helpers/evaluateExpression';
import {
    HANDLE_OPERATOR,
    HANDLE_EQUALS,
    HANDLE_NUMBER,
    TOGGLE_NEGATIVE,
    CLEAR_VALUE,
    MEMORY_STORAGE,
    MEMORY_RECALL,
    REMOVE_MEMORY
} from '../actions/calculator';

const defaultState = {
    afterOperator: false,
    displayValue: '',
    firstNumber: null,
    memory: null,
    operator: null
}

export const calculator = (state = defaultState, action) => {
    const {
        afterOperator,
        displayValue,
        firstNumber,
        memory,
        operator
    } = state;

    switch (action.type) {
        case CLEAR_VALUE:
            return {
                ...state,
                afterOperator: false,
                displayValue: '',
                firstNumber: null,
                operator: null,
            };

        case REMOVE_MEMORY:
            return {
                ...state,
                memory: null
            };

        case MEMORY_STORAGE:
            if (!displayValue) return state;
            return {
                ...state,
                memory: displayValue
            };

        case MEMORY_RECALL:
            if (!memory) return state;
            return {
                ...state,
                displayValue: memory
            };

        case HANDLE_NUMBER:
            if (action.number === '0' && displayValue === '0') return state;
            if (operator === '/' && action.number === '0') return state;

            if (afterOperator && operator && (displayValue === String(firstNumber))) {
                return {
                    displayValue: findAnswer(firstNumber, action.number, operator),
                    firstNumber: null
                };
            } else {
                return {
                    ...state,
                    displayValue: displayValue === '' ? action.number : displayValue + action.number
                };
            };

        case TOGGLE_NEGATIVE:
            if (!displayValue || displayValue === '0') return state;
            return {
                ...state,
                displayValue: displayValue.charAt(0) !== '-' ? '-' + displayValue : displayValue.substring(1)
            };

        case HANDLE_OPERATOR:
            if (!displayValue) return state;

            if (afterOperator) {
                return {
                    ...state,
                    displayValue: findAnswer(firstNumber, displayValue, operator),
                    firstNumber: parseFloat(findAnswer(firstNumber, displayValue, operator)),
                    operator: action.operator
                };
            } else {
                return {
                    firstNumber: parseFloat(displayValue),
                    operator: action.operator,
                    displayValue: '',
                    afterOperator: true
                };
            }

        case HANDLE_EQUALS:
            if (!afterOperator) return state;
            return {
                ...state,
                displayValue: findAnswer(firstNumber, displayValue, operator),
                firstNumber: null,
                afterOperator: false,
                operator: null
            };

        default: return state;
    };
};

export const calculatorButtons = {
    buttons: [
        {
            name: 'C',
            className: 'clear',
            dispatch: 'clearValue'
        },
        {
            name: 'MS',
            className: 'functional',
            dispatch: 'memoryStorage'
        },
        {
            name: 'MR',
            className: 'functional',
            dispatch: 'memoryRecall'
        },
        {
            name: '7',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '8',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '9',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '4',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '5',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '6',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '1',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '2',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '3',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '±',
            className: null,
            dispatch: 'toggleNegative'
        },
        {
            name: '0',
            className: null,
            dispatch: 'handleNumber'
        },
        {
            name: '=',
            className: 'equals',
            dispatch: 'handleEquals'
        }
    ],
    sideColumn: [
        {
            name: 'RM',
            className: 'functional',
            dispatch: 'removeMemory'
        },
        {
            name: 'x',
            className: 'operator',
            dispatch: 'handleOperator'
        },
        {
            name: '/',
            className: 'operator',
            dispatch: 'handleOperator'
        },
        {
            name: '+',
            className: 'operator',
            dispatch: 'handleOperator'
        },
        {
            name: '-',
            className: 'operator',
            dispatch: 'handleOperator'
        }
    ]
};

export const findButtonDispatch = (button, props) => {
    const {
        handleNumber,
        toggleNegative,
        handleOperator,
        handleEquals,
        clearValue,
        memoryRecall,
        memoryStorage,
        removeMemory,
    } = props;
    const { name, dispatch } = button;

    switch (dispatch) {
        case 'handleNumber':
            return () => handleNumber(name)
        case 'handleOperator':
            return () => handleOperator(name)
        case 'handleEquals':
            return () => handleEquals()
        case 'toggleNegative':
            return () => toggleNegative()
        case 'memoryStorage':
            return () => memoryStorage()
        case 'memoryRecall':
            return () => memoryRecall()
        case 'removeMemory':
            return () => removeMemory()
        case 'clearValue':
            return () => clearValue()
        default: return null;
    }
};
export const HANDLE_NUMBER = Symbol('HANDLE_NUMBER');
export const HANDLE_OPERATOR = Symbol('HANDLE_OPERATOR');
export const HANDLE_EQUALS = Symbol('HANDLE_EQUALS');
export const TOGGLE_NEGATIVE = Symbol('TOGGLE_NEGATIVE');
export const MEMORY_RECALL = Symbol('MEMORY_RECALL');
export const MEMORY_STORAGE = Symbol('MEMORY_STORAGE');
export const REMOVE_MEMORY = Symbol('MEMORY_STORAGE');
export const CLEAR_VALUE = Symbol('CLEAR_VALUE');

export const memoryRecall = () => ({
    type: MEMORY_RECALL
});

export const memoryStorage = () => ({
    type: MEMORY_STORAGE
});

export const removeMemory = () => ({
    type: REMOVE_MEMORY
});

export const clearValue = () => ({
    type: CLEAR_VALUE
});

export const handleNumber = number => ({
    type: HANDLE_NUMBER,
    number
});

export const handleOperator = operator => ({
    type: HANDLE_OPERATOR,
    operator
});

export const handleEquals = () => ({
    type: HANDLE_EQUALS
});

export const toggleNegative = () => ({
    type: TOGGLE_NEGATIVE
});
export const evaluateExpression = (firstNumber, secondNumber, operator) => {
    const evaluate = {
        'x': (firstNumber, secondNumber) => firstNumber * secondNumber,
        '/': (firstNumber, secondNumber) => firstNumber / secondNumber,
        '+': (firstNumber, secondNumber) => firstNumber + secondNumber,
        '-': (firstNumber, secondNumber) => firstNumber - secondNumber
    };
    return evaluate[operator](firstNumber, secondNumber);
};

export const findAnswer = (firstNumber, displayValue, operator) => {
    const secondNumber = parseFloat(displayValue);
    const answer = evaluateExpression(firstNumber, secondNumber, operator);
    if (Number.isNaN(answer)) return 0;
    return String(answer % 1 !== 0 ? answer.toFixed(2) : answer);
};

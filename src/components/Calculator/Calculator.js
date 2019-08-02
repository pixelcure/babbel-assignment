import React from 'react';
import cs from 'classnames';
import { connect } from 'react-redux';

import { calculatorButtons, findButtonDispatch } from '../../helpers/calculatorButtons';
import {
    handleNumber,
    handleOperator,
    handleEquals,
    memoryStorage,
    memoryRecall,
    removeMemory,
    clearValue,
    toggleNegative
} from '../../actions/calculator';
import {
    Wrapper,
    Screen,
    Lower,
    Buttons,
    Button,
    SideColumn
} from './styles';

const renderButtons = props => (
    <Buttons>
        { calculatorButtons.buttons.map(button => (
            <Button
                onClick={findButtonDispatch(button, props)}
                key={`button-${button.name}`}
                className={cs(button.className)
            }>
                {button.name}
            </Button>
        ))}
    </Buttons>
);

const renderSideColumn = props => {
    const { operator, afterOperator } = props;

    return (
        <SideColumn>
            { calculatorButtons.sideColumn.map(button => (
                <Button
                    onClick={findButtonDispatch(button, props)}
                    key={`operation-${button.name}`}
                    className={cs(button.className, operator === button.name && afterOperator ? 'active' : null)}
                >
                    {button.name}
                </Button>
            ))}
        </SideColumn>
    );
};

const Calculator = props => (
    <Wrapper>
        <Screen><input disabled={true} value={props.displayValue} type='text' /></Screen>
        <Lower>
            {renderButtons(props)}
            {renderSideColumn(props)}
        </Lower>
    </Wrapper>
);

const mapStateToProps = ({ calculator: { displayValue } }) => ({
    displayValue
});

const mapDispatchToProps = dispatch => ({
    handleNumber: number => dispatch(handleNumber(number)),
    handleOperator: operator => dispatch(handleOperator(operator)),
    handleEquals: () => dispatch(handleEquals()),
    memoryRecall: () => dispatch(memoryRecall()),
    memoryStorage: () => dispatch(memoryStorage()),
    removeMemory: () => dispatch(removeMemory()),
    clearValue: () => dispatch(clearValue()),
    toggleNegative: () => dispatch(toggleNegative())
});

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);

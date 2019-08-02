import styled from 'styled-components';

export const Wrapper = styled.div`
    box-shadow: 1rem 1rem 1rem rgba(0, 0, 0, .25);
    border: 0.1rem solid rgba(0, 0, 0, .05);
    border-radius: var(--borderRadius);
    margin: 0 auto;
    max-width: 25rem;
    padding: 1rem;

    @media (min-width: 375px) {
        max-width: 28rem;
    }
`;

export const Screen = styled.div`
    background: var(--lightGrey);
    box-shadow: inset 0.2rem 0.2rem 0.2rem rgba(0, 0, 0, .25);
    border-radius: var(--borderRadius);
    height: 5rem;
    line-height: 5rem;
    overflow: hidden;
    width: 100%;

    input[type='text'] {
        background: transparent;
        border: 0;
        color: var(--grey);
        display: block;
        font-family: 'Aldrich', sans-serif;
        font-size: 3rem;
        height: 3rem;
        padding: 1rem 1.5rem;
        text-align: right;
        text-shadow: 0.1rem 0.1rem 0.1rem rgba(99, 109, 13, 0.5);
        width: 25rem;
    }
`;

export const Button = styled.button`
    background: var(--brown);
    color: var(--grey);
    cursor: pointer;
    border: 0;
    border-radius: var(--borderRadius);
    box-shadow: 0.1rem 0.1rem 0.1rem rgba(0, 0, 0, .25);
    font-size: 1.8rem;
    font-weight: 600;
    height: 4rem;
    margin: 0.2rem;
    outline: none;
    text-transform: uppercase;
    width: 5.9rem;

    &.clear {
        background: var(--red);
        color: var(--offWhite);
    }

    &.equals {
        background: var(--darkGreen);
        color: var(--offWhite);
    }

    &.operator {
        background: var(--darkBrown);
        color: var(--offWhite);
    }

    &.functional {
        background: var(--lightBrown);
    }

    &:hover,
    &:active {
        opacity: 0.8;
    }

    &.active,
    &:active {
        box-shadow: none;
    }

    &.active {
        opacity: 0.5;
    }

    @media (min-width: 375px) {
        width: 6.9rem;
    }
`;

export const Buttons = styled.div`
    width: 22rem;
`;

export const Lower = styled.div`
    display: flex;
    margin-top: 1rem;
`;

export const SideColumn = styled.div`
    display: flex;
    flex-flow: column;
    width: 6rem;

    button {
        font-size: 2rem;
        width: initial;
    }
`;
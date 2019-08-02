import styled from 'styled-components';

export const HeaderStyles = styled.header`
    border-bottom: 0.1rem solid var(--borderColor);
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 3rem;
    padding-bottom: 2rem;
`;

export const Logo = styled.h1`
    color: var(--orange);
    font-weight: 100;
    font-size: 2rem;
    line-height: 2.2rem;
    margin: 0;
    padding: 0;

    @media (min-width: 768px) {
        font-size: 2.4rem;
        line-height: 2.4rem;
    }
`;

export const Contact = styled.a`
    display: block;
    text-align: right;
    font-size: 1.2rem;
    padding-top: 0.5rem;
    text-align: right;

    span {
        color: var(--orange);
    }

    @media (min-width: 768px) {
        font-size: 1.4rem;
        padding-top: 0.5rem;
    }
`;
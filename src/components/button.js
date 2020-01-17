import styled from 'styled-components';

export const  ButtonContainer = styled.button`
    text-transform: capitalize;
    font-size: 1.2rem;
    border-radius: 4px;
    border: 0.05rem solid var(--lightBlue);
    border-color: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
    color: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
    background-color: ${props => props.cart? "var(--mainBlue)" : "var(--mainWhite)"};
    transition: all .5s ease-in-out;
    &:hover {
        background: var(--lightBlue);
        color: white;
    }
`;

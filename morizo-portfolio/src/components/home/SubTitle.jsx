import styled from "styled-components";

export const SubTitle = (props) => {
    return (
        <>
            <SP>{props.children}</SP>
        </>
    );
} ;

const SP = styled.p`
    z-index:99;
    position:relative;
    color:#fff;
    font-family: Montserrat Alternates;
    font-size: 4rem;
    font-weight: 500;
`;
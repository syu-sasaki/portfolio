import styled from "styled-components";

export const Title = (props) => {
    return (
        <>
            <SH2>{props.children}</SH2>
        </>
    );
} ;

const SH2 = styled.h2`
    z-index:99;
    position:relative;
    color:#fff;
    font-family: Montserrat Alternates;
    font-size: 6rem;
    font-weight: 700;
    &::before {	
        content: "";
        width: 11px;
        height: 5rem;
        position: absolute;
        top: 1.5rem;
        left: -1rem;
        background: linear-gradient(270deg, #88FAE8 0.53%, #ACB8E6 98.95%);
        box-sizing: border-box;
    }
`;
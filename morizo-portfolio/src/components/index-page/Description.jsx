import styled from "styled-components";

export const Description = (props) => {
    const {description} = props;
    return (
        <>
            <SP>{description}</SP>
        </>
    );
};

const SP = styled.p`
    z-index:99;
    position:relative;
    color:#fff;
    max-width:40rem;
    font-size: 5rem;
    font-weight: 500;
    font-family: Montserrat Alternates;
    &::before {	
        content: "";
        width: 11px;
        height:85%;
        position: absolute;
        top: 1.5rem;
        left: -1.5rem;
        background: linear-gradient(270deg, #88FAE8 0.53%, #ACB8E6 98.95%);
        box-sizing: border-box;
    }
`;
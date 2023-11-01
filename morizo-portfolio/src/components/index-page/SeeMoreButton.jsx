import styled from "styled-components";

export const SeeMoreButton = () => {
    return(
        <SButton>see more</SButton>
    );
};

const SButton = styled.button`
    z-index:99;
    display:inline-block;
    border:none;
    border-radius: 3rem;
    background: linear-gradient(270deg, #88FAE8 0.53%, #ACB8E6 98.95%);;
    width:10rem;
    height:4rem;
    font-size: 1.5rem;
    font-weight: 500;
    font-family: Montserrat Alternates;
`
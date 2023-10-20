import styled from "styled-components";
import { SnsButton } from "./SnsButton";
import { useState } from "react";

export const Header = () => {
    const [isActiveMenue, setIsActiveMenue] = useState(false);
    return (
        <SHeader>
            <SH1>
                <SA>Morizo Portfolio</SA>
            </SH1>
            <SDiv>
                <SnsButton/>
                <SButton onClick={() => setIsActiveMenue(prev=>!prev)}>
                    <SSpan1 $isActiveMenue={isActiveMenue}/>
                    <SSpan2 $isActiveMenue={isActiveMenue}/>
                    <SSpan3 $isActiveMenue={isActiveMenue}/>
                </SButton>
            </SDiv>
        </SHeader>
    );
};

const SHeader = styled.header`
    height:4rem;
    width:100%;
    padding: 0.5rem 1rem;
    position: fixed;
    top:0;
    left:0;
    display:flex;
    justify-content: space-between;
    align-items:center;
    `;

const SH1 = styled.h1`
    width:fit-content;
    height:fit-content;
`;

const SA = styled.a`
    color: #fff;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size: 2.25rem;
    font-weight: 500;
    height:fit-content;
`;

const SDiv = styled.div`
    display:flex;
    align-items:center;
`;

const SButton = styled.button`
    margin-left:1rem;
    display:flex;
    flex-direction: column;
    justify-content: space-around;
    width:3rem;
    height:2.5rem;
`;

const SSpan1 = styled.span`
    content:'';
    background:#fff;
    width:3rem;
    height:2px;
    transition: .3s;
    ${props => props.$isActiveMenue &&  "transform: translate(0, 0.8rem) rotate(-45deg);"}
`;

const SSpan2 = styled.span`
    content:'';
    background:#fff;
    width:3rem;
    height:2px;
    transition: .3s;
    ${props => props.$isActiveMenue && "opacity:0;"}
`;

const SSpan3 = styled.span`
    content:'';
    background:#fff;
    width:3rem;
    height:2px;
    transition: .3s;
    ${props => props.$isActiveMenue &&  "transform: translate(0, -0.8rem) rotate(45deg);"}
`;
import styled from "styled-components";
import { Title } from "./Title";
import { Description } from "./Description";
import { SeeMoreButton } from "./SeeMoreButton";

export const Vision = () => {
    return (
        <SDiv1>
            <SDiv2>
                <Description description = "What I really want to do"/>
            </SDiv2>
            <SDiv3>
                <SDiv4>
                    <Title>Vision</Title>
                    <SeeMoreButton/>
                </SDiv4>
            </SDiv3>
        </SDiv1>
    );
};

const SDiv1 = styled.div`
    position:relative;
    overflow:hidden;
    display:flex;
    padding:4rem 2rem 4rem 2rem;
    flex-direction:row;
    background:#333;
    width:100vw;
    height:100vh;
`;

const SDiv2 = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:flex-end;
    background:#333;
    width:50%;
    height:100%;
    padding-left:5rem;
`;

const SDiv3 = styled.div`
    display:flex;
    justify-content:flex-end;
    align-items:flex-start;
    background:#333;
    width:50%;
    height:100%;
    padding-right:10rem;
`;

const SDiv4 = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-end;

`;
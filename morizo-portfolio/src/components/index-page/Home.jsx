import styled from "styled-components";
import { Title } from "./Title";
import { SubTitle } from "./SubTitle";

export const Home = () => {
    return (
        <SDiv1>
            <SDiv2>
                <Title>Portfolio</Title>
            </SDiv2>
            <SDiv3>
                <SDiv4>
                    <Title>Syu Sasaki</Title>
                    <SubTitle>Engineer</SubTitle>
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
    justify-content:center;
    align-items:flex-start;
    background:#333;
    width:50%;
    height:100%;
    padding-left:5rem;
`;

const SDiv4 = styled.div`
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: flex-end;

`;
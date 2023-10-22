import styled from "styled-components";

export const Menue = (props) => {
    const isActiveMenue = props.isActiveMenue;

    return(
        <SNav $isActiveMenue={isActiveMenue}>
            <SUl>
                <SLi>
                    <SA>Home</SA>
                </SLi>
                <SLi>
                    <SA>Profile</SA>
                </SLi>
                <SLi>
                    <SA>Content</SA>
                </SLi>
                <SLi>
                    <SA>Vision</SA>
                </SLi>
            </SUl>
        </SNav>
    )
};


const SNav = styled.nav`
    background:#333;
    display:flex;
    justify-content:center;
    align-items:center;
    position: fixed;
    top:0;
    left:0;
    z-index:98;
    width:100%;
    height:100vh;
    transition:.3s;
    transform:translate3d(0, -100%, 0);
    ${props => props.$isActiveMenue &&  "transform:translate3d(0, 0, 0);"}
`;

const SUl = styled.ul`
    text-align: center;
`;

const SLi = styled.li`
`;

const SA = styled.a`
    color:#fff;
    font-family: 'Montserrat Alternates', sans-serif;
    font-size:7rem;
    font-weight: 400;
    height:fit-content;
`;
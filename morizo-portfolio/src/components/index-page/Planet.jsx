import styled from "styled-components";

export const Planet = () => {
    return (
        <>
            <SDiv1>
                <SDiv2 $rotateIni={0}>
                    <SDiv3>
                        <SPlanet1 
                            $rotateIni={0}
                            $backgroundColor="78deg, #F00 8.99%, #EF6800 51.02%, #E89900 90.57%"
                        />
                    </SDiv3>
                </SDiv2>
                <SDiv2  $rotateIni={60}>
                    <SDiv3>
                        <SPlanet1
                            $rotateIni={-60}
                            $backgroundColor="236deg, #FDFF9F 15.55%, #80CD03 88.3%"
                        />
                    </SDiv3>
                </SDiv2>
                <SDiv2 $rotateIni={120}>
                    <SDiv3>
                        <SPlanet1
                            $rotateIni={-120}
                            $backgroundColor="43deg, #4D9DEA 15.8%, #95F8F1 84.3%"
                        />
                    </SDiv3>
                </SDiv2>
            </SDiv1>
            </>
    );
};

const SDiv1 = styled.div`
    z-index:98;
    width:20rem;
    height:20rem;
    rotate:20deg;
    position:fixed;
    top:33%;
    left:40%;
    perspective:100rem;
    transform-style: preserve-3d;
`;

const SDiv2 = styled.div`
    width:fit-content;
    height:fit-content;
    position:absolute;
    rotate:y ${props => props.$rotateIni}deg;
    transform-style: preserve-3d;
    animation: rotation3D 20s linear infinite;
    animation-delay:${props => props.$animationDelayTime}s;
    @keyframes rotation3D {
        0% {transform: rotate3d(0, 1, 0, 0deg);}
        100% {transform: rotate3d(0 , 1, 0, 360deg);}
    }
`;

const SDiv3 = styled.div`
    width:fit-content;
    height:fit-content;
    transform-style: preserve-3d;
    transform: translateZ(50rem);
`;

const SPlanet1 = styled.div`
    position:relative;
    width:18rem;
    height:18rem;
    rotate:y ${props => props.$rotateIni}deg;
    border-radius:100%;
    background:linear-gradient(${props => props.$backgroundColor});
    transform-style: preserve-3d;
    animation: rotation3D 20s linear infinite reverse;
    animation-delay:${props => props.$animationDelayTime}s; 
    @keyframes rotation3D {
        0% {transform: rotate3d(0, 1, 0, 0deg);}
        100% {transform: rotate3d(0 , 1, 0, 360deg);}
    }
`; 
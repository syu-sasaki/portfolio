import styled from "styled-components";

export const Planet1 = () => {
    return (
        <>
            <SDiv1>
                <SDiv2 $animationdelaytime={0}>
                    <SDiv3>
                        <SPlanet1 $animationdelaytime={0} $backgroundcolor="78deg, #F00 8.99%, #EF6800 51.02%, #E89900 90.57%"/>
                    </SDiv3>
                </SDiv2>
            </SDiv1>
            <SDiv1>
                <SDiv2 $animationdelaytime={1}>
                    <SDiv3>
                        <SPlanet1 $animationdelaytime={1} $backgroundcolor="236deg, #FDFF9F 15.55%, #80CD03 88.3%"/>
                    </SDiv3>
                </SDiv2>
            </SDiv1>
            <SDiv1>
                <SDiv2 $animationdelaytime={2}>
                    <SDiv3>
                        <SPlanet1 $animationdelaytime={2} $backgroundcolor="43deg, #4D9DEA 15.8%, #95F8F1 84.3%"/>
                    </SDiv3>
                </SDiv2>
            </SDiv1>
            </>
    );
};

const SDiv1 = styled.div`
    width:20rem;
    height:20rem;
    rotate:20deg;
    position:absolute;
    top:40%;
    left:50%;
    transform-style: preserve-3d;
`;

const SDiv2 = styled.div`
    width:fit-content;
    height:fit-content;
    position:absolute;
    transform-style: preserve-3d;
    animation: rotationY 10s linear infinite;
    animation-delay:${props => props.$animationdelaytime}s;
    @keyframes rotationY {
        0% {transform: rotate3d(0, 1, 0, 0deg);}
        100% {transform: rotate3d(0 , 1, 0, 360deg);}
    }
`;

const SDiv3 = styled.div`
    width:fit-content;
    height:fit-content;
    position:absolute;
    transform-style: preserve-3d;
    transform: translateZ(35rem);
`;

const SPlanet1 = styled.div`
    position:relative;
    width:18rem;
    height:18rem;
    border-radius:100%;
    background:linear-gradient(${props => props.$backgroundcolor});
    transform-style: preserve-3d;
    animation: rotationY 10s linear infinite reverse;
    animation-delay:${props => props.$animationdelaytime}s; 
    @keyframes rotationY {
        0% {transform: rotate3d(0, 1, 0, 0deg);}
        100% {transform: rotate3d(0 , 1, 0, 360deg);}
    }
`; 

// const SPlanet2 = styled.div`
//     position:relative;
//     z-index:3;
//     width:18rem;
//     height:18rem;
//     border-radius:100%;
//     background: linear-gradient(236deg, #FDFF9F 15.55%, #80CD03 88.3%);
//     transform-style: preserve-3d;
//     animation: rotationY 10s linear infinite reverse; 
//     animation-delay:${props => props.$animationdelaytime}s;
//     @keyframes rotationY {
//         0% {transform: rotate3d(0, 1, 0, 0deg);}
//         100% {transform: rotate3d(0 , 1, 0, 360deg);}
//     }
// `; 

// const SPlanet3 = styled.div`
//     position:relative;
//     z-index:3;
//     width:18rem;
//     height:18rem;
//     border-radius:100%;
//     background:linear-gradient(43deg, #4D9DEA 15.8%, #95F8F1 84.3%);
//     transform-style: preserve-3d;
//     animation: rotationY 10s linear infinite reverse;
//     animation-delay:${props => props.$animationdelaytime}s;
//     @keyframes rotationY {
//         0% {transform: rotate3d(0, 1, 0, 0deg);}
//         100% {transform: rotate3d(0 , 1, 0, 360deg);}
//    }
// `;







            {/* <SDiv1>
                <SDiv2 $rotateIni={0}>
                    <SDiv3>
                        <SPlanet1/>
                    </SDiv3>
                </SDiv2>
            </SDiv1>
            <SDiv1>
                <SDiv2 $rotateIni={30}>
                    <SDiv3>
                        <SPlanet2 />
                    </SDiv3>
                </SDiv2>
            </SDiv1>
            <SDiv1>
                <SDiv2 $rotateIni={60}>
                    <SDiv3>
                        <SPlanet3/>
                    </SDiv3>
                </SDiv2>
            </SDiv1> */}


// const SDiv1 = styled.div`
//     width:20rem;
//     height:20rem;
//     rotate:20deg;
//     position:absolute;
//     top:33%;
//     left:40%;
//     transform-style: preserve-3d;
// `;


// const SDiv2 = styled.div`
//     width:fit-content;
//     height:fit-content;
//     transform-style: preserve-3d;
//     animation: rotationY 10s linear infinite;
//     rotate:y ${props => props.$rotateIni}deg;  
//     @keyframes rotationY {
//         0% {transform: rotateY(${props => props.$rotateIni+0}deg);}
//         100% {transform: rotateY(${props => props.$rotateIni+360}deg);}
//     }
// `;

// const SDiv3 = styled.div`
//     width:fit-content;
//     height:fit-content;
//     transform-style: preserve-3d;
//     transform: translateZ(50rem);
// `;

// const SPlanet1 = styled.div`
//     position:fixed;
//     z-index:3;
//     width:18rem;
//     height:18rem;
//     border-radius:100%;
//     background:linear-gradient(78deg, #F00 8.99%, #EF6800 51.02%, #E89900 90.57%);
//     transform-style: preserve-3d;
//     animation: rotationY 10s linear infinite reverse;  
//     @keyframes rotationY {
//         0% {transform: rotateY(0deg);}
//         100% {transform: rotateY(360deg);}
//     }
// `; 

// const SPlanet2 = styled.div`
//     position:fixed;
//     z-index:2;
//     width:18rem;
//     height:18rem;
//     border-radius:100%;
//     rotate:y -30deg;
//     background: linear-gradient(236deg, #FDFF9F 15.55%, #80CD03 88.3%);
//     transform-style: preserve-3d;
//     animation: rotationY 10s linear infinite reverse;  
//     @keyframes rotationY {
//         0% {transform: rotateY(0deg);}
//         100% {transform: rotateY(360deg);}
//     }
// `; 

// const SPlanet3 = styled.div`
//     position:fixed;
//     z-index:1;
//     width:18rem;
//     height:18rem;
//     rotate:y -60deg;
//     border-radius:100%;
//     background:linear-gradient(43deg, #4D9DEA 15.8%, #95F8F1 84.3%);
//     transform-style: preserve-3d;
//     animation: rotationY 10s linear infinite reverse;  
//     @keyframes rotationY {
//         0% {transform: rotateY(0deg);}
//         100% {transform: rotateY(360deg);}
//     }
// `; 

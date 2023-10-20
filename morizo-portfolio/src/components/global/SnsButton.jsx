import styled from "styled-components"; 

export const SnsButton = () => {
    return (
        <>
            <SA>
                <SImg src="instagram_white.svg"/>
            </SA>
            <SA>
                <SImg src="x_white.svg"/>
            </SA>
        </>
    );
};


const SA = styled.a`
    margin:0rem 0.5rem;
    height:2rem;
`;

const SImg = styled.img`
    height:2rem;
`;
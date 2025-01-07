import styled from "styled-components";

export const Container = styled.div`
    diplay: grid;
    grind-template-columns: repeat(3, minmax(o, 1fr));
    gap: 2rem;
    marging-top: 2 rem;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
        grind-template-columns: auto;
    }
`;
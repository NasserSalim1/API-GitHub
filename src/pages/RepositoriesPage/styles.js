import styled from "styled-components";

export const Container = styled.main`
    display: flex;
    min-height: 100vh;
    color: ${(props) => props.theme.colors.white};

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        flex-direction: column;
    }
`;

export const SideBar = styled.aside`
    background: ${(props) => props.theme.colors.gray900};
    min-width: 20rem;
    min-height: 100vh;
    overflow-y: hidden;
`;

export const Main = styled.section`
    background: ${(props) => props.theme.colors.gray800};
    width: 100%;
    min-height: 100vh;
    padding: 40px;
    overflow-y: hidden;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}){
        height: 100%;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}){
        padding: 40px 20px;
    }
`;

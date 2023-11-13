import styled from 'styled-components';

export const LoginOuter = styled.section`
    display: grid;
    grid-template-columns: 40% 60%;
    grid-template-rows: 100%;
` 

export const LoginImage = styled.div`
    background-image: url(${({img})=>img});
    background-position: fixed;
    background-size: cover;
`

export const LoginFormOuter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding-top: 4rem;
`
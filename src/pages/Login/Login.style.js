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
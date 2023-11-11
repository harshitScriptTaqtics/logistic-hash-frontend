import styled from 'styled-components';

export const HeaderOuter = styled.div`
    height: 80px;
    background-color: #ffff;
    padding: 1rem;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 14px 0px grey;
    position: sticky;
    top:0px;
`

export const TenantLogo = styled.img`
    width: 150px;
    height: 70px;
    object-fit: contain;
`

export const LogoAndTenantNameOuter = styled.section`
    display: flex;
    align-items: center;
    gap: 1rem;
`
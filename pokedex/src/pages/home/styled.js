import styled from 'styled-components';

export const Container = styled.div`
max-width: 960px;
margin: 0 auto;
`

export const ContainerHome = styled.section`
    display:grid;
    max-width:960px;
    /* grid-auto-flow: row; */
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
    justify-items:center;
    align-items: center;
`

export const ButtonHome = styled.div`
text-align:center;
margin: 20px auto;
`
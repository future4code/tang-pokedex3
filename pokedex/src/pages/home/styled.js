import styled from 'styled-components';

export const Container = styled.div`
max-width: 960px;
margin: 0 auto;
min-height: 80vh;
`

export const ContainerHome = styled.section`
    display:grid;
    max-width:960px;
    grid-template-columns: 1fr 1fr 1fr;
    gap:20px;
    justify-items:center;
    align-items: center;

    @media(max-width: 500px){
    grid-template-columns: 1fr ;
}
`

export const ButtonHome = styled.div`
text-align:center;
margin: 20px auto;
`


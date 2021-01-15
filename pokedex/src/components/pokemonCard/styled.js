import styled from 'styled-components';

export const ContainerCard = styled.div`
    display:flex;
    flex-direction: column;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    background:#DBD9D0;
    padding: 0 15px;
`
export const ContainerButtons = styled.div`
display:flex;
width:250px; 
justify-content:space-between;
margin: 20px 0;
`
export const NameCard = styled.p`
text-transform: uppercase;
font-weight:bold;

`

export const ContainerImage = styled.div`
display:flex;
width: 50%;
justify-content:center;
align-items: center;
border: 1px solid #eee;
`

export const Image = styled.img`
width: 100%;
`
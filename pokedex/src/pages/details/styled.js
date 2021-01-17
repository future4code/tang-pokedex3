import styled from "styled-components"


export const  Container = styled.div`
min-height: 80vh;

`
export const ContainerDetails = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 1px solid black;
  gap: 2em;
  margin: 10px;
  padding: 10px;

  @media(max-width: 500px){
    grid-template-columns: 1fr;
  }
`
export const ButtonHome = styled.div`
  margin: 20px auto;
`

export const ContainerButton = styled.div`
  display: flex;
`

export const ContainerImages = styled.div`
border: 1 px solid black;
background:#DBD9D0;
border-radius: 5px
`

export const ContainerImage = styled.div`
display: block;
text-align: center;
`

export const Image = styled.img`
width: 50%;
`
export const ContainerEstats = styled.div`
  display: flex;
  background:#DBD9D0;
  border-radius: 5px;
  padding: 15px;
  justify-content:space-between;
`
export const ContainerType = styled.div`
  display: flex;
  justify-content: space-around;
  background:#DBD9D0;
  border-radius: 5px;
  padding: 15px;
`
export const ContainerAtacks = styled.div`
  background:#DBD9D0;
  border-radius: 5px;
  padding: 15px;
  text-align: center;
`
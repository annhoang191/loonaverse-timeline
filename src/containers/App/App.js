import React from 'react'
import styled from 'styled-components'

import GlobalStyle from '../../theme/GlobalStyles'
import imageUrl from '../../assets/images/choerry_motion_1.jpg'

import ButtonAppBar from '../../components/Navigation/Navigation'

function App() {
  return (
    <>
      <GlobalStyle />
      <ButtonAppBar />
      <StyledAppContainer className="App" style={{backgroundImage: `url(${imageUrl})` }}>
        <StyledContent>
          <StyledParagraph>working on it to B#RN (or not)</StyledParagraph>
        </StyledContent>
      </StyledAppContainer>
    </>
  )
}

export default App;

const StyledAppContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
`

const StyledContent = styled.div `
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  color: #ffffff;
  position: relative;
`

const StyledParagraph = styled.p`
  margin: 0;
  position: absolute;
  top: 95%;
  transform: translate(0, -50%);
  font-size: 1.5em;
`

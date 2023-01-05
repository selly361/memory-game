import { Container, StartButton } from './styles'
import { GridSizeSelection, PlayersSelection, ThemeSelection } from 'components'

import React from 'react'
import { useNavigate } from 'react-router-dom'

function Settings() {
  const navigate = useNavigate()
  return (
    <Container>
        <ThemeSelection />
        <PlayersSelection />
        <GridSizeSelection />
        <StartButton onClick={() => navigate("/game")}>Start Game</StartButton>
    </Container>
  )
}

export default Settings
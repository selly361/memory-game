import { Container, StartButton } from './styles'
import { GridSizeSelection, PlayersSelection, ThemeSelection } from 'components'

import React from 'react'

function Settings() {
  return (
    <Container>
        <ThemeSelection />
        <PlayersSelection />
        <GridSizeSelection />
        <StartButton>Start Game</StartButton>
    </Container>
  )
}

export default Settings
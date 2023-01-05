import { PlayersSelection, ThemeSelection } from 'components'

import { Container } from './styles'
import React from 'react'

function Settings() {
  return (
    <Container>
        <ThemeSelection />
        <PlayersSelection />
    </Container>
  )
}

export default Settings
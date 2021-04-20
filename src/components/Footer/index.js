/**
  * Node Module Imports
**/
import React from 'react'
import zafClient from '../../zafClient'

/**
  * Component Imports
**/
import { Anchor } from '@zendeskgarden/react-buttons'

/**
  * Asset Imports
**/
// NO ASSETS

/**
  * The functional React component for creating the HTML Footer element
  *
  * @component      Footer    Footer React component
  * 
  * @return         {obj}     HTML component
**/
const Component = () => {
  return (
    <footer className="app-footer">
      <Anchor isExternal onClick={() => zafClient.invoke('routeTo', 'ticket', 'new')}>Report Issue.</Anchor>
    </footer>
  )
}

export default Component
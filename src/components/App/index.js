/**
  * Node Module Imports
**/
import React, { useEffect } from 'react'
import zafClient from '../../zafClient'

/**
  * Component Imports
**/
import Footer from '../Footer'

/**
  * Asset Imports
**/
// NO ASSETS

/**
  * The base functional component for ReactJS which contains all child components.
  *
  * @component      App       Base React component
  * 
  * @return         {obj}     HTML components
**/
const App = () => {
  const [userName, setUserName] = React.useState(null)

  useEffect(async () => {
    zafClient.invoke('resize', { height: '75px' })
    const data = await zafClient.get('currentUser.alias')
    const userName = data['currentUser.alias']
    setUserName(userName)
  }, [])

  return (
    <div className="App">
      <p className="user-name">{userName ? `Hi ${userName}!` : "Hmm... You don't have a name?"}</p>
      <Footer />
    </div>
  )
}

export default App

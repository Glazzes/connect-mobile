import React, {useEffect} from 'react'
import RRNBootSplash from 'react-native-bootsplash'
import {Provider as PaperProvider} from 'react-native-paper'
import StackNavigator from './src/navigation/StackNavigator'
import theme from './src/utils/Theme'
import {createDatabase, openDatabase} from './src/utils/DbUtils'

(openDatabase)()

const App = () => {
  useEffect(() => {
    (async() => {
      let table = await createDatabase()
      console.log(table)
    })()
    
    RRNBootSplash.hide({fade: true})
  })

  return (
    <PaperProvider theme={theme}>
      <StackNavigator />
    </PaperProvider>
  )
}

export default App
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default function TabTwoScreen() {
  return (
    <WebView
      style={styles.container}
      source={{
        uri: 'http://ns344762.ip-94-23-36.eu/files/Dictionnaire-Kabiye_Francais.pdf?dl=0',
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})

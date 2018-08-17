import { general, metrics, colors } from 'styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    ...general.box,
    flex: 1,
    alignItems: 'center',
    marginTop: metrics.baseMargin,
    maxWidth: (metrics.screenWidth - 60) / 2
  },
  avatar: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: metrics.baseMargin
  }
})

export default styles

import { general, metrics, colors } from 'styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    ...general.box,
    marginTop: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin
  },
  repoTitle: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: metrics.baseMargin
  },
  infoIcon: {
    color: colors.dark
  },
  infoText: {
    fontSize: 12,
    color: colors.dark,
    marginLeft: metrics.baseMargin / 2
  }
})

export default styles

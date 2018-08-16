import { colors, metrics } from 'styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: metrics.basePadding * 2,
    backgroundColor: colors.secondary
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    color: colors.light,
    textAlign: 'center'
  },
  form: {
    marginTop: metrics.baseMargin * 2
  },
  input: {
    height: 44,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding
  },
  button: {
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: metrics.baseMargin,
    backgroundColor: colors.primary,
    borderRadius: metrics.baseRadius
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.white
  },
  error: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.danger,
    marginTop: metrics.baseMargin
  }
})

export default styles

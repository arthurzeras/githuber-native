import { colors, metrics } from 'styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  description: {
    fontSize: 14,
    marginBottom: metrics.baseMargin
  },
  form: {
    flexDirection: 'row',
    width: metrics.screenWidth,
    padding: metrics.basePadding,
    justifyContent: 'space-between',
    backgroundColor: colors.darkTransparent
  },
  input: {
    fontSize: 16,
    color: colors.white
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  footer: {
    paddingBottom: metrics.basePadding
  },
  footerLink: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default styles

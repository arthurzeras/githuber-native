import { colors, metrics } from 'styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    height: 50,
    padding: 5,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.primary,
    paddingHorizontal: metrics.basePadding
  },
  input: {
    fontSize: 16,
    color: colors.white
  },
  inputButton: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles

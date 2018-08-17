import { metrics } from 'styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    marginTop: metrics.basePadding
  },
  columnContainer: {
    marginHorizontal: metrics.basePadding,
    justifyContent: 'space-between'
  }
})

export default styles

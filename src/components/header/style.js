import { StyleSheet } from 'aphrodite/no-important';
import commonStyles from '../style/commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.container,
  header: {
    textAlign: 'center',
    color: '#fff'
  },
  title: {
      color: commonStyles.colours.yellow
  }
});

export default styles;

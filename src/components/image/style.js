import { StyleSheet } from 'aphrodite/no-important';
import commonStyles from '../style/commonStyles';

const styles = StyleSheet.create({
  loader: commonStyles.loader,
  show: {
    opacity: 1,
    transition: 'opacity 0.5s'
  },
  hide: {
    opacity: 0
  }
});

export default styles;

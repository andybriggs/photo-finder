import { StyleSheet } from 'aphrodite/no-important';
import commonStyles from '../commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.container,
  photoList: {
    padding: 0
  },
  photoWrapper: {
    float: 'left',
    width: '32%',
    marginRight: '1%'
  },
  photo: {
    maxWidth: '100%'
  }
});

export default styles;

import { StyleSheet } from 'aphrodite/no-important';
import commonStyles from '../commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.container,
  gallery: {
    overflow: 'auto',
    marginBottom: 15
  },
  photoList: {
    padding: 0
  },
  photoWrapper: {
    float: 'left',
    width: '18%',
    marginRight: '2%',
    height: 100,
    overflow: 'hidden',
    marginBottom: 10,
    ':hover': {
      border: '5px solid #fab630'
    }
  },
  photo: {
    maxWidth: '100%'
  }
});

export default styles;

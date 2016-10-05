import { StyleSheet } from 'aphrodite/no-important';
import commonStyles from '../style/commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.container,
  loader: commonStyles.loader,
  gallery: {
    overflow: 'auto',
    marginBottom: 15
  },
  photoList: {
    padding: 0
  },
  photoWrapper: {
    position: 'relative',
    float: 'left',
    width: '18%',
    marginRight: '2.5%',
    height: 100,
    overflow: 'hidden',
    marginBottom: 10,
    border: '1px solid rgba(255,255,255,0.5)',
    ':nth-child(5n+5)': {
      marginRight: 0
    },
    ':hover': {
      border: `5px solid ${commonStyles.colours.yellow}`
    }
  },
  photo: {
    maxWidth: '100%',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)'
  }
});

export default styles;

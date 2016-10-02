import { StyleSheet } from 'aphrodite/no-important';
import commonStyles from '../style/commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.container,
  viewer: {
    position: 'relative'
  },
  imgWindow: {
    background: '#222',
    marginTop: 15,
    position: 'relative',
    height: 300,
    overflow: 'hidden'
  },
  img: {
    width:' 100%',
    maxWidth: 600,
    margin: '0 auto',
    display: 'block'
  },
  navList: {
    margin: 0,
    padding: 0
  },
  navButtonWrapper: {
    position: 'absolute',
    top: '50%',
    left: 35,
    listStyle: 'none',
    ':last-child': {
      left: 'auto',
      right: 35
    }
  },
  navButton: {
    color: '#fff',
    padding: '10px 15px',
    background: 'rgba(0,0,0,0.5)',
    borderRadius: '50%',
    border: '1px solid #fff',
    ':hover': {
      background: '#000',
      color: '#fab630'
    }
  }
});

export default styles;

import { StyleSheet } from 'aphrodite/no-important';
import commonStyles from '../commonStyles';

const styles = StyleSheet.create({
  container: commonStyles.container,
  pagination: {
    clear: 'both',
    textAlign: 'right',
    listStyle: 'none',
    padding: 0
  },
  linkWrap: {
    display: 'inline-block',
    marginLeft: 5
  },
  link: {
    color: '#fff',
    padding: 10,
    textDecoration: 'none',
    ':hover': {
      background: '#fab630'
    }
  }

});

export default styles;

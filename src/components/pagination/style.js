import { StyleSheet } from 'aphrodite/no-important';
import commonStyles from '../style/commonStyles';

const highlight = {
  background: commonStyles.colours.yellow,
  color: commonStyles.colours.black
};

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
    fontSize: 14
  },
  link: {
    color: '#fff',
    padding: 5,
    textDecoration: 'none',
    '@media only screen and (min-width: 390px)': {
      padding: 10
    },
    ':hover': highlight
  },
  linkActive: highlight
});

export default styles;

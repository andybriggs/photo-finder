import { StyleSheet } from 'aphrodite/no-important';

const styles = StyleSheet.create({
  form: {
    textAlign: 'left',
    position: 'relative'
  },
  input: {
    display: 'block',
    width: '100%',
    margin: '10px 0',
    padding: 5,
    height: 35,
    borderRadius: 3,
    border: 'none',
    fontSize: 16
  },
  button: {
    position: 'absolute',
    top: 30,
    right: 5,
    background: 'none',
    border: 'none',
    fontSize: 22,
    color: '#650a05',
    cursor: 'pointer'
  },
  buttonText: {
    display: 'inline-block',
    textIndent: '-9999px'
  }
});

export default styles;

import { CSSProperties } from 'react';

const buttonStyle: CSSProperties = {
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  select: {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
  },
  button: {
    ...buttonStyle,
    backgroundColor: '#007bff',
    cursor: 'pointer',
  },
  buttonDisabled: {
    ...buttonStyle,
    backgroundColor: '#000000',
    cursor: 'not-allowed',
  },
  loading: {
    color: '#999',
    fontSize: '16px',
    marginTop: '20px',
  },
  result: {
    color: '#28a745',
    fontSize: '24px',
    marginTop: '20px',
  },
};

export default styles;
import { CSSProperties } from 'react'

const buttonStyle: CSSProperties = {
  color: '#fff',
  border: 'none',
  padding: '10px 20px',
  fontSize: '16px',
}

const styles: { [key: string]: CSSProperties } = {
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
  select: {
    width: '100%',
    marginBottom: '20px',
    padding: '10px',
    fontSize: '16px',
  },
}

export default styles
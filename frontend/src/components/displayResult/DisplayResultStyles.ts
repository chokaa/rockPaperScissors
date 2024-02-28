import { CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  container: {
    maxWidth: '400px',
    margin: 'auto',
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    color: '#333',
    fontSize: '24px',
    marginBottom: '20px',
  },
  resultList: {
    listStyleType: 'none',
    padding: '0',
  },
  resultItem: {
    fontSize: '18px',
    marginBottom: '5px',
  },
  addButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    fontSize: '16px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '20px',
  },
};

export default styles;
import React from 'react';
import styles from './styles';

function ButtonComponent() {
  return (
    <div style={styles.container}>
      <button style={{ ...styles.button, ...styles.buttonPrimary }}>Кнопка 1</button>
      <button style={{ ...styles.button, ...styles.buttonSecondary }}>Кнопка 2</button>
    </div>
  );
}

export default ButtonComponent;

// 101
// function ButtonComponent() {
//   return (
//     <div
//       style={{
//         display: 'flex',
//         gap: '10px',
//         justifyContent: 'center',
//         padding: '20px',
//       }}
//     >
//       <button
//         style={{
//           padding: '10px 20px',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           backgroundColor: '#4CAF50',
//           color: 'white',
//         }}
//       >
//         Кнопка 1
//       </button>
//       <button
//         style={{
//           padding: '10px 20px',
//           border: 'none',
//           borderRadius: '5px',
//           cursor: 'pointer',
//           backgroundColor: '#f44336',
//           color: 'white',
//         }}
//       >
//         Кнопка 2
//       </button>
//     </div>
//   );
// }

// export default ButtonComponent;

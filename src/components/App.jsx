import React from 'react';
import ColorPicer from './ColorPicer';

const color = [
  {
    label: 'Червоний',
    color: '#FF0000',
  },
  {
    label: 'Жовтий',
    color: '#FCFF00',
  },
  {
    label: 'Зелений',
    color: '#00FF2C',
  },
  {
    label: 'Синій',
    color: '#001DFF',
  },
  {
    label: 'Рожевий',
    color: '#FE5050',
  },
  {
    label: 'Фіолетовий',
    color: '#F250FE',
  },
  {
    label: 'Бірюзовий',
    color: '#50FEEB',
  },
];

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <ColorPicer color={color} />
    </div>
  );
};

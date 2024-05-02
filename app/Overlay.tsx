import React, { useState } from 'react';


const Overlay: React.FC<{ isOpen: boolean }> = ({ isOpen }) => {
 if (!isOpen) return null;

 return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 30,
      }}
    />
 );
};

export default Overlay;
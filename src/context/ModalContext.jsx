import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const openDetailModal = (product) => {
    setActiveModalProduct(product);
  };

  const closeDetailModal = () => {
    setActiveModalProduct(null);
  };

  return (
    <ModalContext.Provider value={{ activeModalProduct, openDetailModal, closeDetailModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

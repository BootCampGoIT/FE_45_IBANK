import React, { useEffect } from "react";
import { ModalContainer } from "./ModalStyled";

const Modal = ({ toggleModal, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", closeModal);
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", closeModal);
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    };
  });

  const closeModal = (e) => {
    if (e.code === "Escape") {
      toggleModal();
    }
  };
  const onHandleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };
  return (
    <ModalContainer onClick={onHandleBackdropClick}>
      <div className='Modal'>
        {children}
        <button type='button' className='modalBtn' onClick={toggleModal}>
          Close
        </button>
      </div>
    </ModalContainer>
  );
};

export default Modal;


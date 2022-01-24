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

//   import React, { Component } from "react";
//   import { ModalContainer } from "./ModalStyled";
//   class Modal extends Component {

//   componentDidMount() {
//     window.addEventListener("keydown", this.closeModal);
//     const body = document.querySelector("body");
//     body.style.overflow = "hidden";
//   }
//   componentWillUnmount() {
//     window.removeEventListener("keydown", this.closeModal);
//     const body = document.querySelector("body");
//     body.style.overflow = "auto";
//     closed = true;
//   }

//   closeModal = (e) => {
//     if (e.code === "Escape") {
//       this.props.toggleModal();
//       setTimeout(() => {
//         !closed && this.setState({ test: "Hello" });
//       }, 5000);
//     }
//   };
//   onHandleBackdropClick = (e) => {
//     if (e.target === e.currentTarget) {
//       this.props.toggleModal();
//     }
//   };

//   render() {
//     const { children, toggleModal } = this.props;
//     return (
//       <ModalContainer onClick={this.onHandleBackdropClick}>
//         <div className='Modal'>
//           {children}
//           <button type='button' className='modalBtn' onClick={toggleModal}>
//             Close
//           </button>
//         </div>
//       </ModalContainer>
//     );
//   }
// }

// export default Modal;

// const constructor = (initialValue) => {
//   return (step) => {
//     initialValue += step;
//     console.log(initialValue);
//   };
// };

// const qqqqq = constructor(20);
// qqqqq(50);
// qqqqq(50);
// qqqqq(50);
// qqqqq(50);
// qqqqq(50);
// qqqqq(50);
// qqqqq(50);
// qqqqq(50);

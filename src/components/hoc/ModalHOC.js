import React, { Component } from "react";

const modalHOC = (WrappedComponent) => {
  return class ModalHOC extends Component {
    state = {
      isVisible: false,
    };
    onHandleClick = () => {
      this.setState((prev) => ({ isVisible: !prev.isVisible }));
    };

    render() {
      const { isVisible } = this.state;
      return (
        <section>
          <button type='button' onClick={this.onHandleClick}>
            {isVisible ? "Hide" : "Show"}
          </button>
          {isVisible && <WrappedComponent />}
        </section>
      );
    }
  };
};

export default modalHOC;

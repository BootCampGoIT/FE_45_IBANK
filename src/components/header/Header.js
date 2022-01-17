import React, { Component } from "react";
import Navigation from "../navigation/Navigation";
import { HeaderWrapper } from "./HeaderStyled";
import sprite from "../../assets/header/headerSprite.svg";
import axios from "axios";
import Modal from "../modal/Modal";

class Header extends Component {
  state = {
    width: window.innerWidth,
    breakPoint: 768,
    isModalOpen: false,
  };

  componentDidMount() {
    window.addEventListener("resize", this.resizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeWindow);
  }
  resizeWindow = () => {
    this.setState((prev) => ({
      width: window.innerWidth,
      isModalOpen:
        this.state.width < this.state.breakPoint ? prev.isModalOpen : false,
    }));
  };
  toggleModal = () => {
    this.setState((prev) => ({ isModalOpen: !prev.isModalOpen }));
  };

  render() {
    console.log("Render");
    return (
      <HeaderWrapper>
        <h3 style={{ color: "cornflowerblue" }}>IBANK</h3>
        {this.state.width < this.state.breakPoint ? (
          <svg className='iconMenu' onClick={this.toggleModal}>
            <use href={sprite + "#icon-menu"} />
          </svg>
        ) : (
          <Navigation />
        )}
        {this.state.isModalOpen && (
          <Modal toggleModal={this.toggleModal}>
            <h2>Hello Modal!!!</h2>
          </Modal>
        )}
      </HeaderWrapper>
    );
  }
}

export default Header;

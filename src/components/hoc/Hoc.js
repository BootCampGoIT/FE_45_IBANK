import React, { Component } from "react";

const wrapper = (value) => (WrappedComponent) => {
  return class Hoc extends Component {
    state = {
      list: [],
    };
    componentDidMount() {
      this.setState((prev) => ({ list: [...prev.list, value] }));
    }
    render() {
      return (
        <>
          <WrappedComponent {...this.state} />
        </>
      );
    }
  };
};

export default wrapper;



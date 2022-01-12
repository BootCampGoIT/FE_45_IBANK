import React, { Component } from "react";
import SectionComponent from "./SectionComponent";

const newData = {
  student: { name: "Vlad" },
  lector: { name: "Vlada" },
};

const sections = ["students", "lectors"];

class ClassComponent extends Component {
  state = {
    students: {
      items: [{ name: "Alex" }, { name: "Nikita" }],
      visibility: false,
    },

    lectors: {
      items: [{ name: "Bob" }, { name: "John" }],
      visibility: false,
    },
  };
  // mentors: [{ name: "Andrii" }, { name: "Anna" }],
  setVisibility = (e) => {
    const name = e.target.name;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        visibility: !prevState[name].visibility,
      },
    }));
  };
  addItem = (e) => {
    // const { name } = e.target;
    const name = e.target.name;

    this.setState((prevState) => ({
      [name]: {
        ...prevState[name],
        items: [
          ...prevState[name].items,
          newData[name.slice(0, name.length - 1)],
        ],
      },
    }));
  };
  getStateSlice = (section, key) => this.state[section][key];

  render() {
    return (
      <>
        {sections.map((section) => (
          <SectionComponent
            section={section}
            visibility={this.getStateSlice(section, "visibility")}
            items={this.getStateSlice(section, "items")}
            setVisibility={this.setVisibility}
            addItem={this.addItem}
            key={section}
          />
        ))}
      </>
    );
  }
}

export default ClassComponent;

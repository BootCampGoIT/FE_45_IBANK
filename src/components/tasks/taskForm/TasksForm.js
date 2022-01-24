
import React, { useState } from "react";


const initialState = {
  name: "",
  description: "",
};

const TasksForm = ({ addTask }) => {
  const [state, setState] = useState(initialState);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTask(state);
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label>
          Name:
          <input
            type='text'
            value={state.name}
            name='name'
            onChange={onHandleChange}
          />
        </label>
        <label>
          Description:
          <textarea
            value={state.description}
            name='description'
            onChange={onHandleChange}
          />
        </label>
        <button type='submit'>Add task</button>
      </form>
    </>
  );
};

export default TasksForm;

// class TasksForm extends Component {
//   state = {
//     state={

//     }
//    }
//   render() {
//     return (

//     );
//   }
// }

// export default TasksForm;

// import React, { Component } from "react";

// const initialState = { name: "", description: "" };

// class TasksForm extends Component {
//   state = initialState;

//   onHandleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };
//   onHandleSubmit = (e) => {
//     e.preventDefault();
//     this.props.addTask(this.state);
//     this.props.toggleModal();
//   };
//   render() {
//     return (
// <form onSubmit={this.onHandleSubmit}>
//   <label>
//     Name:
//     <input
//       type='text'
//       value={this.state.name}
//       name='name'
//       onChange={this.onHandleChange}
//     />
//   </label>
//   <label>
//     Description:
//     <textarea
//       value={this.state.description}
//       name='description'
//       onChange={this.onHandleChange}
//     />
//   </label>
//   <button type='submit'>Add task</button>
// </form>
//     );
//   }
// }

// export default TasksForm;

// const getResult = (initialValue) => {
//   let value = initialValue;

//   const setValue = (step) => {
//     value += step;
//     console.log(value);
//   };

//   return [value, setValue];
// };
// getResult.test = "Hello";
// console.dir(getResult);

// const [value, setValue] = getResult(0);

// setValue(10);
// setValue(10);
// setValue(10);
// setValue(10);
// console.log(value);

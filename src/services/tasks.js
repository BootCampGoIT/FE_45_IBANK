import axios from "axios";

const getAllTasks = async () => {
  try {
    const response = await axios.get(
      process.env.REACT_APP_BASE_URL + "/tasks.json"
    );
    const tasks = Object.keys(response.data).map((key) => ({
      id: key,
      ...response.data[key],
    }));
    return tasks;
  } catch (error) {
    throw new Error(error.message);
  }
};

const addNewTask = async (task) => {
  try {
    const response = await axios.post(
      process.env.REACT_APP_BASE_URL + "/tasks.json",
      task
    );
    return response.data.name; //id
  } catch (error) {
    throw new Error(error.message);
  }
};

const removeTaskItem = async (id) => {
  try {
    await axios.delete(process.env.REACT_APP_BASE_URL + `/tasks/${id}.json`);
  } catch (error) {
    throw new Error(error.message);
  }
};

export { addNewTask, getAllTasks, removeTaskItem };

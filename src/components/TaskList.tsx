import { useEffect, useState } from "react";
import Task from "./Task";

interface ITaskJson {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

const TaskList = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setTasks(data.splice(0, 10).map((e: ITaskJson) => e.title));
      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();

    return () => console.log('Компонент размонтирован');
  }, []);

  const deleteTask = (i: number) => {
    const tasksCopy = [...tasks];
    tasksCopy.splice(i, 1);
    setTasks(tasksCopy);
  };

  const addTask = () => {
    if (newTask.trim()) {
      const tasksCopy = [...tasks];
      tasksCopy.push(newTask);
      setTasks(tasksCopy);
    }
    setNewTask("");
  };

  return (
    <div className="img-container"> 
      <h1 className="text-center" style={{ margin: "50px" }}>
        Todo List App
      </h1>
      <div style={{ margin: "0 auto" }} className="w-50 d-flex">
        <input
          className="form-control"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Введите новую задачу..."
        />
        <button
          style={{ width: "160px" }}
          className="btn btn-secondary"
          onClick={addTask}
        >
        Add Task
        </button>
      </div>
      <div className="d-flex flex-column text-center">
        {tasks.map((task, i) => (
          <Task key={Math.random()} title={task} del={() => deleteTask(i)} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;

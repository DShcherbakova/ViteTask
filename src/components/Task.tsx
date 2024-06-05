import { useRef, useState, FC } from "react";

interface ITaskProps {
  title: string;
  del: () => void;
}

const Task: FC<ITaskProps> = ({ title, del }) => {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [updatedTask, setUpdatedTask] = useState<string>(title);

  const textId = useRef<HTMLTextAreaElement>(null);

  const handleClickSave = () => {
    setUpdatedTask(textId.current!.value);
    setIsEdit(false);
  };

  if (isEdit) {
    return (
      <>
        <div className="task-container">
          <textarea ref={textId} defaultValue={updatedTask}></textarea>
          <button className="btn green" onClick={handleClickSave}>
            Save
          </button>
        </div>
      </>
    );
  } else {
    return (
      <div
        className="border border-black border-1 w-50"
        style={{ margin: "0.5px auto" }}
      >
        <p className="mt-3">{updatedTask}</p>
        <div className="d-flex justify-content-between mt-auto mb-3">
          <button
            className="btn beige flex-fill mx-1"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
          <button className="btn red flex-fill mx-1" onClick={del}>
            Delete
          </button>
        </div>
      </div>
    );
  }
};

export default Task;

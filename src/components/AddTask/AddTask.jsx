import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({tasklist,task,settask,settasklist }) => {

  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" placeholder="Add Task...." type="text" onChange={(e) => { settask(e.target.value) }}></input>
      <button data-cy="add-task-button" onClick={() => {
        settasklist([...tasklist, task])
        
      }
      }>add</button>
    </div>
  );
};

export default AddTask;

import AddTask from "./AddTask/AddTask";
import React, { useState } from "react";

import styles from "./taskApp.module.css";
import TaskHeader from "./TaskHeader/TaskHeader";
import { Tasks } from "./Tasks";

const TaskApp = () => {
  const [task, settask] = useState("");
  const [tasklist, settasklist] = useState([]);

  return (
    <div data-cy="task-app" className={styles.taskApp}>
      <TaskHeader />
      <AddTask settask={settask} task={task} tasklist={tasklist} settasklist={settasklist} />
      <Tasks tasklist={tasklist} />
    </div>
  );
};

export default TaskApp;

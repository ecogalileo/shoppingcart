import React, { useState } from 'react';

const Task = ({ addTaskLog }) => {
  const [taskDesc, setTaskDesc] = useState(); //taskdesc is a [object name] and setTaskDesc is a [function]
  const [taskUser, setTaskUser] = useState();
  const [taskDate, setTaskDate] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    addTaskLog([taskDesc, taskUser, taskDate]);
  };

  return (
    <div>
      <form action="" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="" class="mx-3">Task Description:</label>
        <input
          type="text"
          value={taskDesc}//value is to display the user input
          onChange={e => setTaskDesc(e.target.value)}//onchange to update the state of the input type
        />

        <label htmlFor="" class="mx-3">Assignment to:</label>
        <input
          type="text"
          value={taskUser}
          onChange={e => {
            setTaskUser(e.target.value);
          }}
        />

        <label htmlFor="" class="mx-3">Date</label>
        <input
          type="date"
          class="mx-3"
          value={taskDate}
          onChange={e => {
            setTaskDate(e.target.value);
          }}
        />

        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default Task;

import React from 'react';

const TaskDisplay = props => {
  return (
    <div>
      <table class="container text-center mt-5 table table-striped table-hover">
        <thead>
          <tr>
            <th><h3>Task Description</h3></th>
            <th><h3>Name</h3></th>
            <th><h3>Task Date</h3></th>
          </tr>
        </thead>
        <tbody>
          {props.taskLog.map(item => (
            <tr>
              <td><h4>{item[0]}</h4></td>
              <td><h4>{item[1]}</h4></td>
              <td><h4>{item[2]}</h4></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskDisplay;

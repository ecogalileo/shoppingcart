// import { useState } from 'react';
import '../App.css';
// import Timer from './Timer';
// import DisplayList from './DisplayList';
// import Task from './Task';
// import TaskDisplay from './TaskDisplay';
// import InventoryForm from './InventoryForm';
import InventoryTracker from './InventoryTracker';

const Main = () => {
  // const [taskLog, setTaskLog] = useState([]);
  // const addTaskLog = log => {
  //   let logs = [...taskLog, log];
  //   setTaskLog(logs);
  // };

  return (
    <main>
    <div class="container text-center mt-5">
      {/* <Timer /> */}
      {/* <DisplayList /> */}

      <InventoryTracker />
      {/* <InventoryForm /> */}
      
      {/* <Task addTaskLog={addTaskLog} />
      <TaskDisplay taskLog={taskLog} /> */}
    </div>
    </main>
  );
};

export default Main;

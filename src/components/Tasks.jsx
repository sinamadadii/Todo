import React from 'react';
import TaskFunction from './Task';

const Tasks = ({ allTasks, deleteTask }) => {
    return (
        <div>
            {allTasks.map(pox => (
                <TaskFunction
                    key={pox.id}
                    title={pox.title}
                    deleteTask={() => deleteTask(pox.id)}

                />
            ))}
        </div>
    );
}

export default Tasks;
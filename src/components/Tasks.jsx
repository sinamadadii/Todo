import React from 'react';
import TaskFunction from './Task';

const Tasks = ({ allTasks, deleteTask, editTask }) => {
    return (
        <div>
            {allTasks.map(index => (
                <TaskFunction
                    key={index.id}
                    title={index.title}
                    deleteTask={() => deleteTask(index.id)}
                    editTask={(event) => editTask(event, index.id)}
                />
            ))}
        </div>
    );
}

export default Tasks;
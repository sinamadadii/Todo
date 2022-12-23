import React, { Component } from 'react';
import Tasks from './components/Tasks';

class App extends Component {
    state = {
        allTasks: [
            { id: 1, title: 'Work from home' },
            { id: 2, title: 'Go to gym' },
            { id: 3, title: 'Learning English' }
        ],
        // showTasks: false,
    }
    deleteTask = id => {
        const tasksCopy = [...this.state.allTasks];
        const filteredTasks = tasksCopy.filter(p => p.id !== id);
        this.setState({ tasksCopy: filteredTasks });
    }

    render() {
        const { showTasks, allTasks } = this.state;

        // if (showTasks) {
        //     taskFunction = (

        //     )
        // }


        return (
            <div className='text-center'>
                <div className='alert bg-primary text-white'>
                    <h1>Todo App</h1>
                </div>
                <div className='card text-white bg-light mb-3 mt-3 w-50 mx-auto'>
                    <div className='card-body text-center'>
                        <div className=' justify-content-center'>
                            <input
                                className='form-control'
                                type="text"
                                placeholder='Enter your task sexy  ;)'//task name 
                            //  onChange=//edit 
                            />
                            <div className='input-group-prepend justify-content-center text-center'>
                                <button className='btn btn-primary mt-3'>Add</button>
                            </div>
                        </div>
                    </div>
                </div>
                <Tasks
                    allTasks={allTasks}
                    deleteTask={this.deleteTask}
                />
            </div>
        );
    }
}

export default App;
import React, { Component } from 'react';

class App extends Component {
    state = {

    }
    render() {

        return (
            <div className='text-center'>
                <div className='alert alert-primary'>
                    <h1>Todo App</h1>
                </div>
                <div className='card text-white bg-primary mb-3 mt-3 w-25 mx-auto'>
                    <div className='card-body text-center'>
                        <div className=' justify-content-center'>
                            <input
                                className='form-control '
                                type="text"
                                placeholder='write your task here sexy :)'//task name 
                            //  onChange=//edit 
                            />
                            <div className='input-group-prepend justify-content-center text-center'>
                                <button className='btn btn-success mt-3'>Add it </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
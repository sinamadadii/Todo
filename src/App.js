import React, { Component } from 'react';

class App extends Component {
    state = {

    }
    render() {

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
                                placeholder='write your task here sexy :)'//task name 
                            //  onChange=//edit 
                            />
                            <div className='input-group-prepend justify-content-center text-center'>
                                <button className='btn btn-success mt-3'>Add it </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="input-group input-group-lg w-50 mx-auto">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Task">
                    </input>
                    <button class="btn btn-info fa fa-check-circle" type="button"></button>
                    <button class="btn btn-danger fa fa-trash" type="button"></button>
                </div>
            </div>
        );
    }
}

export default App;
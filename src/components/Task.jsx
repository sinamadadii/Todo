import React from 'react';


const taskFunction = ({ title, deleteTask }) => {
    return (
        <div class="input-group input-group-lg w-50 mx-auto mb-3">
            <input
                type="text"
                class="form-control strikethrough"
                value={`${title}`}>
            </input>
            <button class="btn btn-info fa fa-check-circle" type="button" ></button>
            <button class="btn btn-danger fa fa-trash" type="button" onClick={deleteTask} ></button>
        </div>
    );
}

export default taskFunction;
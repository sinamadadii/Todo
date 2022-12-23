import React from 'react';


const taskFunction = ({ title, deleteTask, editTask }) => {

    return (
        <div>
            {/* <button onClick={handleClick}>line-through</button> */}

            <div class="input-group input-group-lg w-50 mx-auto mb-3">
                <input
                    type="text"
                    class="form-control strikethrough"
                    value={`${title}`}
                    placeholder={title}
                    onChange={editTask}
                >
                </input>
                <button class="btn btn-info fa fa-check-circle" type="button" ></button>
                <button class="btn btn-danger fa fa-trash" type="button" onClick={deleteTask} ></button>
            </div>

        </div>
    );
    //line-through
    // const handleClick = event => {
    //     if (event.target.style.textDecoration) {
    //         event.target.style.removeProperty('text-decoration');
    //     } else {
    //         event.target.style.setProperty('text-decoration', 'line-through');
    //     }
    // };
}

export default taskFunction;
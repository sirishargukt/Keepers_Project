// Note.jsx
import React from "react";
// import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
    function deleitem() {
        props.ondelete(props.id);
    }

    return (
        <div className="class">
            <h4>{props.title}</h4>
            <p>{props.content}</p>
            <button onClick={deleitem} >Add
            </button>
        </div>
    );
}

export default Note;
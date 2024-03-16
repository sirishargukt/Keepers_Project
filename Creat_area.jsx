// Create_area.jsx

import React, { useState } from 'react';

function Area(props) {
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    function handleEvent(event) {
        const { name, value } = event.target;
        setNote(prevNote => ({
            ...prevNote,
            [name]: value
        }));
    }

    function submitnote(event) {
        props.onAdd(note);
        event.preventDefault();
        setNote({  // Clear the input fields after submitting the text
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form className=''>
                <input type="text"
                    name="title"
                    value={note.title}
                    onChange={handleEvent}
                    placeholder="Add Title...."
                    style={{ fontWeight: 'bold', width: '300px' ,border:'none'}}>
                </input>
                <textarea
                    name="content"
                    value={note.content}
                    onChange={handleEvent}
                    placeholder="Take a note..."
                    rows="3"
                    style={{ fontWeight: 'bold', width: '300px', marginTop: '10px',border:'none' }}><br></br>
                </textarea><br></br>
                <button className="add_button" onClick={submitnote} style={{ backgroundColor: 'black', borderRadius: 3,color:'white', marginTop: '10px' ,padding:'5px'}}>Add</button>
            </form>
        </div>
    );
}

export default Area;

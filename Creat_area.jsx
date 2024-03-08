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
        setNote({
            title: "",
            content: ""
        });
    }

    return (
        <div>
            <form className=''>
            <input type="text" 
             name="title"
             onChange={handleEvent}  
             placeholder="Title" 
             style={{ fontWeight: 'bold', width: '200px' }}>
            </input>
            <textarea 
            name="content" 
            onChange={handleEvent} 
             placeholder="Take a note..." 
             rows="3"
             style={{ fontWeight: 'bold', width: '300px' }}>
            </textarea>
            <button onClick={submitnote} style={{ backgroundColor: 'orange', borderRadius: 3 }}>Add</button>
            </form>
        </div>
        
    );
}

export default Area;
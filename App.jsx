// App.jsx
import React, { useState } from 'react';
import Area from './Creat_area.jsx';
import Note from './Note.jsx';

function App() {
    const [notes, setnote] = useState([]);

    function addnote(Newnote) {
        setnote(previtem => {
            return [...previtem, Newnote];
        });
    }

    function deleteitem(id) {
        setnote(prevnote => {
            return prevnote.filter((item, index) => index !== id);
        });
    }

    return (
        <div className="Container">
            <div className="heading">
                <header>
                    <h1>Keepers</h1>
                </header>
            </div>
            <div className="card">
                <Area onAdd={addnote} />
                {notes.map((noteitem, index) => (
                    <Note
                        key={index}
                        id={index}
                        title={noteitem.title}
                        content={noteitem.content}
                        ondelete={deleteitem}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;

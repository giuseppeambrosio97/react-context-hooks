import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from './NewSongForm';

const SongList = () => {
    const [songs, setSongs] = useState([
        { title: "Song", id: 1 },
        { title: "Song1", id: 2 },
        { title: "Song2", id: 3 },
    ]);

    const [age, setAge] = useState(20);

    useEffect(()=>{
        console.log("useeffect run songs ", songs);
    },[songs]);
    useEffect(()=>{
        console.log("useeffect run age ", age);
    },[age]);

    const addSong = (title) => {
        setSongs([...songs, { title, id: uuidv4() }]);
    };
    return (
        <div className="song list">
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>);
                })}
            </ul>
            <NewSongForm addSong={addSong}/>
            <button onClick={()=>{setAge(age+1)}}>Add 1 to age: {age}</button>
        </div>
    );
}

export default SongList;
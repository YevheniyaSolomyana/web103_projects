import React, { useState, useEffect } from 'react';
import '../App.css';
import MiceAPI from '../services/MiceAPI';
import { useParams } from 'react-router-dom';

const MouseDetails = () => {
    const { id } = useParams();
    const [mouse, setMouse] = useState({ id: 0, name: '', color: '', feature: '', scrolltype: '' });

    useEffect(() => {
        const fetchMouseById = async () => {
            const mouseData = await MiceAPI.getMouseById(id);
            setMouse(mouseData);
        };
        fetchMouseById();
    }, [id]);

    const deleteOnSubmit = async (event) => {
        event.preventDefault();
        try {
            const deletedMouse = await MiceAPI.deleteMouse(id);
            console.log('Mouse deleted');
            window.location = '/viewmice';
        } catch (error) {
            console.log('Mouse was not deleted:', error);
        }
    };

    return (
        <div>
            <main id="mouse-content" className="mouse-info">
                <div className="top-container">
                    <a href={`/edit/${id}`} role="button">Edit</a>
                    <button onClick={deleteOnSubmit}>Delete</button> 
                </div>
                <div className="mouse-details">
                    <h2 id="name">{mouse.name}</h2>
                    <p id="color">{'Color: ' + mouse.color}</p>
                    <p id="feature">{'Feature: ' + mouse.feature}</p>
                    <p id="scrolltype">{'Scroll Type: ' + mouse.scrolltype}</p>
                </div>
            </main>
        </div>
    );
};

export default MouseDetails;

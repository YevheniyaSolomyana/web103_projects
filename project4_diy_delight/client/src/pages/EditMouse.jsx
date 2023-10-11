import React, { useState, useEffect } from 'react'
import '../App.css'
import MiceAPI from '../services/MiceAPI'
import { useParams } from 'react-router-dom'

const EditMouse = () => {
    const { id } = useParams()
    const [mouse, setMouse] = useState({ id: 0, name: '', color: '', feature: '', scrolltype: '' });

    useEffect(() => {
        const fetchMouseById = async () => {
            const response = await MiceAPI.getMouseById(id)
            setMouse(response)
        }
        fetchMouseById()
    }, [id])

    const handleChange = (event) => {
        const { name, value } = event.target

        setMouse((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const updateMousee = async (event) => {
        event.preventDefault()
        try {
            const updatedMouse = await MiceAPI.updateMouse(id, mouse)
            console.log('Mouse updated')
            window.location = '/viewmice'
        } catch (error) {
            console.log('Mouse was not updated:', error)
        }
        console.log(mouse)
    }

    const deleteOnSubmit = async (event) => {
        event.preventDefault();
        try {
            const deletedMouse = await MiceAPI.deleteMouse(id);
            console.log('Mouse deleted');
            window.location = '/viewmice';
        } catch (error) {
            console.log('Mouse was not deleted:', error);
        }
    }


    return (
        <div className='CreateMouse'>
            <form onSubmit={updateMousee}>
                <button type="submit">Update</button>
                <button onClick={deleteOnSubmit}>Delete</button>
                <input type='text' id='name' name='name' value={mouse.name} placeholder='Name...' onChange={handleChange} /> <br />
                <br />

                <label>Color:</label> <br />
                <ul>
                    <li>
                        <input
                            type="radio"
                            name="color"
                            value="White"
                            checked={mouse.color === 'White'}
                            onChange={handleChange}
                        />
                        White
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="color"
                            value="Black"
                            checked={mouse.color === 'Black'}
                            onChange={handleChange}
                        />
                        Black
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="color"
                            value="Graphite"
                            checked={mouse.color === 'Graphite'}
                            onChange={handleChange}
                        />
                        Graphite
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="color"
                            value="Gold"
                            checked={mouse.color === 'Gold'}
                            onChange={handleChange}
                        />
                        Gold
                    </li>
                </ul>
                <br />

                <label>Features:</label> <br />
                <ul>
                    <li>
                        <input
                            type="checkbox"
                            name="feature"
                            value="Silent Clicks"
                            checked={mouse.feature.includes('Silent Clicks')}
                            onChange={handleChange}
                        />
                        Silent Clicks
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="feature"
                            value="Easy-Switch Technology"
                            checked={mouse.feature.includes('Easy-Switch Technology')}
                            onChange={handleChange}
                        />
                        Easy-Switch Technology
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="feature"
                            value="Rechargeable"
                            checked={mouse.feature.includes('Rechargeable')}
                            onChange={handleChange}
                        />
                        Rechargeable
                    </li>
                    <li>
                        <input
                            type="checkbox"
                            name="feature"
                            value="Darkfied Tracking"
                            checked={mouse.feature.includes('Darkfied Tracking')}
                            onChange={handleChange}
                        />
                        Darkfied Tracking
                    </li>
                </ul>
                <br />

                <label>Scroll Types:</label> <br />
                <ul>
                    <li>
                        <input
                            type="radio"
                            name="scrolltype"
                            value="Smart Wheel"
                            checked={mouse.scrolltype === 'Smart Wheel'}
                            onChange={handleChange}
                        />
                        Smart Wheel
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="scrolltype"
                            value="Hyper-fast Scroll"
                            checked={mouse.scrolltype === 'Hyper-fast Scroll'}
                            onChange={handleChange}
                        />
                        Hyper-fast Scroll
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="scrolltype"
                            value="Smartshift"
                            checked={mouse.scrolltype === 'Smartshift'}
                            onChange={handleChange}
                        />
                        Smartshift
                    </li>
                    <li>
                        <input
                            type="radio"
                            name="scrolltype"
                            value="Thumb Wheel"
                            checked={mouse.scrolltype === 'Thumb Wheel'}
                            onChange={handleChange}
                        />
                        Thumb Wheel
                    </li>
                </ul>
                <br />
            </form>
        </div>
    )
}

export default EditMouse
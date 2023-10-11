import React from 'react'
import '../App.css'
import { useState } from 'react'
import MiceAPI from '../services/MiceAPI'
import { isValidCombination } from '../utilities/validation'

const CreateMouse = () => {
    const [mouse, setMouse] = useState({ id: 0, name: '', color: '', feature: '', scrolltype: '' })

    const handleChange = (event) => {
        const { name, value } = event.target

        setMouse((prev) => {
            return { ...prev, [name]: value }
        })
    }

    const createMouse = async (event) => {
        event.preventDefault()
        console.log(mouse)
        if (!isValidCombination(mouse)) {
            window.alert('Invalid feature combination')
            return;
        }
        try {
            const createdMouse = await MiceAPI.createMouse(mouse)
            console.log('Mouse created')
            window.location = '/viewmice'
        } catch (error) {
            console.log('Mouse was not created:', error)
        }
    }

    return (
        <div className='CreateMouse'>
            <form onSubmit={createMouse}>
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

                <button type="submit">Create</button>
            </form>
        </div>
    )
}

export default CreateMouse
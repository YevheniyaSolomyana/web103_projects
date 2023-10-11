import { useEffect, useState } from "react"
import MiceAPI from "../services/MiceAPI"

const Card = (props) => {
    const [mouse, setMouse] = useState({ id: 0, name: '', color: '', feature: '', scrolltype: '' })

    useEffect(() => {
        setMouse({id: props.id, name: props.name, color: props.color, feature: props.feature, scrolltype: props.scrolltype})
    }, [props])

    const deleteOnSubmit = async (event) => {
        event.preventDefault();
        try {
            const deletedMouse = await MiceAPI.deleteMouse(mouse.id);
            console.log('Mouse deleted');
            window.location = '/viewmice';
        } catch (error) {
            console.log('Mouse was not deleted:', error);
        }
    }

    return (
        <div className="card">
            <div className="top-container">
                <a href={`/viewmice/${mouse.id}`} role="button">Details</a>
            </div>
            <div className="bottom-container">
                <p>{'Name: ' + mouse.name}</p>
                <p>{'Color: ' + mouse.color}</p>
                <p>{'Feature: ' + mouse.feature}</p>
                <p>{'Scroll Type: ' + mouse.scrolltype}</p>
            </div>
            <div>
                <a href={`/edit/${mouse.id}`} role="button">Edit</a>
                <button onClick={deleteOnSubmit}>Delete</button>
            </div>
        </div>
    )
}

export default Card;
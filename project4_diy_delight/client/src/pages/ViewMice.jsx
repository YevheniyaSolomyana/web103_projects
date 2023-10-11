import React, { useEffect, useState } from 'react'
import '../App.css'
import MiceAPI from '../services/MiceAPI'
import Card from '../components/Card.jsx'

const ViewMice = () => {
    const [mice, setMice] = useState([])

    useEffect(() => {
        const fetchMice = async () => {
            const miceData = await MiceAPI.getAllMice()
            setMice(miceData)
        }
        fetchMice()
    }, [])

    return (
        <div>
            <main>
                {
                    mice && mice.length > 0 ?
                        mice.map((mouse, index) =>

                            <Card id={mouse.id}
                                name={mouse.name}
                                color={mouse.color}
                                feature={mouse.feature}
                                scrolltype={mouse.scrolltype} />

                        ) : <h3 className="noResults">{'No Mice Yet 😞'}</h3>
                }
            </main>
        </div>
    )
}

export default ViewMice
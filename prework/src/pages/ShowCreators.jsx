import { useEffect, useState } from "react"
import Card from "../components/Card"

const ShowCreators = (props) => {
    const [creators, setCreators] = useState([])

    useEffect(() => {
        setCreators(props.data)
    }, [props])

    return (
        <div className="ReadPlayers">
            {
                creators && creators.length > 0 ?
                creators.map((creator) => 
                    <Card id={creator.id} name={creator.name} url={creator.url} description={creator.description}/>
                ) : <h2>No creators yet!</h2>
            }
        </div>
    )
}

export default ShowCreators
import { Link } from 'react-router-dom'

const Card = (props) => {

    return (
        <div className={`Card ${props.element}`}>
            <h2 className="name">{props.name}</h2>
            <a href={props.url}><h3 className="url">{props.url}</h3></a>
            <h3 className="description">{props.description}</h3>
            <Link to={'view/' + props.id}><button>VIEW</button></Link>
            <Link to={'edit/' + props.id}><button>EDIT</button></Link>
        </div>
    );
}

export default Card
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { supabase } from '../client'

const ViewCreator = () => {
    const { id } = useParams();
    const [creator, setCreator] = useState({ name: "", url: "", description: "" });

    useEffect(() => {
        const getCreator = async () => {
            const { data } = await supabase
                .from('Creators')
                .select()
                .eq('id', id)
                .single();

            setCreator(data);
        }
        getCreator();
    }, [id]);

    // DELETE creator
    const deleteCreator = async (event) => {
        event.preventDefault();

        await supabase
            .from('Creators')
            .delete()
            .eq('id', id);

        window.location = "/";
    }

    return (
        <div>
            <h1>{creator.name}</h1>
            <a href={creator.url}><h3 className="url">{creator.url}</h3></a>
            <h3>{creator.description}</h3>
            <Link to={`/edit/${id}`}><button className='editButton'>EDIT</button></Link>
            <button className="deleteButton" onClick={deleteCreator}>DELETE</button>
        </div>
    )
}

export default ViewCreator
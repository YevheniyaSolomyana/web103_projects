import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client'

const EditCreator = () => {
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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCreator((prev) => {
            return { ...prev, [name]: value }
        })
    }

    // UPDATE creator
    const updateCreator = async (event) => {
        event.preventDefault();

        await supabase
            .from('Creators')
            .update({ name: creator.name, url: creator.url, description: creator.description })
            .eq('id', id);

        window.location = "/";
    }

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
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={creator.name || ''} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="url">Social Media Link</label> <br />
                <input type="text" id="url" name="url" value={creator.url || ''} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="description">Description</label> <br />
                <textarea rows="5" cols="50" id="description" name="description" value={creator.description || ''} onChange={handleChange}></textarea>
                <br/>

                <button className="createButton" onClick={updateCreator}>SUBMIT</button>
                <button className="deleteButton" onClick={deleteCreator}>DELETE</button>
            </form>
        </div>
    )
}

export default EditCreator
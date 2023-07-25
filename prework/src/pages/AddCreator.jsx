import React, { useState } from 'react';
import { supabase } from '../client'

const AddCreator = () => {
    const [creator, setCreator] = useState({name:"", url:"", description:""});

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCreator((prev) => {
            return {...prev, [name]:value}
        })
    }

    const createCreator = async (event) => {
        event.preventDefault();

        const { error } = await supabase
        .from('Creators')
        .insert({ name: creator.name, url: creator.url, description: creator.description })
        .select();

        if (error) {
            console.log(error);
        }
        window.location = "/";
    }

    return (
        <div>
            <form>
                <label htmlFor="name">Name</label> <br />
                <input type="text" id="name" name="name" value={creator.name} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="url">Social Media Link</label> <br />
                <input type="text" id="url" name="url" value={creator.url} onChange={handleChange}/><br />
                <br/>

                <label htmlFor="description">Description</label> <br />
                <textarea rows="5" cols="50" id="description" name="description" value={creator.description} onChange={handleChange}></textarea>
                <br/>

                <button className="createButton" onClick={createCreator}>SUBMIT</button>
            </form>
        </div>
    )
}

export default AddCreator
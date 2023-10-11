const MiceAPI = {
    getAllMice: async () => {
        try {
            const response = await fetch('http://localhost:3000/viewmice');
            const mice = await response.json(); 
            return mice;
        } catch (error) {
            console.error('Error in getAllMice:', error);
            throw error;
        }
    },

    getMouseById: async (mouseId) => {
        try {
            const response = await fetch(`http://localhost:3000/viewmice/${mouseId}`)
            const mouse = await response.json()
            return mouse;
        } catch (error) {
            console.error(`Error fetching mouse by ID: ${mouseId}`, error);
            throw error;
        }
    },

    createMouse: async (newMouse) => {
        try {
            const response = await fetch('http://localhost:3000/viewmice', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newMouse),
            });
            const createdMouse = await response.json();
            return createdMouse
        } catch (error) {
            console.error('Error creating mouse:', error);
            throw error;
        }
    },

    updateMouse: async (mouseId, mouse) => {
        try {
            const response = await fetch(`http://localhost:3000/viewmice/${mouseId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(mouse)
            })
            const updatedMouse = await response.json()
            return updatedMouse
        } catch (error) {
            console.error('Error updating mouse:', error);
            throw error;
        }
    },

    deleteMouse: async (mouseId) => {
        try {
            const response = await fetch(`http://localhost:3000/viewmice/${mouseId}`, {
                method: 'DELETE',
            })
        } catch (error) {
            console.error('Error deleting mouse:', error);
            throw error;
        }
    }
}

export default MiceAPI
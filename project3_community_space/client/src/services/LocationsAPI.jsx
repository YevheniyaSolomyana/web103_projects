const LocationsAPI = {
    getAllLocations: async () => {
        try {
            const response = await fetch('http://localhost:3000/locations')
            const locations = await response.json()
            return locations
        } catch (error) {
            console.error('Error fetching locations:', error);
        }
    }
}

export default LocationsAPI
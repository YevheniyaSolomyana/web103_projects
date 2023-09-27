const renderGift = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())

    const response = await fetch('/places')
    const data = await response.json()

    const placeContent = document.getElementById('place-content')

    let place = data.find(place => place.id === requestedID)

    if (place) {
        document.getElementById('image').src = place.image
        document.getElementById('name').textContent = place.name
        document.getElementById('pricePerDay').textContent = 'Price: ' + place.priceperday
        document.getElementById('meals').textContent = 'Meals: ' + place.meals
        document.getElementById('accommodation').textContent = 'Accommondation: ' + place.accommodation
        document.getElementById('transportation').textContent = 'Transportation: ' + place.transportation
        document.getElementById('description').textContent = place.description
        document.title = `${place.name}`
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Places Available 😞'
        placeContent.appendChild(message)
    }

}

renderGift()
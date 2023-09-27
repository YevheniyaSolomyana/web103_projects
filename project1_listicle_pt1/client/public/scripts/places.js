const renderPlaces = async () => {
    const response = await fetch('/places')
    const data = await response.json()


    const mainContent = document.getElementById('main-content')

    if (data) {
        data.map(place => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${place.image})`

            const name = document.createElement('h3')
            name.textContent = place.name
            bottomContainer.appendChild(name)

            const pricePerDay = document.createElement('p')
            pricePerDay.textContent = 'Price: ' + place.priceperday
            bottomContainer.appendChild(pricePerDay)

            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/places/${place.id}`
            bottomContainer.appendChild(link)

            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Places Available 😞'
        mainContent.appendChild(message)
    }
}

const requestedUrl = window.location.href.split('/').pop()
// In the if statement, check if requestedUrl is not null. If it isn't null (there is something after the /), set the window.location.href to the 404.html page.
if (requestedUrl) {
    window.location.href = '../404.html'
}
else {
    renderPlaces()
}

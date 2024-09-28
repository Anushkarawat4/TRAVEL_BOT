function handleDelhiResponse(userMessage) {
    if (userMessage.toLowerCase().includes('delhi')) {
        // General introduction about Delhi with interactive options
        let response = `
        Delhi is a vibrant city, known for its rich history, culture, and diverse experiences! 
        Would you like information on any of the following?
        1. Tourist attractions
        2. Dining and cuisine
        3. Transportation tips
        4. Hotel recommendations`;
        return response;
    }

    // Tourist attractions in Delhi
    if (userMessage.toLowerCase().includes('attractions')) {
        let response = `
        Here are some must-visit attractions in Delhi:
        - **Red Fort**: A UNESCO World Heritage site, showcasing Mughal architecture.
        - **India Gate**: A war memorial and popular public spot.
        - **Qutub Minar**: A historic tower and the tallest brick minaret in the world.
        - **Humayun's Tomb**: A stunning example of Mughal architecture.
        - **Lotus Temple**: Known for its beautiful flower-like structure and peaceful ambiance.

        Would you like to know more about any of these attractions?`;
        return response;
    }

    // Dining and cuisine options in Delhi
    if (userMessage.toLowerCase().includes('dining') || userMessage.toLowerCase().includes('cuisine')) {
        let response = `
        Delhi is famous for its diverse and delicious cuisine. You can try:
        - **Chandni Chowk**: For the best street food like chaat, parathas, and jalebis.
        - **Karim’s**: A legendary spot for Mughlai food near Jama Masjid.
        - **Hauz Khas Village**: A trendy area with modern cafes and fine dining options.
        - **Connaught Place**: Offers a variety of restaurants, from Indian to international cuisine.

        Would you like restaurant recommendations or street food tours?`;
        return response;
    }

    // Transportation tips in Delhi
    if (userMessage.toLowerCase().includes('transportation') || userMessage.toLowerCase().includes('travel')) {
        let response = `
        Getting around Delhi is easy with various options:
        - **Delhi Metro**: Fast and affordable, covers most of the city.
        - **Auto-rickshaws**: A common and inexpensive way to travel short distances.
        - **Ola/Uber**: Convenient ride-hailing apps for safe and comfortable rides.
        - **Cycle Rickshaws**: For short trips in Old Delhi, offering a traditional experience.

        Would you like tips on using public transport or booking a cab?`;
        return response;
    }

    // Hotel recommendations in Delhi
    if (userMessage.toLowerCase().includes('hotel')) {
        let response = `
        Here are some great hotel options in Delhi, ranging from luxury to budget:
        - **The Oberoi, New Delhi**: A luxurious 5-star hotel offering world-class amenities.
        - **Taj Palace**: A heritage hotel known for its opulence and excellent service.
        - **The Lalit**: A popular 5-star hotel located in Connaught Place.
        - **Zostel Delhi**: A budget-friendly and social hostel for backpackers.

        Would you like me to assist you with booking or more budget options?`;
        return response;
    }

    return null; // Return null if no response is needed for this location
}

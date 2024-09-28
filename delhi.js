let userState = {
    city: null,
    dates: null,
    timings: null,
    budget: null,
};

export function handleDelhiResponse(userMessage) {
    const cityList = ['red fort', 'qutub minar', 'rashtrapati bhavan'];

    // Step 1: If no city is selected yet, prompt the user to select one
    if (!userState.city) {
        if (userMessage.toLowerCase().includes('delhi')) {
            return "Delhi offers rich history and vibrant culture. Please specify the landmark you'd like to explore (e.g., Red Fort, Qutub Minar, Rashtrapati Bhavan).";
        }
        const city = cityList.find(city => userMessage.toLowerCase().includes(city));
        if (city) {
            userState.city = city;
            return `Great choice! You've selected ${city}. Could you please provide the dates for your trip?`;
        }
    }

    // Step 2: After the city, ask for the dates
    if (userState.city && !userState.dates) {
        userState.dates = userMessage;
        return `Got it! You've selected ${userState.city} from ${userState.dates}. Could you also provide preferred timings for travel (morning, afternoon, or evening)?`;
    }

    // Step 3: After the dates, ask for the timings
    if (userState.city && userState.dates && !userState.timings) {
        userState.timings = userMessage;
        return `Perfect! What is your budget for this trip?`;
    }

    // Step 4: After getting the budget, perform detailed trip planning
    if (userState.city && userState.dates && userState.timings && !userState.budget) {
        userState.budget = parseInt(userMessage.replace(/[^0-9]/g, ''));  // Extract numbers from budget input
        return detailedTripPlan(userState.city, userState.dates, userState.timings, userState.budget);
    }

    return "Please provide more details to plan your trip.";
}

function detailedTripPlan(city, dates, timings, budget) {
    // Basic weather forecast simulation (could be more advanced if integrated with a real API)
    const weatherForecast = {
        'red fort': 'hot and humid, around 35°C during the day and 25°C at night',
        'qutub minar': 'warm and pleasant, around 32°C during the day and 24°C at night',
        'rashtrapati bhavan': 'mostly sunny, around 33°C during the day and 23°C at night'
    };

    // Suggest itinerary based on budget
    let itinerary = '';
    if (budget < 5000) {
        itinerary = `With a limited budget of ₹${budget}, I recommend staying in budget hotels or hostels. You can explore local street food and use public transport for getting around. Focus on visiting the landmark and nearby attractions that are free or low-cost.`;
    } else if (budget >= 5000 && budget <= 15000) {
        itinerary = `With a budget of ₹${budget}, you can afford mid-range accommodations and dine at popular restaurants. Consider guided tours of the landmark and nearby historical sites, or exploring cultural events.`;
    } else {
        itinerary = `With a budget of ₹${budget}, you can stay in luxury hotels, hire private transport, and indulge in premium experiences. Explore exclusive dining options, private guided tours, and special experiences around the landmark.`;
    }

    // Detailed trip plan response
    return `
      Here's your detailed trip plan for ${city}:

      - **Dates**: ${dates}
      - **Travel Timings**: ${timings}
      - **Weather**: Expect ${weatherForecast[city]} during your stay.
      - **Accommodation and Activities**: ${itinerary}

      Would you like to know more about specific accommodations or travel arrangements?
    `;
}

// Reset the user state after trip is planned (for demonstration purposes)
function resetUserState() {
    userState = {
        city: null,
        dates: null,
        timings: null,
        budget: null,
    };
}

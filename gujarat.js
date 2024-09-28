let userState = {
  city: null,
  dates: null,
  timings: null,
  budget: null,
};

function handleGujaratResponse(userMessage) {
  const cityList = ['kutch', 'saputara', 'gir somnath'];
  
  // Step 1: If no city is selected yet, prompt the user to select one
  if (!userState.city) {
    if (userMessage.toLowerCase().includes('gujarat')) {
      return "Gujarat offers diverse landscapes and rich cultural experiences. Please specify the city you'd like to explore (e.g., Kutch, Saputara, Gir Somnath).";
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
    'kutch': 'sunny with clear skies, around 35°C during the day and 20°C at night',
    'saputara': 'mild and cool, around 22°C during the day and 15°C at night',
    'gir somnath': 'warm and pleasant, around 30°C during the day and 22°C at night'
  };

  // Suggest itinerary based on budget
  let itinerary = '';
  if (budget < 5000) {
    itinerary = `With a limited budget of ₹${budget}, I recommend staying in budget hotels or homestays. You could explore local eateries, and public transport options are available. For activities, you could focus on sightseeing and enjoying the natural beauty.`;
  } else if (budget >= 5000 && budget <= 15000) {
    itinerary = `With a budget of ₹${budget}, you can afford mid-range hotels and some guided tours. You could also enjoy a few local experiences, like safaris in Gir Somnath or cultural tours in Kutch.`;
  } else {
    itinerary = `With a budget of ₹${budget}, you can stay in luxury resorts or hotels, hire private transport, and indulge in adventure activities. Guided tours, wildlife safaris, and special experiences like the Rann Utsav in Kutch or heritage tours in Gir Somnath are great options.`;
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

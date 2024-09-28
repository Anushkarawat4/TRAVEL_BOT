let userState = {
  city: null,
  dates: null,
  timings: null,
  budget: null,
};

export function handleSikkimResponse(userMessage) {
  const cityList = ['gangtok', 'pelling', 'namchi'];
  
  // Step 1: If no city is selected yet, prompt the user to select one
  if (!userState.city) {
    if (userMessage.toLowerCase().includes('sikkim')) {
      return "Sikkim is known for its stunning landscapes and rich culture. Please specify the city you'd like to explore (e.g., Gangtok, Pelling, Namchi).";
    }
    const city = cityList.find(city => userMessage.toLowerCase().includes(city));
    if (city) {
      userState.city = city;
      return `You've selected ${city}! Now, could you please tell me the dates for your trip?`;
    }
  }
  
  // Step 2: After the city, ask for the dates
  if (userState.city && !userState.dates) {
    userState.dates = userMessage;
    return `Got it! Your trip to ${userState.city} is planned for ${userState.dates}. Could you also let me know your preferred timings for travel (morning, afternoon, or evening)?`;
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
  // Basic weather forecast simulation for Sikkim cities
  const weatherForecast = {
    'gangtok': 'cool and pleasant, around 15°C during the day and 5°C at night, ideal for sightseeing',
    'pelling': 'mild and sunny, around 20°C during the day and 10°C at night, perfect for outdoor activities',
    'namchi': 'pleasant and comfortable, around 18°C during the day and 8°C at night, suitable for temple visits'
  };

  // Suggest itinerary based on budget
  let itinerary = '';
  if (budget < 5000) {
    itinerary = `With a budget of ₹${budget}, you can stay in budget guesthouses or homestays. In Gangtok, visit the local markets and explore MG Road. In Pelling, enjoy views of the Kanchenjunga range and visit local monasteries. In Namchi, explore the Char Dham and local attractions on foot. Public transport and shared taxis are available for getting around.`;
  } else if (budget >= 5000 && budget <= 15000) {
    itinerary = `With a budget of ₹${budget}, you can stay in mid-range hotels or comfortable homestays. In Gangtok, visit Tsomgo Lake and Nathu La Pass, and enjoy local cuisine. In Pelling, visit Pemayangtse Monastery and take a short trek to the Khecheopalri Lake. In Namchi, enjoy local cuisine and explore the Samdruptse statue.`;
  } else {
    itinerary = `With a budget of ₹${budget}, you can indulge in luxury hotels or resorts. In Gangtok, stay in a luxury hotel with stunning views, and enjoy guided tours to the attractions. In Pelling, experience luxury resorts with spa facilities, and indulge in gourmet meals. In Namchi, explore high-end resorts and enjoy guided tours of the best attractions.`;
  }

  // Detailed trip plan response
  return `
    Here's your detailed trip plan for ${city}:

    - **Dates**: ${dates}
    - **Travel Timings**: ${timings}
    - **Weather**: Expect ${weatherForecast[city]} during your stay.
    - **Accommodation and Activities**: ${itinerary}
    
    Would you like more information about specific hotels, activities, or travel tips for ${city}?
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

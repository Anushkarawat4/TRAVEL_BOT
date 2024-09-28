let userState = {
  city: null,
  dates: null,
  timings: null,
  budget: null,
};

export function handleMaharashtraResponse(userMessage) {
  const cityList = ['mumbai', 'lonavala', 'matheran'];
  
  // Step 1: If no city is selected yet, prompt the user to select one
  if (!userState.city) {
    if (userMessage.toLowerCase().includes('maharashtra')) {
      return "Maharashtra has something for everyone. Please specify the city you'd like to explore (e.g., Mumbai, Lonavala, Matheran).";
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
  // Basic weather forecast simulation for Maharashtra cities
  const weatherForecast = {
    'mumbai': 'humid and warm, around 30°C during the day and 26°C at night, with possible showers',
    'lonavala': 'pleasant and cool, around 24°C during the day and 18°C at night, especially during monsoon',
    'matheran': 'cool and misty, around 20°C during the day and 15°C at night, with scenic views during the monsoon'
  };

  // Suggest itinerary based on budget
  let itinerary = '';
  if (budget < 5000) {
    itinerary = `With a limited budget of ₹${budget}, you can stay in budget hotels or guesthouses. In Mumbai, you can explore local markets, Marine Drive, and street food. In Lonavala, you can hike to nearby forts, and in Matheran, enjoy nature walks and sightseeing. Public transport is a great option for getting around.`;
  } else if (budget >= 5000 && budget <= 15000) {
    itinerary = `With a budget of ₹${budget}, you can stay in mid-range hotels or resorts. In Mumbai, you can visit iconic spots like Gateway of India and take a ferry to Elephanta Caves. In Lonavala, explore Bhushi Dam and take a scenic drive to Tiger Point. Matheran offers horse riding and visits to Echo Point.`;
  } else {
    itinerary = `With a budget of ₹${budget}, you can stay in luxury hotels or resorts. In Mumbai, you can enjoy a sunset cruise, upscale dining, and shopping. Lonavala offers luxurious stays with spa services, and Matheran can be explored with private tours and tailored experiences.`;
  }

  // Detailed trip plan response
  return `
    Here's your detailed trip plan for ${city}:

    - **Dates**: ${dates}
    - **Travel Timings**: ${timings}
    - **Weather**: Expect ${weatherForecast[city]} during your stay.
    - **Accommodation and Activities**: ${itinerary}
    
    Would you like to know more about specific accommodations, travel arrangements, or other experiences?
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

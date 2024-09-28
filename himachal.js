let userState = {
  city: null,
  dates: null,
  timings: null,
  budget: null,
};

function handleHimachalResponse(userMessage) {
  const cityList = ['shimla', 'manali', 'dalhousie'];
  
  // Step 1: If no city is selected yet, prompt the user to select one
  if (!userState.city) {
    if (userMessage.toLowerCase().includes('himachal pradesh')) {
      return "Himachal Pradesh is a land of scenic beauty and adventure. Please specify the city you'd like to explore (e.g., Shimla, Manali, Dalhousie).";
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
  // Basic weather forecast simulation for Himachal cities
  const weatherForecast = {
    'shimla': 'cool and pleasant, around 15°C during the day and 8°C at night',
    'manali': 'chilly, around 10°C during the day and 3°C at night, with a chance of snow',
    'dalhousie': 'mild, around 18°C during the day and 10°C at night, with occasional rain'
  };

  // Suggest itinerary based on budget
  let itinerary = '';
  if (budget < 5000) {
    itinerary = `With a limited budget of ₹${budget}, you can stay in budget hotels or homestays. You can enjoy scenic walks, visit local attractions, and use public transport to explore Shimla's Mall Road or Manali's Old Town.`;
  } else if (budget >= 5000 && budget <= 15000) {
    itinerary = `With a budget of ₹${budget}, you can stay in mid-range hotels, enjoy some guided tours, and explore more touristy spots. In Shimla, you can visit Kufri and Jakhoo Temple, while in Manali, you can enjoy Solang Valley and Hadimba Temple.`;
  } else {
    itinerary = `With a budget of ₹${budget}, you can indulge in luxury hotels, hire private transport, and enjoy activities like paragliding in Solang Valley or guided hiking tours. In Dalhousie, you could also visit Khajjiar, known as 'Mini Switzerland of India.'`;
  }

  // Detailed trip plan response
  return `
    Here's your detailed trip plan for ${city}:

    - **Dates**: ${dates}
    - **Travel Timings**: ${timings}
    - **Weather**: Expect ${weatherForecast[city]} during your stay.
    - **Accommodation and Activities**: ${itinerary}
    
    Would you like to know more about specific accommodations, travel arrangements, or things to do?
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

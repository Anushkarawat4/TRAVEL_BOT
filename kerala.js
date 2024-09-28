let userState = {
  city: null,
  dates: null,
  timings: null,
  budget: null,
};

export function handleKeralaResponse(userMessage) {
  const cityList = ['kochi', 'munnar', 'alleppey'];
  
  // Step 1: If no city is selected yet, prompt the user to select one
  if (!userState.city) {
    if (userMessage.toLowerCase().includes('kerala')) {
      return "Kerala is known for its stunning backwaters and lush greenery. Please specify the city you'd like to explore (e.g., Kochi, Munnar, Alleppey).";
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
  // Basic weather forecast simulation for Kerala cities
  const weatherForecast = {
    'kochi': 'warm and humid, around 30°C during the day and 25°C at night, with a chance of rain',
    'munnar': 'cool and pleasant, around 22°C during the day and 15°C at night, perfect for tea garden visits',
    'alleppey': 'tropical climate, around 28°C during the day and 24°C at night, ideal for backwater exploration'
  };

  // Suggest itinerary based on budget
  let itinerary = '';
  if (budget < 5000) {
    itinerary = `With a budget of ₹${budget}, you can stay in budget hotels or homestays. In Kochi, explore the Fort Kochi area, Chinese Fishing Nets, and local markets. In Munnar, enjoy the tea plantations and waterfalls. In Alleppey, take a short boat ride in the backwaters and relax at local cafes. Public transport and shared taxis are available for getting around.`;
  } else if (budget >= 5000 && budget <= 15000) {
    itinerary = `With a budget of ₹${budget}, you can stay in mid-range hotels or comfortable homestays. In Kochi, visit the Mattancherry Palace, Jewish Synagogue, and enjoy local seafood. In Munnar, visit Eravikulam National Park and take a guided tea plantation tour. In Alleppey, enjoy a houseboat stay for a night and explore the beautiful backwaters.`;
  } else {
    itinerary = `With a budget of ₹${budget}, you can indulge in luxury resorts or heritage hotels. In Kochi, stay in luxury hotels with a view of the backwaters and enjoy fine dining. In Munnar, experience luxury resorts amid tea gardens, guided nature walks, and spa services. In Alleppey, enjoy a private houseboat with gourmet meals and scenic routes through the backwaters.`;
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

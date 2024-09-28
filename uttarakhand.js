let userState = {
  city: null,
  dates: null,
  timings: null,
  budget: null,
};

export function handleUttarakhandResponse(userMessage) {
  const cityList = ['dehradun', 'nainital', 'mussoorie'];
  
  // Step 1: If no city is selected yet, prompt the user to select one
  if (!userState.city) {
    if (userMessage.toLowerCase().includes('uttarakhand')) {
      return "Uttarakhand offers a serene escape with picturesque views and peaceful landscapes. Please specify the city you'd like to explore (e.g., Dehradun, Nainital, Mussoorie).";
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
  // Basic weather forecast simulation for Uttarakhand cities
  const weatherForecast = {
    'dehradun': 'cool and pleasant, around 25°C during the day and 15°C at night',
    'nainital': 'cool and misty, around 20°C during the day and 10°C at night, with a serene lake view',
    'mussoorie': 'pleasantly cool, around 22°C during the day and 12°C at night, with stunning mountain views'
  };

  // Suggest itinerary based on budget
  let itinerary = '';
  if (budget < 5000) {
    itinerary = `With a limited budget of ₹${budget}, you can stay in budget hotels or guesthouses. In Dehradun, you can explore Robber's Cave, Sahastradhara, and local markets. In Nainital, enjoy the scenic Naini Lake, walk around the Mall Road, and visit Snow View Point. In Mussoorie, take a walk at Camel's Back Road, explore Kempty Falls, and enjoy the views from Gun Hill. Public transport is a great way to travel within the cities.`;
  } else if (budget >= 5000 && budget <= 15000) {
    itinerary = `With a budget of ₹${budget}, you can stay in mid-range hotels or guesthouses with nice views. In Dehradun, visit Mindrolling Monastery, Forest Research Institute, and enjoy local cafes. In Nainital, take a boat ride on Naini Lake, visit the Naina Devi Temple, and explore Tiffin Top. In Mussoorie, visit Lal Tibba, take the ropeway to Gun Hill, and enjoy local cuisine at scenic cafes.`;
  } else {
    itinerary = `With a budget of ₹${budget}, you can stay in luxury resorts with panoramic views. In Dehradun, stay in boutique hotels, visit the Tapkeshwar Temple, and enjoy scenic picnics. In Nainital, stay in a lakeside resort, enjoy a private boat ride, and have luxury dining with a view of the mountains. In Mussoorie, enjoy luxury stays, private tours, and exclusive access to less crowded scenic spots like George Everest's House.`;
  }

  // Detailed trip plan response
  return `
    Here's your detailed trip plan for ${city}:

    - **Dates**: ${dates}
    - **Travel Timings**: ${timings}
    - **Weather**: Expect ${weatherForecast[city]} during your stay.
    - **Accommodation and Activities**: ${itinerary}
    
    Would you like to know more about specific accommodations, travel arrangements, or unique experiences in ${city}?
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

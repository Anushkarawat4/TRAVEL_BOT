let userState = {
  city: null,
  dates: null,
  timings: null,
  budget: null,
};

function handleRajasthanResponse(userMessage) {
  const cityList = ['jaipur', 'udaipur', 'mount abu'];
  
  // Step 1: If no city is selected yet, prompt the user to select one
  if (!userState.city) {
    if (userMessage.toLowerCase().includes('rajasthan')) {
      return "Rajasthan is famous for its palaces, forts, and scenic beauty. Please specify the city you'd like to explore (e.g., Jaipur, Udaipur, Mount Abu).";
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
  // Basic weather forecast simulation for Rajasthan cities
  const weatherForecast = {
    'jaipur': 'sunny and warm, around 30°C during the day and 20°C at night',
    'udaipur': 'pleasant and slightly cool, around 28°C during the day and 18°C at night',
    'mount abu': 'cool and pleasant, around 24°C during the day and 15°C at night, with mist in the mornings'
  };

  // Suggest itinerary based on budget
  let itinerary = '';
  if (budget < 5000) {
    itinerary = `With a limited budget of ₹${budget}, you can stay in budget hotels or guesthouses. In Jaipur, you can explore the City Palace, Hawa Mahal, and local markets. In Udaipur, enjoy the serene lakes and explore Jagdish Temple. In Mount Abu, take a hike to Nakki Lake and Dilwara Temples. Public transport options are available.`;
  } else if (budget >= 5000 && budget <= 15000) {
    itinerary = `With a budget of ₹${budget}, you can stay in mid-range hotels or heritage properties. In Jaipur, you can visit Amer Fort, Jantar Mantar, and take a traditional Rajasthani dinner at Chokhi Dhani. In Udaipur, take a boat ride in Lake Pichola, and visit City Palace. In Mount Abu, enjoy scenic viewpoints like Sunset Point and Guru Shikhar.`;
  } else {
    itinerary = `With a budget of ₹${budget}, you can stay in luxury resorts or heritage hotels. In Jaipur, you can explore Nahargarh Fort, enjoy luxury dining, and take guided heritage tours. Udaipur offers luxurious lakeside resorts, private boat rides on Lake Pichola, and spa services. In Mount Abu, indulge in luxury stays, guided hikes, and private tours of heritage sites.`;
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


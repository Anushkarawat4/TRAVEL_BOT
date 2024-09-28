let userState = {
  city: null,
  dates: null,
  timings: null,
  budget: null,
};

export function handleJammuKashmirResponse(userMessage) {
  const cityList = ['srinagar', 'gulmarg', 'pahalgam'];
  
  // Step 1: If no city is selected yet, prompt the user to select one
  if (!userState.city) {
    if (userMessage.toLowerCase().includes('jammu and kashmir')) {
      return "Jammu and Kashmir, known for its stunning landscapes, is a paradise on Earth. Please specify the city you'd like to explore (e.g., Srinagar, Gulmarg, Pahalgam).";
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
  // Basic weather forecast simulation for Jammu & Kashmir cities
  const weatherForecast = {
    'srinagar': 'cool and pleasant, around 20°C during the day and 10°C at night',
    'gulmarg': 'chilly, around 12°C during the day and 5°C at night, with snow in winters',
    'pahalgam': 'pleasantly cool, around 18°C during the day and 8°C at night'
  };

  // Suggest itinerary based on budget
  let itinerary = '';
  if (budget < 5000) {
    itinerary = `With a limited budget of ₹${budget}, you can stay in budget hotels or guesthouses. In Srinagar, you can explore Dal Lake, Mughal Gardens, and local markets. In Gulmarg, enjoy the scenic beauty, take a walk in the meadows, or take the Gulmarg Gondola ride. In Pahalgam, you can visit Betaab Valley, Baisaran, and enjoy riverside walks. Public transport or shared taxis are a good way to travel.`;
  } else if (budget >= 5000 && budget <= 15000) {
    itinerary = `With a budget of ₹${budget}, you can stay in mid-range hotels or guesthouses. In Srinagar, you can stay in a houseboat, visit Shankaracharya Temple, and take a Shikara ride on Dal Lake. In Gulmarg, enjoy skiing (in winter), visit the Strawberry Valley, and take a cable car ride to Apharwat Peak. In Pahalgam, you can explore Aru Valley, Baisaran, and go for short treks.`;
  } else {
    itinerary = `With a budget of ₹${budget}, you can stay in luxury houseboats or hotels with lake/mountain views. In Srinagar, stay in a luxury houseboat, take private tours of the Mughal Gardens, and enjoy fine Kashmiri dining. In Gulmarg, stay in high-end resorts, enjoy skiing or snowboarding (in winter), and visit scenic viewpoints by private cable car. In Pahalgam, enjoy luxury cottages, guided treks, and picnics by the Lidder River.`;
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

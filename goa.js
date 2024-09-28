let userState = {
    city: null,
    dates: null,
    timings: null,
    budget: null,
  };
  
  function handleGoaResponse(userMessage) {
    const cityList = ['north goa', 'south goa', 'panaji'];
    
    // Step 1: If no city is selected yet, prompt the user to select one
    if (!userState.city) {
      if (userMessage.toLowerCase().includes('goa')) {
        return "Goa offers stunning beaches and vibrant cultural experiences. Please specify the area you'd like to explore (e.g., North Goa, South Goa, Panaji).";
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
        'north goa': 'sunny with occasional breezes, around 32°C during the day and 25°C at night',
        'south goa': 'mostly sunny and serene, around 31°C during the day and 24°C at night',
        'panaji': 'partly cloudy with coastal humidity, around 30°C during the day and 26°C at night'

    };
  
    // Suggest itinerary based on budget
    let itinerary = '';
    if (budget < 5000) {
        itinerary = `With a limited budget of ₹${budget}, I recommend staying in budget hotels, guesthouses, or hostels. You can enjoy local street food and use public transport or rent a scooter for getting around. Focus on exploring beaches and free attractions in North Goa or South Goa.`;
    } else if (budget >= 5000 && budget <= 15000) {
        itinerary = `With a budget of ₹${budget}, you can afford mid-range accommodations and dine at popular restaurants. Explore more organized activities such as heritage walks in Panaji, water sports in North Goa, or peaceful retreats in South Goa.`;
    } else {
        itinerary = `With a budget of ₹${budget}, you can stay in luxury hotels or resorts, rent private transport, and indulge in premium experiences. You can enjoy guided tours, adventure sports in North Goa, private beach access in South Goa, or luxury cruises from Panaji.`;
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
  

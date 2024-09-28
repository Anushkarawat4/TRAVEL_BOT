function handleMumbaiResponse(userMessage) {
  const cityList = ['mumbai', 'lonavala', 'matheran'];
  
  // Check if the user mentioned Maharashtra
  if (userMessage.toLowerCase().includes('maharashtra')) {
    return "Maharashtra has something for everyone. Please specify the city you'd like to explore (e.g., Mumbai, Pune, Nagpur, Aurangabad).";
  }

  // Ask for details for each specific city
  const city = cityList.find(city => userMessage.toLowerCase().includes(city));
  if (city) {
    switch(city) {
      case 'mumbai':
        return "Mumbai is known for spots like Gateway of India, Marine Drive, and Elephanta Caves. The travel expenses can range between ₹5000-₹20,000 depending on your mode of travel and accommodation. For more details, let me know what specific information you need.";
    case 'lonavala':
        return "Lonavala is a beautiful hill station known for its scenic viewpoints like Tiger's Leap, Bhushi Dam, and Rajmachi Fort. It's a perfect weekend getaway from Mumbai and Pune. Travel expenses generally range from ₹2000-₹8000 depending on your mode of transport and stay. Do you need more details on specific places or things to do?";
         case 'matheran':
        return "Matheran is a charming hill station famous for its eco-friendly environment (no vehicles allowed) and beautiful viewpoints like Panorama Point, Echo Point, and Charlotte Lake. Travel expenses range between ₹1500-₹7000. Would you like more information about stay options or trekking routes?";
         default:
        return `I don't have specific information for ${city}, but I'd be happy to look it up for you!`;
    }
  }

  return "Please mention a valid city name in Maharashtra, and I will provide you with the details.";
}

function handleGujaratResponse(userMessage) {
  const cityList = ['kutch', 'saputara', 'gir somnath'];
  
  // Check if the user mentioned Gujarat
  if (userMessage.toLowerCase().includes('gujarat')) {
    return "Gujarat offers diverse landscapes and rich cultural experiences. Please specify the city you'd like to explore (e.g., Kutch, Saputara, Gir Somnath).";
  }

  // Ask for details for each specific city
  const city = cityList.find(city => userMessage.toLowerCase().includes(city));
  if (city) {
    switch(city) {
      case 'kutch':
        return "Kutch is famous for the Rann of Kutch, a white salt desert that hosts the Rann Utsav, a cultural festival. Other attractions include the Kalo Dungar (Black Hill) and Mandvi Beach. Travel expenses can range between ₹6000-₹20,000 depending on the festival season. Do you need more information about the festival or places to stay?";
        
      case 'saputara':
        return "Saputara is the only hill station in Gujarat, known for its cool climate, Saputara Lake, Sunset Point, and the Artist Village. It's a great weekend getaway with travel expenses typically ranging from ₹3000-₹10,000. Would you like more details on local attractions or activities?";
        
      case 'gir somnath':
        return "Gir Somnath is known for the Gir National Park, home to the Asiatic lions, and the Somnath Temple, one of the twelve Jyotirlinga shrines. Travel expenses can vary between ₹5000-₹15,000 depending on safaris and accommodation. Let me know if you need more details on safaris or spiritual places to visit.";
        
      default:
        return `I don't have specific information for ${city}, but I'd be happy to look it up for you!`;
    }
  }

  return "Please mention a valid city name in Gujarat, and I will provide you with the details.";
}


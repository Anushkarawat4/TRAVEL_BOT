function handleHimachalResponse(userMessage) {
  const cityList = ['shimla', 'manali', 'dalhousie'];
  
  // Check if the user mentioned Himachal Pradesh
  if (userMessage.toLowerCase().includes('himachal pradesh')) {
    return "Himachal Pradesh is a land of scenic beauty and adventure. Please specify the city you'd like to explore (e.g., Shimla, Manali, Dalhousie).";
  }

  // Ask for details for each specific city
  const city = cityList.find(city => userMessage.toLowerCase().includes(city));
  if (city) {
    switch(city) {
      case 'shimla':
        return "Shimla, the capital of Himachal Pradesh, is known for attractions like The Ridge, Mall Road, and Jakhoo Temple. The toy train ride to Shimla is a popular experience. Travel expenses range from ₹5000-₹15,000, depending on your accommodation and mode of transport. Would you like to know more about specific places or the best time to visit?";
        
      case 'manali':
        return "Manali is famous for its scenic views, adventure sports, and attractions like Solang Valley, Rohtang Pass, and Hadimba Temple. It's a great place for skiing, paragliding, and trekking. Travel expenses generally range between ₹7000-₹25,000. Let me know if you need more details on activities or places to stay.";
        
      case 'dalhousie':
        return "Dalhousie is known for its old-world charm, beautiful churches, and views of the Dhauladhar mountain range. Khajjiar, often called 'Mini Switzerland of India', is a must-visit spot near Dalhousie. Travel expenses can vary from ₹4000-₹12,000. Do you need more information on trekking or local attractions?";
        
      default:
        return `I don't have specific information for ${city}, but I'd be happy to look it up for you!`;
    }
  }

  return "Please mention a valid city name in Himachal Pradesh, and I will provide you with the details.";
}


function handleDelhiResponse(userMessage) {
    if (userMessage.toLowerCase().includes('delhi')) {
      // General introduction
      let response = "Delhi is a vibrant city, known for its rich history, culture, and diverse experiences! would you like hotel?";
      return response;
    }
    if (userMessage.toLowerCase().includes('hotel')) {
        // General introduction
        let response = "Delhi is a vibrant city, known for its rich history, culture, and diverse experiences! ";
        return response;
      }
    
  
    return null; // Return null if no response is needed for this location
  }
  
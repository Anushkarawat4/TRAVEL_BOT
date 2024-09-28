function handleGoaResponse(userMessage) {
    if (userMessage.toLowerCase().includes('goa')) {
        // General introduction about Goa with interactive options
        let response = `
        Goa is a beautiful destination known for its stunning beaches, vibrant nightlife, and Portuguese-influenced architecture! 
        Would you like information on any of the following?
        1. Tourist attractions
        2. Dining and cuisine
        3. Transportation tips
        4. Hotel recommendations`;
        return response;
    }

    // Tourist attractions in Goa
    if (userMessage.toLowerCase().includes('attractions')) {
        let response = `
        Here are some must-visit attractions in Goa:
        - **Baga Beach**: Popular for water sports and vibrant nightlife.
        - **Anjuna Beach**: Known for its hippie vibe and weekly flea market.
        - **Basilica of Bom Jesus**: A UNESCO World Heritage site, home to the remains of St. Francis Xavier.
        - **Fort Aguada**: A well-preserved Portuguese fort with scenic views.
        - **Dudhsagar Falls**: A spectacular four-tiered waterfall on the Goa-Karnataka border.

        Would you like more information about any of these attractions or their timings?`;
        return response;
    }

    // Dining and cuisine options in Goa
    if (userMessage.toLowerCase().includes('dining') || userMessage.toLowerCase().includes('cuisine')) {
        let response = `
        Goa is famous for its seafood and vibrant food culture. Some great options to try include:
        - **Vinayak Family Restaurant**: Known for its authentic Goan seafood.
        - **Fish Thali**: Found at many local shacks and restaurants, a must-try.
        - **Mum’s Kitchen**: A cozy restaurant offering traditional Goan dishes.
        - **Tito’s Lane**: Great for beachside cafes and vibrant nightlife, with a variety of food choices.
        - **Martin’s Corner**: A favorite for locals and tourists alike, offering a wide range of Goan specialties.

        Would you like restaurant recommendations or beach shacks for a laid-back meal?`;
        return response;
    }

    // Transportation tips in Goa
    if (userMessage.toLowerCase().includes('transportation') || userMessage.toLowerCase().includes('travel')) {
        let response = `
        Goa is easy to explore with various transportation options:
        - **Renting a scooter or bike**: The most convenient and affordable way to explore Goa’s beaches and attractions.
        - **Taxis and rickshaws**: Widely available, but be sure to negotiate the price before starting your journey.
        - **Goa Miles**: A popular ride-hailing app used by locals and tourists.
        - **Buses**: Public buses run between the main towns but can be less frequent to beach destinations.

        Would you like tips on renting a scooter or taxi fares in Goa?`;
        return response;
    }

    // Hotel recommendations in Goa
    if (userMessage.toLowerCase().includes('hotel')) {
        let response = `
        Here are some great hotel options in Goa:
        - **The Leela Goa**: A luxurious 5-star hotel with stunning beachfront views.
        - **Taj Exotica**: Known for its impeccable service and scenic property on Benaulim Beach.
        - **Vivanta Goa**: A stylish and modern hotel located near Miramar Beach.
        - **Budget options**: You can find affordable beachside stays at places like **Silver Sands Sunshine** or **The Lazy Frog**.

        Would you like help with bookings or recommendations for budget hotels?`;
        return response;
    }

    return null; // Return null if no response is needed for this location
}


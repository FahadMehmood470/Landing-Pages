flight_function = {
    "name": "search_flights",
    "description": "Searches flights using Amadeus API",
    "parameters": {
        "type": "object",
        "properties": {
            "origin": {
                "type": "string",
                "description": "Departure airport code, e.g. LHE"
            },
            "destination": {
                "type": "string",
                "description": "Arrival airport code, e.g. JED"
            },
            "departure_date": {
                "type": "string",
                "description": "Date in format YYYY-MM-DD"
            }
        },
        "required": ["origin", "destination", "departure_date"]
    }
}

import openai
import gradio as gr
import os
from dotenv import load_dotenv
from amadeus import Client, ResponseError

# Load keys
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")

amadeus = Client(
    client_id=os.getenv("AMADEUS_CLIENT_ID"),
    client_secret=os.getenv("AMADEUS_CLIENT_SECRET")
)

def ask_chatbot(message, history):
    # Extract departure, destination, and date from the user message
    import re
    from datetime import datetime

    response = ""

    # Simple pattern matching (you can improve this with NLP)
    match = re.search(r"from (\w+) to (\w+)(?: on (\w+ \d+(?:, \d+)?))?", message.lower())
    if match:
        origin = match.group(1).capitalize()
        destination = match.group(2).capitalize()
        date_str = match.group(3)
        
        # Mock/fallback date
        if not date_str:
            date = "2025-12-25"
        else:
            try:
                date = datetime.strptime(date_str, "%B %d, %Y").strftime("%Y-%m-%d")
            except:
                try:
                    date = datetime.strptime(date_str, "%B %d").replace(year=2025).strftime("%Y-%m-%d")
                except:
                    date = "2025-12-25"

        # Airport codes mapping (you can extend this)
        airports = {
            "lahore": "LHE",
            "jeddah": "JED",
            "madrid": "MAD",
            "new york": "JFK"
        }

        origin_code = airports.get(origin.lower(), "LHE")
        dest_code = airports.get(destination.lower(), "JED")

        try:
            flight_offers = amadeus.shopping.flight_offers_search.get(
                originLocationCode=origin_code,
                destinationLocationCode=dest_code,
                departureDate=date,
                adults=1
            ).data

            if not flight_offers:
                response = "No flights found."
            else:
                offer = flight_offers[0]  # Show only first offer
                airline = offer['validatingAirlineCodes'][0]
                price = offer['price']['total']
                duration = offer['itineraries'][0]['duration']
                response = f"Airline: {airline}\nPrice: ${price}\nDuration: {duration}"
        except ResponseError as e:
            response = "API error: " + str(e)

    else:
        # Use OpenAI for generic fallback answers
        reply = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": message}]
        )
        response = reply['choices'][0]['message']['content']

    return response

# Gradio interface
chatbot = gr.ChatInterface(fn=ask_chatbot, title="Travel ChatBot")
chatbot.launch()

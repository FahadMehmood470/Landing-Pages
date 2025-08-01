import openai
import requests
import gradio as gr
import datetime

# API KEYS (Replace with your actual keys)
AMADEUS_API_KEY = "YOUR_AMADEUS_API_KEY"
AMADEUS_API_SECRET = "YOUR_AMADEUS_API_SECRET"
OPENAI_API_KEY = "YOUR_OPENAI_API_KEY"

# Get Amadeus token
def get_amadeus_token():
    url = "https://test.api.amadeus.com/v1/security/oauth2/token"
    payload = {
        "grant_type": "client_credentials",
        "client_id": AMADEUS_API_KEY,
        "client_secret": AMADEUS_API_SECRET,
    }
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    response = requests.post(url, data=payload, headers=headers)
    return response.json()["access_token"]

# Get flight data
def search_flights(origin, destination, departure_date, adults=1):
    token = get_amadeus_token()
    url = "https://test.api.amadeus.com/v2/shopping/flight-offers"
    params = {
        "originLocationCode": origin,
        "destinationLocationCode": destination,
        "departureDate": departure_date,
        "adults": adults,
        "nonStop": False,
        "max": 20,
        "currencyCode": "USD"
    }
    headers = {"Authorization": f"Bearer {token}"}
    res = requests.get(url, headers=headers, params=params)
    flights = res.json().get("data", [])
    
    flight_info = []
    for flight in flights:
        itineraries = flight["itineraries"]
        price = flight["price"]["total"]
        currency = flight["price"]["currency"]
        airline = flight["validatingAirlineCodes"][0]

        stops = len(itineraries[0]["segments"]) - 1
        stop_durations = sum([
            (datetime.datetime.fromisoformat(seg["arrival"]["at"]) - datetime.datetime.fromisoformat(seg["departure"]["at"])).seconds // 3600
            for seg in itineraries[0]["segments"]
        ])

        duration = itineraries[0]["duration"]

        flight_info.append(
            f"Airline: {airline}\nStops: {stops} ({stop_durations} hrs)\nDuration: {duration}\nPrice: {price} {currency}\n"
        )

    return "\n---\n".join(flight_info) if flight_info else "No flights found."

# OpenAI Chat logic
def ask_openai(prompt):
    openai.api_key = OPENAI_API_KEY
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "You are a helpful travel assistant."},
            {"role": "user", "content": prompt},
        ]
    )
    return response["choices"][0]["message"]["content"]

# Gradio app logic
def travel_bot(departure, destination, date, adults):
    flight_data = search_flights(departure, destination, date, adults)
    gpt_summary = ask_openai(
        f"Find me the best flight options from {departure} to {destination} on {date} for {adults} adults. Provide suggestions based on these results:\n\n{flight_data}"
    )
    return flight_data, gpt_summary

interface = gr.Interface(
    fn=travel_bot,
    inputs=[
        gr.Textbox(label="Departure Airport Code (e.g. MAN)"),
        gr.Textbox(label="Destination Airport Code (e.g. LHE)"),
        gr.Textbox(label="Departure Date (YYYY-MM-DD)"),
        gr.Number(label="Number of Adults", value=1),
    ],
    outputs=[
        gr.Textbox(label="Flight Details"),
        gr.Textbox(label="AI Travel Advice"),
    ],
    title="Travel Assistant Bot",
    description="Find best flights using Amadeus API and get travel suggestions with OpenAI."
)

interface.launch()
import gradio as gr
import openai
import requests
import datetime
import re

# --- Replace with your actual keys ---
openai.api_key = "sk-proj--VYeIYbLuvMDS6SC-T3BqMYVhMrO7xW59KHio9LvAz7I4A"
AMADEUS_CLIENT_ID = ""
AMADEUS_CLIENT_SECRET = ""

# --- Get Amadeus Token ---
def get_amadeus_token():
    url = "https://test.api.amadeus.com/v1/security/oauth2/token"
    payload = {
        "grant_type": "client_credentials",
        "client_id": AMADEUS_CLIENT_ID,
        "client_secret": AMADEUS_CLIENT_SECRET
    }
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    res = requests.post(url, data=payload, headers=headers)
    return res.json().get("access_token")

amadeus_token = get_amadeus_token()

# --- Conversation Memory ---
user_data = {
    "origin": None,
    "destination": None,
    "departure_date": None,
    "hotel_star": None,
    "passengers": None,
    "transportation": None
}

# --- Helper Functions ---
def extract_flight_info(text):
    date_match = re.search(r"(?:on\s)?(\w+\s\d{1,2}(?:st|nd|rd|th)?,?\s?\d{4})", text)
    from_match = re.search(r"(?:from\s)([A-Za-z ]+)", text)
    to_match = re.search(r"(?:to\s)([A-Za-z ]+)", text)

    extracted = {}
    if date_match:
        try:
            date = datetime.datetime.strptime(date_match.group(1), "%b %d %Y")
        except:
            try:
                date = datetime.datetime.strptime(date_match.group(1), "%B %d %Y")
            except:
                date = None
        if date:
            extracted["departure_date"] = date.strftime("%Y-%m-%d")
    if from_match:
        extracted["origin"] = from_match.group(1).strip()
    if to_match:
        extracted["destination"] = to_match.group(1).strip()

    return extracted

# --- Bot Logic ---
def travel_bot(message, history):
    global user_data, amadeus_token

    # First: try to extract data from user's free input
    extracted = extract_flight_info(message.lower())
    user_data.update({k: v for k, v in extracted.items() if v})

    if "5 star" in message:
        user_data["hotel_star"] = "5"
    elif "4 star" in message:
        user_data["hotel_star"] = "4"
    elif "3 star" in message:
        user_data["hotel_star"] = "3"

    if "no transport" in message or "no shuttle" in message:
        user_data["transportation"] = "no"
    elif "with transport" in message or "shuttle" in message:
        user_data["transportation"] = "yes"

    # Ask missing data
    if not user_data["origin"]:
        return "Where are you flying from?"
    if not user_data["destination"]:
        return "Where do you want to go?"
    if not user_data["departure_date"]:
        return "What is your departure date?"
    if not user_data["hotel_star"]:
        return "What hotel star do you prefer? 3, 4, or 5?"
    if not user_data["transportation"]:
        return "Do you want transportation services (e.g. shuttle, taxi)?"

    # --- Now Fetch Flights ---
    headers = {"Authorization": f"Bearer {amadeus_token}"}
    params = {
        "originLocationCode": user_data["origin"][:3].upper(),  # airport codes required
        "destinationLocationCode": user_data["destination"][:3].upper(),
        "departureDate": user_data["departure_date"],
        "adults": 1,
        "currencyCode": "USD",
        "max": 3
    }
    flight_url = "https://test.api.amadeus.com/v2/shopping/flight-offers"
    flight_res = requests.get(flight_url, headers=headers, params=params)

    if flight_res.status_code != 200:
        return "Sorry, I couldn't fetch flight data. Please check airport codes or try again later."

    flights = flight_res.json().get("data", [])

    if not flights:
        return "No flights found. Try changing your dates or location."

    # Format response
    response = f"✈️ Flights from {user_data['origin']} to {user_data['destination']} on {user_data['departure_date']}:\n"
    for i, flight in enumerate(flights):
        itineraries = flight["itineraries"]
        price = flight["price"]["total"]
        duration = itineraries[0]["duration"]
        carrier = flight["validatingAirlineCodes"][0]
        response += f"\nFlight {i+1}: Airline: {carrier}, Price: ${price}, Duration: {duration}"

    response += f"\n\n🏨 You prefer a {user_data['hotel_star']}-star hotel."
    response += f"\n🚗 Transportation services required: {'Yes' if user_data['transportation'] == 'yes' else 'No'}."

    # Reset user data for next round
    user_data = {k: None for k in user_data}

    return response

# --- Gradio App ---
with gr.Blocks() as demo:
    gr.ChatInterface(
        fn=travel_bot,
        title="🌍 Travel Assistant Bot",
        description="Book flights, hotels, and transport with Amadeus API",
    )

demo.launch()

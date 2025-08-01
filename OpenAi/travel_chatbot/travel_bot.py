import openai
import gradio as gr
import requests

# === CONFIG ===
openai.api_key = "sk-prg13EHfato9LvAz7I4A"
AMADEUS_CLIENT_ID = "6CBVi"
AMADEUS_CLIENT_SECRET = "sMz5BGj"

# === Get Amadeus Access Token ===
def get_amadeus_token():
    url = "https://test.api.amadeus.com/v1/security/oauth2/token"
    payload = {
        "grant_type": "client_credentials",
        "client_id": AMADEUS_CLIENT_ID,
        "client_secret": AMADEUS_CLIENT_SECRET
    }
    r = requests.post(url, data=payload)
    return r.json().get("access_token")

# === Get Flights from Amadeus API ===
def search_flights(origin, destination, date):
    token = get_amadeus_token()
    headers = {"Authorization": f"Bearer {token}"}
    url = f"https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode={origin}&destinationLocationCode={destination}&departureDate={date}&adults=1"
    res = requests.get(url, headers=headers)
    data = res.json()
    
    if "data" not in data:
        return "No flights found. Try a different date or airport code."

    offers = data["data"][:3]  # Limit to 3 offers
    results = []
    for offer in offers:
        segments = offer["itineraries"][0]["segments"]
        price = offer["price"]["total"]
        flight_info = []
        for seg in segments:
            flight_info.append(f"{seg['departure']['iataCode']} → {seg['arrival']['iataCode']} ({seg['carrierCode']} {seg['number']})")
        results.append(f"✈️ {' → '.join(flight_info)} | 💵 ${price}")
    return "\n\n".join(results)

# === Chat History ===
chat_history = []

# === Main Chatbot Logic ===
def chatbot(user_input):
    chat_history.append({"role": "user", "content": user_input})

    # Detect flight intent manually
    if "book" in user_input.lower() or "flight" in user_input.lower():
        return "Sure! Can you tell me your departure city?"

    # Collect required info
    required_keys = ["origin", "destination", "date"]
    values = {key: None for key in required_keys}

    # Try to extract values manually (you can add NLP later)
    for message in chat_history:
        content = message["content"].lower()
        if "from" in content and values["origin"] is None:
            values["origin"] = content.split("from")[1].split()[0].upper()
        if "to" in content and values["destination"] is None:
            values["destination"] = content.split("to")[1].split()[0].upper()
        if any(month in content for month in ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]) or "-" in content:
            values["date"] = content.split()[-1] if "-" in content else "2025-11-05"  # fallback

    if all(values.values()):
        result = search_flights(values["origin"], values["destination"], values["date"])
        chat_history.clear()
        return result

    # Use OpenAI to reply normally
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=chat_history
    )
    bot_reply = response["choices"][0]["message"]["content"]
    chat_history.append({"role": "assistant", "content": bot_reply})
    return bot_reply

# === Gradio Interface ===
demo = gr.Interface(fn=chatbot, inputs="text", outputs="text", title="Travel Assistant Chatbot")

# === Run App ===
demo.launch()

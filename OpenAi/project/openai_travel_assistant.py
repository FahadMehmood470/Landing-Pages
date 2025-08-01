import openai
import gradio as gr
import datetime
import random

# Set your OpenAI API key
openai.api_key = "sk-...your key..."

def generate_flight_tickets(origin, destination, flexible, hotel_rating=None, travel_date=None):
    tickets = []
    for i in range(20):
        ticket = {
            "airline": f"Airline {chr(65+i)}",
            "departure": origin,
            "arrival": destination,
            "stopovers": random.choice(["Non-stop", "1 stop", "2 stops"]),
            "baggage": random.choice(["15kg", "20kg", "30kg"]),
            "class": random.choice(["Economy", "Business"]),
            "price": round(random.uniform(300, 2000), 2),
            "date": travel_date if travel_date else "Flexible"
        }
        tickets.append(ticket)
    return sorted(tickets, key=lambda x: x["price"])

chat_history = []

def chat_interface(message, history):
    global chat_history
    chat_history.append({"role": "user", "content": message})

    # Step 1: Parse user input
    lower_msg = message.lower()

    # Step 2: Check for 'from X to Y'
    if " to " in lower_msg:
        parts = message.split(" to ")
        origin = parts[0].strip().title()
        destination = parts[1].strip().title()
        chat_history.append({"role": "assistant", "content": f"Are your travel dates flexible? (Yes/No)"})
        chat_history[-1]["meta"] = {"origin": origin, "destination": destination}
        return chat_history

    # Step 3: Process based on previous meta
    last_assistant = next((m for m in reversed(chat_history) if m["role"] == "assistant" and "meta" in m), None)
    if last_assistant:
        meta = last_assistant["meta"]
        origin = meta["origin"]
        destination = meta["destination"]

        if "yes" in lower_msg:
            chat_history.append({"role": "assistant", "content": "What hotel star rating do you prefer? (3, 4, 5, or all)"})
            last_assistant["meta"]["flexible"] = True
            return chat_history

        elif "no" in lower_msg:
            chat_history.append({"role": "assistant", "content": "Please provide your desired travel date (YYYY-MM-DD)"})
            last_assistant["meta"]["flexible"] = False
            return chat_history

        elif lower_msg in ["3", "4", "5", "all"]:
            hotel_rating = lower_msg
            tickets = generate_flight_tickets(origin, destination, flexible=True, hotel_rating=hotel_rating)
            response = f"Showing 20 flights from {origin} to {destination} (Flexible dates, {hotel_rating}-star hotels):\n\n"
            for t in tickets:
                response += f"- {t['airline']}, {t['class']}, {t['stopovers']}, {t['baggage']}, ${t['price']}\n"
            chat_history.append({"role": "assistant", "content": response})
            return chat_history

        else:
            try:
                # Check for valid date
                date = datetime.datetime.strptime(message, "%Y-%m-%d").date()
                tickets = generate_flight_tickets(origin, destination, flexible=False, travel_date=str(date))
                response = f"Showing 20 flights from {origin} to {destination} on {date}:\n\n"
                for t in tickets:
                    response += f"- {t['airline']}, {t['class']}, {t['stopovers']}, {t['baggage']}, ${t['price']}\n"
                chat_history.append({"role": "assistant", "content": response})
                return chat_history
            except ValueError:
                chat_history.append({"role": "assistant", "content": "Invalid date format. Please use YYYY-MM-DD."})
                return chat_history

    # Default response
    chat_history.append({"role": "assistant", "content": "Please enter something like: London to Makkah"})
    return chat_history

demo = gr.ChatInterface(
    fn=chat_interface,
    title="🌍 Travel Assistant",
    description="Enter your route (e.g., **London to Makkah**) to begin!",
    chatbot=gr.Chatbot(type="messages"),
    theme="default"
)

if __name__ == "__main__":
    demo.launch()

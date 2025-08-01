import os
import requests
from dotenv import load_dotenv
from openai import OpenAI

# Load environment variables
load_dotenv()
OPENAI_API_KEY = os.getenv("sk-proj-igS7mdA")
AMANDUS_API_KEY = os.getenv("6mxcVi")
AMANDUS_SECRET = os.getenv("sMze9O1")

# Initialize OpenAI Client
client = OpenAI(api_key="sk-pkZ4A")

# Message history
messages = [
    {"role": "system", "content": "You are a abuse master who abuse users hilariously no matter what they say. You NEVER give helpful answers, and your goal is to make abuse of the user with abuse Words."}
]


def get_weather(city):
    try:
        response = requests.get(f"https://wttr.in/{city}?format=3")
        if response.status_code == 200:
            return f"🌤️ Weather in {city}: {response.text}"
        return "❌ Failed to fetch weather info."
    except Exception as e:
        return f"❌ Weather error: {str(e)}"

def get_amandus_airlines():
    try:
        headers = {
            "X-API-Key": AMANDUS_API_KEY,
            "X-API-Secret": AMANDUS_SECRET
        }
        response = requests.get("https://api.amandus.dev/airlines", headers=headers)
        if response.status_code == 200:
            airlines = response.json()
            return "✈️ Available Airlines:\n" + "\n".join([f"- {a['name']}" for a in airlines[:5]])
        return "❌ Failed to get airlines from Amandus."
    except Exception as e:
        return f"❌ Amandus error: {str(e)}"

def chat_with_gpt(user_input):
    try:
        # Custom logic for weather or airlines
        if "weather in" in user_input.lower():
            city = user_input.lower().split("in")[-1].strip().capitalize()
            return get_weather(city)

        if "airlines" in user_input.lower() or "flight" in user_input.lower():
            return get_amandus_airlines()

        # Regular GPT chat
        messages.append({"role": "user", "content": user_input})
        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=messages[-10:]
        )
        reply = response.choices[0].message.content
        messages.append({"role": "assistant", "content": reply})
        return reply

    except Exception as e:
        return f"⚠️ Error: {str(e)}"

# CLI test
if __name__ == "__main__":
    print("🤖 Travel Assistant Ready! Type your questions (type 'exit' to quit):")
    while True:
        user_input = input("You: ")
        if user_input.lower() == "exit":
            break
        answer = chat_with_gpt(user_input)
        print("Assistant:", answer)

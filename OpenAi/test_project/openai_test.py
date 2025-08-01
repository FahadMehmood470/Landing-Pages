import openai

client = openai.OpenAI(api_key="sk-proj--VYeIYbA")  # Replace with your actual key

response = client.chat.completions.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "user", "content": "Give me 3 ideas for Make Our Airline COmpany On The Top"}]
)

print(response.choices[0].message.content)

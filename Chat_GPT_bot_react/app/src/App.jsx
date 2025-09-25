import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, MessageInput, TypingIndicator, Message } from "@chatscope/chat-ui-kit-react";
function App() {
  const API_KEY = ""
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: "restaurant chatbot",
      sender: "ChatGPT",
      direction: "ingoing"

    }
  ]) //[]

  const handleSend = async (message) => {
    const newmessage = {
      message: message,
      sender: "user",
      direction: "outgoing"
    }

    const newmessages = [...messages, newmessage]

    // updates our message state
    setMessages(newmessages)
    //
    setTyping(true)
    await processMessageToChatGPT(newmessages)
  }

  async function processMessageToChatGPT(chatMessages) {
    let apimessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant"
      }
      else {
        role = "user"
      }
      return { role: role, content: messageObject.message }
    })

    const systemMessage = {
  role: "system",
  content: "You are a helpful restaurant chatbot. Your job is to show the menu, take orders, confirm them, and collect delivery details politely. Always ask step by step."
}

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,
        ...apimessages
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data)
      setMessages(
        [...chatMessages, {
          message: data.choices[0].message.content,
          sender: "ChatGPT",
          direction: "incoming" // LEFT SIDE

        }]
      );
      setTyping(false)
    });

  }

  return (
    <div className='App'>
      <div style={{ position: "relative", height: "800px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>
            <MessageList
              typingIndicator={typing ? <TypingIndicator content="Agent is typing" /> : null}
            >
              {
                messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })
              }
            </MessageList>
            <MessageInput placeholder='Type message here' onSend={handleSend} />
          </ChatContainer>
        </MainContainer>

      </div>
    </div>
  )
}

export default App

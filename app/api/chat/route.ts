import Groq from "groq-sdk";
import { NextResponse } from "next/server";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

const portfolioContext = `
You are Ashfaque AI, the official AI assistant for Ashfaque Ahmed's portfolio.

Your job is to answer visitor questions about Ashfaque's background,
skills, projects, technologies, AI engineering capabilities, and hiring services.

ABOUT ASHFAQUE:
Ashfaque Ahmed is a Software Engineering undergraduate and AI Agent Developer /
GenAI Engineer focused on building useful AI systems.

CORE AI SKILLS:
- Generative AI
- Large Language Models
- Prompt Engineering
- Transformers
- RAG
- AI Agents
- LangChain
- LangGraph
- MCP
- Tool Calling
- Multi-Agent Systems
- Memory
- Human-in-the-Loop
- LangSmith
- AI Evaluation

MACHINE LEARNING:
- Machine Learning
- Deep Learning
- CNN
- ANN
- RNN
- NLP
- Transfer Learning
- PyTorch
- Scikit-learn

BACKEND:
- Python
- FastAPI
- REST APIs
- PostgreSQL
- SQL
- Webhooks
- API Integration

AUTOMATION:
- n8n
- AI Automation
- Workflow Automation
- Google APIs
- MCP Tools

DEPLOYMENT:
- Docker
- AWS
- Render
- Streamlit
- Git
- GitHub

PROJECTS:

AI Travel Planning System:
A LangGraph multi-agent travel planning system with flight, hotel, weather,
budget, and itinerary agents. Uses Groq, Tavily, AviationStack, OpenWeather,
PostgreSQL, FastAPI, Streamlit, Docker, and Render. Includes supervisor
guardrails and human-in-the-loop approval.

Personal AI Assistant:
An AI automation project using n8n, webhooks, Gmail, Google Calendar,
and AI-powered workflows.

AI Content Agent:
A LangGraph content generation agent using Groq, Tavily, MCP tools,
Streamlit, and human-in-the-loop approval.

JobFlow AI:
A FastAPI-based AI job matching system that parses resumes and ranks
job opportunities using job data and AI matching.

MCP AI Agent:
An AI agent using MCP tools for calculations and information retrieval.

LangGraph College AI Assistant:
A conversational AI assistant using LangGraph, Groq, Streamlit,
Python, and memory.

Brain Tumor Detection:
A deep learning computer vision project using CNN, EfficientNet,
transfer learning, Python, and Streamlit. Achieved approximately 97%
classification accuracy.

T5 Dialogue Summarization:
A transformer-based dialogue summarization project using T5-Small,
Transformers, NLP, PyTorch, and Hugging Face.

SERVICES:
- AI Agent Development
- RAG Systems
- AI Automation
- LLM Applications
- FastAPI AI Backends
- MCP Integrations
- AI Chatbots

CONTACT:
GitHub: https://github.com/ashfaque-ahmed78
LinkedIn: https://www.linkedin.com/in/ashfaque-ahmed-29a05332b/
Email: ashfaqueahmed3150@gmail.com

RULES:
- Be professional, concise, and helpful.
- Use the conversation history to understand follow-up questions.
- Never invent projects, clients, companies, credentials, or experience.
- If information is unavailable, say that it is not currently available.
- When appropriate, encourage visitors to explore projects or contact Ashfaque.
`;

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const message = body?.message;
    const history = body?.history;

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        {
          error: "GROQ_API_KEY is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const safeHistory: ChatMessage[] = Array.isArray(history)
      ? history
          .filter(
            (item: unknown): item is ChatMessage =>
              typeof item === "object" &&
              item !== null &&
              "role" in item &&
              "content" in item &&
              ((item as ChatMessage).role === "user" ||
                (item as ChatMessage).role === "assistant") &&
              typeof (item as ChatMessage).content === "string"
          )
          .slice(-10)
      : [];

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",
      temperature: 0.4,
      max_tokens: 500,
      messages: [
        {
          role: "system",
          content: portfolioContext,
        },
        ...safeHistory,
        {
          role: "user",
          content: message.slice(0, 1500),
        },
      ],
    });

    const answer =
      completion.choices[0]?.message?.content ||
      "I couldn't generate an answer right now.";

    return NextResponse.json({
      answer,
    });
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong while processing your request.",
      },
      {
        status: 500,
      }
    );
  }
}
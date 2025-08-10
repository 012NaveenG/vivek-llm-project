
const APIs = {
    CHAIN_OF_THOUGHTS: "http://localhost:8003/legal-assistant/",
    IGNORE: "http://127.0.0.1:8001/chat",
    INSTRUCTION_OVERRIDE: "http://localhost:8000/ask",
    LANGUAGE: "http://localhost:8000/ask",
    REASON_AND_REACT: "http://127.0.0.1:8002/ask",

    // Indrect Injection Module
    CHATBOT: "http://127.0.0.1:8006/chat",
    COMMENT: "http://127.0.0.1:8006/comment",
    ENCODE: "http://localhost:8007/analyze",

    //Broken Access Control Module
    PERSONA: "http://127.0.0.1:8008/ask",

    // Insecure Output Handling
    CODE_INJECTION: "http://127.0.0.1:8000/ask",
    SQL_INJECTION: "http://localhost:8000/ask",

    // Hallucination Module
    MISINFORMATION: "http://localhost:8000/chat",

    // SENSITIVE INFO DISCLOSURE MODULE
    SYSTEM_PROMPT: "http://localhost:8000/ask"
}


export { APIs }
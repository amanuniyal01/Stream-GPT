import Groq from "groq-sdk";


const groq = new Groq({
    apiKey: import.meta.env.VITE_GPT_API_KEY,
    dangerouslyAllowBrowser: true,
});

export default groq;

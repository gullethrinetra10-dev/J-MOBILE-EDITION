// 1. API Key kosam local storage check chesthundi, lekapothe prompt box chupisthundi
function getApiKey() {
    let apiKey = localStorage.getItem("GEMINI_API_KEY");
    if (!apiKey) {
        apiKey = prompt("Enter your Gemini API Key for J.A.R.V.I.S:");
        if (apiKey) {
            localStorage.setItem("GEMINI_API_KEY", apiKey.trim());
        }
    }
    return apiKey;
}

// 2. J.A.R.V.I.S message send chese function lo idi vadandi
async function sendMessage(userMessage) {
    const GEMINI_API_KEY = getApiKey();
    if (!GEMINI_API_KEY) {
        alert("API Key is required to run J.A.R.V.I.S!");
        return;
    }

    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                contents: [{ parts: [{ text: userMessage }] }]
            })
        });

        const data = await response.json();
        const botReply = data.candidates[0].content.parts[0].text;
        
        // Output screen meeda chupinchadaniki code ikkada pettochu
        console.log("J.A.R.V.I.S:", botReply);
        
    } catch (error) {
        console.error("Error getting response:", error);
    }
}

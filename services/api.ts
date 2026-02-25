export const sendMessage = async (question: string) => {
  const res = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question })
  });

  const data = await res.json();

  console.log("API RESPONSE:", data); 

  return data.answer || data.message || "No response received";
};

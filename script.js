function analyze() {
  let query = document.getElementById("query").value;
  let responseBox = document.getElementById("responseText");

  if (!query) {
    responseBox.innerText = "⚠️ Please enter your Excel query first.";
    return;
  }

  // Placeholder for AI integration
  responseBox.innerText = 
    "✅ Thanks for your question: \"" + query + "\"\n\n" +
    "👉 Our AI will analyze your Excel issue and guide you with steps.";
}

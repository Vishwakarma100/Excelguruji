document.getElementById("analyzeBtn").addEventListener("click", () => {
  const fileInput = document.getElementById("fileInput");
  const responseDiv = document.getElementById("response");

  if (!fileInput.files.length) {
    responseDiv.innerText = "⚠️ Please upload a screenshot first.";
    return;
  }

  // Demo response
  responseDiv.innerText = "✅ Screenshot uploaded successfully.\nGuruji is analyzing your Excel query...";
  
  setTimeout(() => {
    responseDiv.innerText = "📊 Guruji's Response:\n\nLagta hai tumhe SUMIF formula lagana chahiye. Example:\n=SUMIF(A:A, \"Invoice 1\", L:L)";
  }, 2000);
});

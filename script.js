document.getElementById("sendButton").addEventListener("click", function () {
    const userInput = document.getElementById("userInput").value.trim().toLowerCase();
    let response;
  
    if (!userInput) {
      response = "Please enter a goal or hobby to get suggestions!";
    } else if (userInput.includes("coding") || userInput.includes("programming")) {
      response = "2025 could be your year to master AI, explore web development, or contribute to open-source projects!";
    } else if (userInput.includes("design") || userInput.includes("designing")) {
      response = "Consider learning advanced UI/UX design tools or working on creative, interactive web projects!";
    } else if (userInput.includes("writing")) {
      response = "How about starting a blog, writing short stories, or publishing an e-book?";
    } else {
      response = "Follow your passion and set achievable goals to make 2025 unforgettable!";
    }
  
    document.getElementById("chatResponse").innerText = response;
  });
  
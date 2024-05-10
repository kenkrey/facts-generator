const apiKey = "eJku7YLvsvuyxrrnxnsOKw==HEHLRVY0gCHxecSP";
const displayText = document.getElementById("display-text");

const getFact = async () => {
  try {
    const response = await axios.get(
      "https://api.api-ninjas.com/v1/trivia?category=sciencenature",
      {
        headers: { "X-Api-Key": apiKey },
      }
    );

    if (response.data && response.data.length > 0) {
      const factText = response.data[0].question;

      console.log("Fact:", factText);

      const newLI = document.createElement("li");
      const textNode = document.createTextNode(
        factText + " answer: " + response.data[0].answer
      );
      //   newLI.appendChild(textNode);
      //   displayText.appendChild(newLI);
      displayText.innerHTML =
        factText + `<br> <span>answer : ${response.data[0].answer} </span>`;
    } else {
      console.log("No facts found");
    }
  } catch (error) {
    if (error.response) {
      console.error("Error:", error.response.data);
    } else if (error.request) {
      console.error("Error: No response received", error.request);
    } else {
      console.error("Error:", error.message);
    }
  }
};

const button = document.querySelector("button");
button.addEventListener("click", getFact);

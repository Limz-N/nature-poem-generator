function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "1490b47t099f1e6f544foa12f4aa1733";
  let prompt = `User Instructions: Generate an nature poem about ${instructionsInput.value}`;
  let context =
    "You are a creative poem expert, and love to write short poems about nature. Your mission is to generate a 4 line poem. Please ensure the poem is in basic HTML format. Make sure to follow the user instructions. Sign the poem with 'SheCodes AI' in a <strong> element. Do not include markdown around it";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating"> ⌛Generating a nature poem about ${instructionsInput.value}⌛ </div>`;

  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

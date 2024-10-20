function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Alone in the woods I felt",
    autoStart: true,
    delay: 1,
    cursor: "🌻",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);

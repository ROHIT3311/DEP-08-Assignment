const topics = {
  data_structures: [
    "Arrays",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs",
  ],
  algorithms: [
    "Dynamic Programming",
    "Recursion",
    "Backtracking",
    "Sorting",
    "Searching",
    "Greedy",
  ],
};

function loadTopics() {
  const category = document.getElementById("category").value;
  const topicSelect = document.getElementById("topics");
  const topicSection = document.getElementById("topicSection");
  const generateBtn = document.getElementById("generateBtn");

  topicSelect.innerHTML = "";
  if (category) {
    topicSection.classList.remove("hidden");
    topics[category].forEach((topic) => {
      const option = document.createElement("option");
      option.value = topic;
      option.textContent = topic;
      topicSelect.appendChild(option);
    });
    generateBtn.classList.remove("hidden");
  } else {
    topicSection.classList.add("hidden");
    generateBtn.classList.add("hidden");
  }
}

async function generateQuestion() {
  const topic = document.getElementById("topics").value;
  if (!topic) return;

  const response = await fetchAI(`Generate a problem based on ${topic}`);
  document.getElementById("questionText").textContent = response;
  document.getElementById("questionSection").classList.remove("hidden");
  document.getElementById("solutionInput").classList.remove("hidden");
  document.getElementById("submitBtn").classList.remove("hidden");
}

async function submitSolution() {
  const solution = document.getElementById("solutionInput").value;
  if (!solution) return;

  const feedback = await fetchAI(
    `Analyze this solution for time and space complexity, suggest improvements: ${solution}`
  );
  const grade = await fetchAI(
    `Grade this solution from 1 to 5 based on best practices and testability: ${solution}`
  );

  document.getElementById("feedbackText").textContent = feedback;
  document.getElementById("gradeText").textContent = `Grade: ${grade}`;
  document.getElementById("feedbackSection").classList.remove("hidden");
}

async function fetchAI(prompt) {
  const apiKey = "88674f35a4024141b8d14c202d367f01";

  try {
    const response = await fetch(
      `https://ai-proxy.lab.epam.com/openai/deployments/gpt-4/chat/completions?api-version=2023-08-01-preview`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": `${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4",
          temperature: 0,
          messages: [{ role: "user", content: prompt }],
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim();
    }
  } catch (error) {
    console.error(`Error with model ${model}:`, error);
  }

  return "AI response could not be generated.";
}

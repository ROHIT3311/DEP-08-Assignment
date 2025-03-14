// Import functions from your script.js (you may need to refactor your code into smaller functions for easy testing)
import {
  loadTopics,
  generateQuestion,
  submitSolution,
  fetchAI,
} from "./script";

// Mock fetchAI function
jest.mock("./script", () => ({
  ...jest.requireActual("./script"),
  fetchAI: jest.fn(),
}));

describe("Problem-Solving Application Tests", () => {
  let categorySelect,
    topicSelect,
    generateBtn,
    questionText,
    solutionInput,
    submitBtn;

  beforeEach(() => {
    // Mock DOM elements
    document.body.innerHTML = `
      <div>
        <select id="category">
          <option value="data_structures">Data Structures</option>
          <option value="algorithms">Algorithms</option>
        </select>
        <div id="topicSection" class="hidden">
          <select id="topics"></select>
        </div>
        <button id="generateBtn" class="hidden"></button>
        <div id="questionSection" class="hidden">
          <p id="questionText"></p>
        </div>
        <textarea id="solutionInput" class="hidden"></textarea>
        <button id="submitBtn" class="hidden"></button>
        <div id="feedbackSection" class="hidden">
          <p id="feedbackText"></p>
          <p id="gradeText"></p>
        </div>
      </div>
    `;

    categorySelect = document.getElementById("category");
    topicSelect = document.getElementById("topics");
    generateBtn = document.getElementById("generateBtn");
    questionText = document.getElementById("questionText");
    solutionInput = document.getElementById("solutionInput");
    submitBtn = document.getElementById("submitBtn");
  });

  describe("loadTopics", () => {
    it("should populate topics based on the selected category", () => {
      categorySelect.value = "data_structures";
      loadTopics();

      expect(topicSelect.innerHTML).toContain("Arrays");
      expect(topicSelect.innerHTML).toContain("Linked Lists");
      expect(generateBtn.classList.contains("hidden")).toBe(false);
    });

    it("should hide topic section if no category is selected", () => {
      categorySelect.value = "";
      loadTopics();

      expect(topicSelect.innerHTML).toBe("");
      expect(generateBtn.classList.contains("hidden")).toBe(true);
    });
  });

  describe("generateQuestion", () => {
    it("should generate a question and show the question section", async () => {
      topicSelect.value = "Arrays";
      fetchAI.mockResolvedValueOnce("What is an array?");

      await generateQuestion();

      expect(questionText.textContent).toBe("What is an array?");
      expect(
        document.getElementById("questionSection").classList.contains("hidden")
      ).toBe(false);
      expect(solutionInput.classList.contains("hidden")).toBe(false);
      expect(submitBtn.classList.contains("hidden")).toBe(false);
    });

    it("should not generate a question if no topic is selected", async () => {
      topicSelect.value = "";
      await generateQuestion();

      expect(questionText.textContent).toBe("");
      expect(
        document.getElementById("questionSection").classList.contains("hidden")
      ).toBe(true);
      expect(solutionInput.classList.contains("hidden")).toBe(true);
      expect(submitBtn.classList.contains("hidden")).toBe(true);
    });
  });

  describe("submitSolution", () => {
    it("should show feedback and grade after solution submission", async () => {
      solutionInput.value = "const arr = [1, 2, 3];";
      fetchAI.mockResolvedValueOnce(
        "Time complexity: O(n), Space complexity: O(n)."
      );
      fetchAI.mockResolvedValueOnce("Grade: 4");

      await submitSolution();

      expect(document.getElementById("feedbackText").textContent).toBe(
        "Time complexity: O(n), Space complexity: O(n)."
      );
      expect(document.getElementById("gradeText").textContent).toBe("Grade: 4");
      expect(
        document.getElementById("feedbackSection").classList.contains("hidden")
      ).toBe(false);
    });

    it("should not submit if no solution is entered", async () => {
      solutionInput.value = "";
      await submitSolution();

      expect(
        document.getElementById("feedbackSection").classList.contains("hidden")
      ).toBe(true);
    });
  });

  describe("fetchAI", () => {
    it("should make a network request and return a response", async () => {
      fetchAI.mockResolvedValueOnce("What is an array?");

      const response = await fetchAI("Generate a problem based on Arrays");
      expect(response).toBe("What is an array?");
    });

    it("should return an error message if the API fails", async () => {
      fetchAI.mockRejectedValueOnce(new Error("Network error"));

      const response = await fetchAI("Generate a problem based on Arrays");
      expect(response).toBe("AI response could not be generated.");
    });
  });
});

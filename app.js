const LETTERS = ["A", "B", "C", "D"];

const state = {
  level: 1,
  level1CorrectForUnlock: 0,
  selectedIndex: null,
  currentQuestion: null,
  queues: {
    1: [],
    2: []
  },
  used: {
    1: [],
    2: []
  }
};

const dom = {
  level1Btn: document.getElementById("level1Btn"),
  level2Btn: document.getElementById("level2Btn"),
  progressText: document.getElementById("progressText"),
  poolText: document.getElementById("poolText"),
  questionMeta: document.getElementById("questionMeta"),
  scenario: document.getElementById("scenario"),
  sentence: document.getElementById("sentence"),
  choices: document.getElementById("choices"),
  checkBtn: document.getElementById("checkBtn"),
  nextBtn: document.getElementById("nextBtn"),
  feedback: document.getElementById("feedback"),
  feedbackTitle: document.getElementById("feedbackTitle"),
  feedbackChoice: document.getElementById("feedbackChoice"),
  feedbackHint: document.getElementById("feedbackHint"),
  feedbackWrongWhy: document.getElementById("feedbackWrongWhy"),
  feedbackCorrectWhy: document.getElementById("feedbackCorrectWhy"),
  feedbackRule: document.getElementById("feedbackRule"),
  feedbackPunctuation: document.getElementById("feedbackPunctuation"),
  hintRow: document.getElementById("hintRow"),
  wrongWhyRow: document.getElementById("wrongWhyRow"),
  correctWhyRow: document.getElementById("correctWhyRow"),
  ruleRow: document.getElementById("ruleRow"),
  punctuationRow: document.getElementById("punctuationRow")
};

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function questionsForLevel(level) {
  return QUESTIONS.filter((q) => q.level === level);
}

function refreshQueue(level) {
  state.queues[level] = shuffle(questionsForLevel(level));
  state.used[level] = [];
}

function getNextQuestion(level) {
  if (state.queues[level].length === 0) {
    refreshQueue(level);
  }
  const question = state.queues[level].pop();
  state.used[level].push(question.id);
  return question;
}

function updateProgressText() {
  const needed = Math.max(0, 6 - state.level1CorrectForUnlock);
  dom.progressText.textContent = `Level 1 correct: ${state.level1CorrectForUnlock} / 6 to unlock Level 2`;
  const remaining = state.queues[state.level].length;
  dom.poolText.textContent = `Question pool: ${remaining} remaining before reshuffle`;

  if (needed === 0) {
    dom.level2Btn.disabled = false;
  }
}

function setActiveLevel(level) {
  state.level = level;
  dom.level1Btn.classList.toggle("active", level === 1);
  dom.level2Btn.classList.toggle("active", level === 2);
  dom.level1Btn.setAttribute("aria-selected", String(level === 1));
  dom.level2Btn.setAttribute("aria-selected", String(level === 2));
  loadQuestion();
}

function renderChoices(question) {
  dom.choices.innerHTML = "";
  question.choices.forEach((choice, index) => {
    const label = document.createElement("label");
    label.className = "choice";

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = String(index);
    input.addEventListener("change", () => {
      state.selectedIndex = index;
      dom.checkBtn.disabled = false;
    });

    const content = document.createElement("div");
    content.innerHTML = `<span class="choice-label">${LETTERS[index]}.</span>${choice}`;

    label.append(input, content);
    dom.choices.append(label);
  });
}

function hideFeedback() {
  dom.feedback.hidden = true;
  dom.feedback.classList.remove("wrong", "correct");
}

function loadQuestion() {
  state.currentQuestion = getNextQuestion(state.level);
  state.selectedIndex = null;

  dom.questionMeta.textContent = `Level ${state.level} • ${state.currentQuestion.relationshipType}`;
  dom.scenario.innerHTML = state.currentQuestion.scenario;
  dom.sentence.innerHTML = state.currentQuestion.sentenceWithBlank;

  renderChoices(state.currentQuestion);
  hideFeedback();
  dom.checkBtn.disabled = true;
  dom.nextBtn.disabled = true;
  updateProgressText();
}

function showWrongFeedback(question, selectedIndex) {
  dom.feedback.hidden = false;
  dom.feedback.classList.add("wrong");
  dom.feedback.classList.remove("correct");

  dom.feedbackTitle.innerHTML = "❌ <strong>Try again</strong>";
  dom.feedbackChoice.innerHTML = `<strong>Your choice (${LETTERS[selectedIndex]})</strong>: ${question.choices[selectedIndex]}`;
  dom.feedbackHint.innerHTML = question.hintByChoice[selectedIndex];
  dom.feedbackWrongWhy.innerHTML = question.wrongWhyByChoice[selectedIndex];

  dom.hintRow.hidden = false;
  dom.wrongWhyRow.hidden = false;
  dom.correctWhyRow.hidden = true;
  dom.ruleRow.hidden = true;
  dom.punctuationRow.hidden = true;

  dom.nextBtn.disabled = true;
}

function showCorrectFeedback(question, selectedIndex) {
  dom.feedback.hidden = false;
  dom.feedback.classList.add("correct");
  dom.feedback.classList.remove("wrong");

  dom.feedbackTitle.innerHTML = "✅ <strong>Correct</strong>";
  dom.feedbackChoice.innerHTML = `<strong>Your answer (${LETTERS[selectedIndex]})</strong>: ${question.choices[selectedIndex]}`;
  dom.feedbackCorrectWhy.innerHTML = question.correctWhy;
  dom.feedbackRule.innerHTML = question.ruleToRemember;

  const hasPunctuation = question.punctuationNote && question.punctuationNote !== "None";
  dom.punctuationRow.hidden = !hasPunctuation;
  dom.feedbackPunctuation.textContent = hasPunctuation ? question.punctuationNote : "";

  dom.hintRow.hidden = true;
  dom.wrongWhyRow.hidden = true;
  dom.correctWhyRow.hidden = false;
  dom.ruleRow.hidden = false;

  dom.nextBtn.disabled = false;
}

function lockInputs(locked) {
  const inputs = dom.choices.querySelectorAll("input");
  inputs.forEach((input) => {
    input.disabled = locked;
  });
}

function checkAnswer() {
  if (state.selectedIndex === null) return;

  const question = state.currentQuestion;
  const isCorrect = state.selectedIndex === question.correctIndex;

  if (!isCorrect) {
    showWrongFeedback(question, state.selectedIndex);
    lockInputs(false);
    return;
  }

  if (state.level === 1) {
    state.level1CorrectForUnlock += 1;
  }

  showCorrectFeedback(question, state.selectedIndex);
  lockInputs(true);
  updateProgressText();
}

dom.checkBtn.addEventListener("click", checkAnswer);
dom.nextBtn.addEventListener("click", loadQuestion);

dom.level1Btn.addEventListener("click", () => setActiveLevel(1));
dom.level2Btn.addEventListener("click", () => {
  if (dom.level2Btn.disabled) return;
  setActiveLevel(2);
});

refreshQueue(1);
refreshQueue(2);
loadQuestion();

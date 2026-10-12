
const exercises = [
  // PUSH — chest, shoulders, triceps
  ["Bench Press", "push", "Chest", "3 × 6–10", true],
  ["Incline Dumbbell Press", "push", "Chest", "3 × 8–12", true],
  ["Incline Bench Press", "push", "Chest", "3 × 8–10", true],
  ["Shoulder Press", "push", "Shoulders", "3 × 8–12", true],
  ["Front Raise", "push", "Shoulders", "3 × 12–15", true],
  ["Lateral Raise", "push", "Shoulders", "3 × 12–15", true],
  ["Triceps Kickback", "push", "Triceps", "3 × 12–15", true],
  ["Overhead Triceps Extension", "push", "Triceps", "3 × 10–12", true],
  ["Triceps Press", "push", "Triceps", "3 × 10–12", true],
  ["Rope Pushdown", "push", "Triceps", "3 × 10–15", true],

  // PULL — back, biceps
  ["Single-Arm Row", "pull", "Back", "3 × 10", true],
  ["Lat Pulldown", "pull", "Back", "3 × 10", true],
  ["Seated Cable Row", "pull", "Back", "3 × 10", true],
  ["Straight-Arm Lat Pulldown", "pull", "Back", "3 × 12", true],
  ["Seated Row", "pull", "Back", "3 × 10", true],
  ["Crossbody Hammer Curl", "pull", "Biceps", "3 × 10", true],
  ["Chest-Supported Dumbbell Curl", "pull", "Biceps", "3 × 10", true],
  ["21s Biceps Curls", "pull", "Biceps", "2–3 rounds", true],
  ["Biceps Curl", "pull", "Biceps", "3 × 15", true],

  // LEGS
  ["Squat", "legs", "Quads / Glutes", "3 × 10", true],
  ["Romanian Deadlift", "legs", "Hamstrings", "3 × 10", true],
  ["Bulgarian Split Squat", "legs", "Legs", "3 × 10 / leg", true],
  ["Leg Press", "legs", "Quads", "3 × 10", true],
  ["Dumbbell Front Squat", "legs", "Quads", "4 × 12, 10, 8, 6", true],
  ["Hip Thrust", "legs", "Glutes", "4 × 12, 10, 8, 6", true],
  ["Walking Lunges", "legs", "Legs", "3 × 12 / leg", true],
  ["Leg Extension", "legs", "Quads", "2 × 12–15", true],
  ["Hamstring Curl", "legs", "Hamstrings", "2 × 12", true],

  // ABS
  ["6-Inch Leg Hold", "core", "Abs", "3 × 20 sec", false],
  ["Around the World", "core", "Abs", "3 × 10", false],
  ["In and Outs", "core", "Abs", "3 × 10", false],
  ["Bicycle Crunch", "core", "Abs", "3 × 20", false],
  ["Plank", "core", "Core", "3 × 30 sec", false],
  ["Sit-Ups", "core", "Abs", "3 × 15", false],
  ["Crunches", "core", "Abs", "3 × 20", false],
  ["Wall Sit", "core", "Legs / Core", "3 × 30 sec", false],
  ["Side Plank", "core", "Obliques", "3 × 20 sec / side", false],

  // CARDIO
  ["Outdoor Run", "cardio", "Endurance", "2–3 miles", false],
  ["Treadmill Run", "cardio", "Endurance", "20–30 minutes", false]
];

const quotes = [
  "NEVER GIVE UP ON YOURSELF.",

  "THE ONLY PERSON WHO CAN HELP YOU AT THE END OF THE DAY IS YOU. PEOPLE CAN GUIDE YOU, BUT THEY CAN'T HOLD YOUR HAND AND DO IT FOR YOU. ALWAYS REMEMBER THAT.",

  "WORK HARD. DON'T LET THE WEIGHTS BREAK YOU. BUT SOME DAYS THEY WILL WIN LOL.",

  "THE ONLY PERSON WHO CAN DO THE WORK IS YOU. KEEP SHOWING UP."
];

const weekMessages = {
  1: "Week 1 — Foundation. Start with a weight you control.",
  2: "Week 2 — Build. Add a little weight if your form is solid.",
  3: "Week 3 — Push. Progress your reps or weight if ready.",
  4: "Week 4 — Recover. Reduce the load and focus on form."
};

let currentFilter = "all";
let currentWeek = 1;
let quoteIndex = 0;

const grid = document.getElementById("exercise-grid");
const dialog = document.getElementById("tutorial-dialog");

function progressionText(exercise) {
  const weighted = exercise[4];

  if (!weighted) {
    return "Keep a steady pace and progress gradually.";
  }

  if (currentWeek === 1) {
    return "Find your starting weight.";
  }

  if (currentWeek === 2) {
    return "If ready, add 2.5–5 lb upper body or 5–10 lb lower body.";
  }

  if (currentWeek === 3) {
    return "Add reps or a small amount of weight if form stays solid.";
  }

  return "Recovery week: try 10–20% lighter.";
}

function renderExercises() {
  grid.replaceChildren();

  const filtered = exercises.filter(exercise =>
    currentFilter === "all" || exercise[1] === currentFilter
  );

  filtered.forEach(exercise => {
    const [name, category, muscle, reps] = exercise;

    const card = document.createElement("article");
    card.className = "exercise-card";

    const categoryLabel = document.createElement("span");
    categoryLabel.className = "category";
    categoryLabel.textContent = category.toUpperCase();

    const heading = document.createElement("h3");
    heading.textContent = name;

    const muscleLabel = document.createElement("p");
    muscleLabel.textContent = muscle;

    const prescription = document.createElement("p");
    prescription.className = "prescription";
    prescription.textContent = reps;

    const progression = document.createElement("p");
    progression.textContent = progressionText(exercise);

    const tutorial = document.createElement("button");
    tutorial.type = "button";
    tutorial.textContent = "WATCH TUTORIAL ↗";
    tutorial.addEventListener("click", () => {
      if (dialog && typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });

    card.append(
      categoryLabel,
      heading,
      muscleLabel,
      prescription,
      progression,
      tutorial
    );

    grid.appendChild(card);
  });
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;

    document.querySelectorAll(".filter").forEach(item => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-pressed", String(active));
    });

    renderExercises();
  });
});

document.querySelectorAll(".split-card").forEach(button => {
  button.addEventListener("click", () => {
    const matchingFilter = document.querySelector(
      `.filter[data-filter="${button.dataset.day}"]`
    );

    matchingFilter?.click();
    document.getElementById("workouts").scrollIntoView({
      behavior: "smooth"
    });
  });
});

document.getElementById("training-week").addEventListener("change", event => {
  currentWeek = Number(event.target.value);
  document.getElementById("week-description").textContent =
    weekMessages[currentWeek];

  renderExercises();
});

// MOTIVATIONAL QUOTES

function showQuote() {
  document.getElementById("quote-text").textContent = quotes[quoteIndex];
  document.getElementById("quote-count").textContent =
    `${String(quoteIndex + 1).padStart(2, "0")} / ${String(quotes.length).padStart(2, "0")}`;
}

document.getElementById("next-quote").addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  showQuote();
});

document.getElementById("prev-quote").addEventListener("click", () => {
  quoteIndex = (quoteIndex - 1 + quotes.length) % quotes.length;
  showQuote();
});

// WORKOUT TRACKER

const storageKey = "mario-fitness-workouts";

function loadWorkouts() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

let workouts = loadWorkouts();

function renderLog() {
  const container = document.getElementById("workout-log");
  container.replaceChildren();

  if (workouts.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "No workouts yet. Time to put in work.";
    container.appendChild(empty);
    return;
  }

  workouts.forEach(workout => {
    const row = document.createElement("div");
    row.className = "log-item";

    const details = document.createElement("div");
    const name = document.createElement("strong");
    name.textContent = workout.name;

    const date = document.createElement("small");
    date.textContent = ` — ${workout.date}`;

    details.append(name, date);

    const stats = document.createElement("strong");
    stats.textContent =
      `${workout.sets} × ${workout.reps} · ${workout.weight} lb`;

    row.append(details, stats);
    container.appendChild(row);
  });
}

document.getElementById("workout-form").addEventListener("submit", event => {
  event.preventDefault();

  const name = document.getElementById("exercise-name").value.trim();
  const sets = Number(document.getElementById("sets").value);
  const reps = Number(document.getElementById("reps").value);
  const weight = Number(document.getElementById("weight").value);

  if (!name || !Number.isInteger(sets) || !Number.isInteger(reps) ||
      sets < 1 || reps < 1 || !Number.isFinite(weight) || weight < 0) {
    return;
  }

  workouts.unshift({
    name,
    sets,
    reps,
    weight,
    date: new Date().toLocaleDateString()
  });

  workouts = workouts.slice(0, 100);

  try {
    localStorage.setItem(storageKey, JSON.stringify(workouts));
  } catch {
    alert("Browser storage is unavailable. Your workout may not be saved.");
  }

  renderLog();
  event.target.reset();
});

document.getElementById("clear-log").addEventListener("click", () => {
  if (!confirm("Clear your workout history?")) return;

  workouts = [];
  try {
    localStorage.removeItem(storageKey);
  } catch {
    // Storage may be unavailable.
  }
  renderLog();
});

// TUTORIAL MODAL

document.getElementById("close-dialog").addEventListener("click", () => {
  dialog.close();
});

document.getElementById("dialog-ok").addEventListener("click", () => {
  dialog.close();
});

// MOBILE NAVIGATION

const menuButton = document.getElementById("menu-btn");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", () => {
  const open = navigation.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navigation.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navigation.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// INITIALIZE

document.getElementById("year").textContent = new Date().getFullYear();
renderExercises();
renderLog();
showQuote();

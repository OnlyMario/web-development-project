
// ==========================================
// MARIO FITNESS | BUILT BY T MUSCLE
// ==========================================

// EXERCISE LIBRARY
// Name, Category, Muscle, Sets/Reps, Weighted?

const exercises = [
  // PUSH
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

  // PULL
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
  ["Hanging Knee Raises", "core", "Abs / Hip Flexors", "3 × 10–15", false],
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
  ["Treadmill Run", "cardio", "Endurance", "20–30 min", false]
];

// ==========================================
// FOUR-WEEK TRAINING CYCLE
// ==========================================

let currentWeek = 1;
let currentFilter = "all";

const weeks = {
  1: {
    title: "WEEK 1: FOUNDATION",
    description: "Learn the exercises, focus on technique, and find manageable starting weights."
  },
  2: {
    title: "WEEK 2: BUILD",
    description: "Add a rep or a small amount of weight when you can complete your sets with good form."
  },
  3: {
    title: "WEEK 3: PROGRESS",
    description: "Try to improve your previous performance while maintaining control and technique."
  },
  4: {
    title: "WEEK 4: RECOVER",
    description: "Reduce training intensity or volume, recover, and prepare to repeat the cycle."
  }
};

function progressionText(exercise) {
  if (!exercise[4]) {
    return "Focus on control, consistency, and gradual improvement.";
  }

  if (currentWeek === 1) {
    return "Start with a weight you can control.";
  }

  if (currentWeek === 2) {
    return "If ready, add a rep or a small weight increase.";
  }

  if (currentWeek === 3) {
    return "Try to beat your previous performance safely.";
  }

  return "Recovery week: use lighter weights or fewer sets.";
}

function updateWeek() {
  const info = weeks[currentWeek];

  document.getElementById("week-title").textContent = info.title;
  document.getElementById("week-description").textContent = info.description;
  document.getElementById("library-week-label").textContent = info.title;
  document.getElementById("library-week-description").textContent =
    info.description;

  document.querySelectorAll(".cycle-steps span").forEach((span, index) => {
    span.classList.toggle("active", index + 1 === currentWeek);
  });

  renderExercises();
  renderSchedule();
}

document.getElementById("training-week").addEventListener("change", event => {
  currentWeek = Number(event.target.value);
  updateWeek();
});

// ==========================================
// TRAINING PROGRAMS
// ==========================================

const trainingPlans = {
  3: {
    title: "3-DAY SPLIT",
    description: "Three full-body sessions for people balancing work, school, and fitness.",
    days: [
      {
        title: "FULL BODY A",
        category: "legs",
        focus: "Full-body strength",
        exercises: ["Squat", "Bench Press", "Seated Cable Row", "Plank"]
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Rest or take an easy walk.",
        exercises: []
      },
      {
        title: "FULL BODY B",
        category: "pull",
        focus: "Strength and muscle development",
        exercises: ["Romanian Deadlift", "Lat Pulldown", "Shoulder Press", "Bicycle Crunch"]
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Recovery or gentle mobility.",
        exercises: []
      },
      {
        title: "FULL BODY C",
        category: "push",
        focus: "Full-body strength",
        exercises: ["Leg Press", "Incline Dumbbell Press", "Single-Arm Row", "Walking Lunges"]
      },
      {
        title: "OPTIONAL CARDIO",
        category: null,
        focus: "Optional 20–30-minute walk, jog, or bike ride.",
        exercises: []
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Recover before the next week.",
        exercises: []
      }
    ]
  },

  4: {
    title: "4-DAY SPLIT",
    description: "A balanced Push, Pull, Legs, and Cardio + Core schedule.",
    days: [
      {
        title: "PUSH DAY",
        category: "push",
        focus: "Chest, shoulders, and triceps",
        exercises: ["Bench Press", "Incline Dumbbell Press", "Shoulder Press", "Rope Pushdown"]
      },
      {
        title: "PULL DAY",
        category: "pull",
        focus: "Back and biceps",
        exercises: ["Lat Pulldown", "Seated Cable Row", "Crossbody Hammer Curl", "Biceps Curl"]
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Rest and recovery.",
        exercises: []
      },
      {
        title: "LEG DAY",
        category: "legs",
        focus: "Quads, hamstrings, and glutes",
        exercises: ["Squat", "Romanian Deadlift", "Leg Press", "Hamstring Curl"]
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Recover from lifting.",
        exercises: []
      },
      {
        title: "CARDIO + CORE",
        category: "core",
        focus: "Cardio and abdominal strength",
        exercises: ["Bicycle Crunch", "Plank", "Side Plank"],
        cardio: true
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Full recovery.",
        exercises: []
      }
    ]
  },

  5: {
    title: "5-DAY SPLIT",
    description: "A consistent program with strength, upper body, and conditioning.",
    days: [
      {
        title: "PUSH DAY",
        category: "push",
        focus: "Chest, shoulders, and triceps",
        exercises: ["Bench Press", "Incline Dumbbell Press", "Lateral Raise", "Rope Pushdown"]
      },
      {
        title: "PULL DAY",
        category: "pull",
        focus: "Back and biceps",
        exercises: ["Lat Pulldown", "Seated Cable Row", "Single-Arm Row", "Biceps Curl"]
      },
      {
        title: "LEG DAY",
        category: "legs",
        focus: "Quads, hamstrings, and glutes",
        exercises: ["Squat", "Romanian Deadlift", "Leg Press", "Hamstring Curl"]
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Recovery.",
        exercises: []
      },
      {
        title: "UPPER BODY",
        category: "push",
        focus: "Chest, back, shoulders, and arms",
        exercises: ["Incline Dumbbell Press", "Seated Cable Row", "Shoulder Press", "Biceps Curl"]
      },
      {
        title: "CARDIO + CORE",
        category: "core",
        focus: "Endurance and abdominal strength",
        exercises: ["Bicycle Crunch", "In and Outs", "Plank"],
        cardio: true
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Full recovery.",
        exercises: []
      }
    ]
  },

  tmuscle: {
    title: "TRAIN LIKE T MUSCLE",
    description: "My personal-style training split with hanging knee raises and 20–30 minutes of cardio on training days.",
    days: [
      {
        title: "T MUSCLE PUSH DAY",
        category: "push",
        focus: "Chest, shoulders, triceps, abs, and cardio",
        exercises: [
          "Bench Press",
          "Incline Dumbbell Press",
          "Shoulder Press",
          "Lateral Raise",
          "Rope Pushdown",
          "Hanging Knee Raises"
        ],
        cardio: true
      },
      {
        title: "T MUSCLE PULL DAY",
        category: "pull",
        focus: "Back, biceps, abs, and cardio",
        exercises: [
          "Lat Pulldown",
          "Seated Cable Row",
          "Single-Arm Row",
          "Crossbody Hammer Curl",
          "Biceps Curl",
          "Hanging Knee Raises"
        ],
        cardio: true
      },
      {
        title: "T MUSCLE LEG DAY",
        category: "legs",
        focus: "Legs, abs, and cardio",
        exercises: [
          "Squat",
          "Romanian Deadlift",
          "Leg Press",
          "Walking Lunges",
          "Hamstring Curl",
          "Hanging Knee Raises"
        ],
        cardio: true
      },
      {
        title: "ACTIVE RECOVERY",
        category: null,
        focus: "Light movement or rest. Optional easy cardio.",
        exercises: []
      },
      {
        title: "T MUSCLE UPPER BODY",
        category: "push",
        focus: "Chest, back, shoulders, arms, and abs",
        exercises: [
          "Incline Dumbbell Press",
          "Seated Cable Row",
          "Shoulder Press",
          "Biceps Curl",
          "Overhead Triceps Extension",
          "Hanging Knee Raises"
        ],
        cardio: true
      },
      {
        title: "T MUSCLE ABS + CARDIO",
        category: "core",
        focus: "Core strength and endurance",
        exercises: [
          "Hanging Knee Raises",
          "Bicycle Crunch",
          "In and Outs",
          "Plank",
          "Side Plank"
        ],
        cardio: true
      },
      {
        title: "REST DAY",
        category: null,
        focus: "Recover before repeating the program.",
        exercises: []
      }
    ]
  }
};

const planChoice = document.getElementById("plan-choice");
const scheduleGrid = document.getElementById("schedule-grid");

function renderSchedule() {
  const plan = trainingPlans[planChoice.value];

  document.getElementById("program-title").textContent = plan.title;
  document.getElementById("program-description").textContent =
    plan.description;

  scheduleGrid.replaceChildren();

  plan.days.forEach((day, index) => {
    const card = document.createElement("article");
    card.className = "schedule-day " +
      (day.exercises.length ? "training" : "rest");

    const label = document.createElement("span");
    label.className = "day-label";
    label.textContent = "DAY " + (index + 1);

    const title = document.createElement("h3");
    title.textContent = day.title;

    const focus = document.createElement("p");
    focus.textContent = day.focus;

    card.append(label, title, focus);

    if (day.exercises.length) {
      const list = document.createElement("ul");

      day.exercises.forEach(name => {
        const exercise = exercises.find(item => item[0] === name);
        const li = document.createElement("li");

        li.textContent = exercise
          ? name + ": " + exercise[3]
          : name;

        list.appendChild(li);
      });

      if (day.cardio) {
        const cardio = document.createElement("li");
        cardio.textContent =
          "CARDIO: 20–30 minutes (walk, jog, bike, or treadmill)";
        list.appendChild(cardio);
      }

      const notes = document.createElement("p");
      notes.className = "day-notes";
      notes.textContent =
        currentWeek === 4
          ? "Recovery week: reduce weight, sets, or intensity as needed."
          : "Warm up 5–10 min. Rest about 1–3 min between sets. Prioritize good form.";

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "VIEW EXERCISE LIBRARY ↗";

      button.addEventListener("click", () => {
        const filter = document.querySelector(
          '.filter[data-filter="' + day.category + '"]'
        );

        if (filter) filter.click();

        document.getElementById("workouts").scrollIntoView({
          behavior: "smooth"
        });
      });

      card.append(list, notes, button);
    } else {
      const restNote = document.createElement("p");
      restNote.className = "day-notes";
      restNote.textContent =
        "Recovery matters. Take it easy and listen to your body.";

      card.appendChild(restNote);
    }

    scheduleGrid.appendChild(card);
  });
}

planChoice.addEventListener("change", renderSchedule);

// ==========================================
// EXERCISE FILTERS
// ==========================================

const exerciseGrid = document.getElementById("exercise-grid");
const dialog = document.getElementById("tutorial-dialog");

function renderExercises() {
  exerciseGrid.replaceChildren();

  const filtered = exercises.filter(item =>
    currentFilter === "all" || item[1] === currentFilter
  );

  filtered.forEach(exercise => {
    const [name, category, muscle, prescription] = exercise;

    const card = document.createElement("article");
    card.className = "exercise-card";

    const categoryLabel = document.createElement("span");
    categoryLabel.className = "category";
    categoryLabel.textContent = category.toUpperCase();

    const heading = document.createElement("h3");
    heading.textContent = name;

    const muscleText = document.createElement("p");
    muscleText.textContent = muscle;

    const setsText = document.createElement("p");
    setsText.className = "prescription";
    setsText.textContent = prescription;

    const progressText = document.createElement("p");
    progressText.textContent = progressionText(exercise);

    const tutorial = document.createElement("button");
    tutorial.type = "button";
    tutorial.textContent = "WATCH TUTORIAL ↗";

    tutorial.addEventListener("click", () => {
      if (typeof dialog.showModal === "function") {
        dialog.showModal();
      }
    });

    card.append(
      categoryLabel,
      heading,
      muscleText,
      setsText,
      progressText,
      tutorial
    );

    exerciseGrid.appendChild(card);
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

// ==========================================
// T MUSCLE QUOTES
// INCLUDING THE NEW NUTRITION QUOTE
// ==========================================

const tMuscleQuotes = [
  "NEVER GIVE UP ON YOURSELF.",

  "THE ONLY PERSON WHO CAN HELP YOU AT THE END OF THE DAY IS YOU. PEOPLE CAN GUIDE YOU, BUT THEY CAN'T HOLD YOUR HAND AND DO IT FOR YOU. ALWAYS REMEMBER THAT.",

  "WORK HARD. DON'T LET THE WEIGHTS BREAK YOU. BUT SOME DAYS THEY WILL WIN LOL 😂",

  "YOUR JOURNEY. YOUR WORK. YOUR RESULTS.",

  "NOBODY CAN PUT IN THE REPS FOR YOU.",

  "SOME DAYS YOU WIN. SOME DAYS THE WEIGHTS WIN. SHOW UP AGAIN ANYWAY.",

  "STOP WAITING FOR MOTIVATION. BUILD DISCIPLINE.",

  "YOU DON'T HAVE TO BE THE STRONGEST. JUST BE STRONGER THAN YESTERDAY.",

  "CONSISTENCY IN THE GYM AND CONSISTENCY IN YOUR DIET GO HAND IN HAND. FUEL YOUR BODY FOR THE RESULTS YOU WANT."
];

const dailyQuote = document.getElementById("daily-quote");
let lastRandomQuote = -1;

function generateMotivation() {
  let index;

  do {
    index = Math.floor(Math.random() * tMuscleQuotes.length);
  } while (
    index === lastRandomQuote &&
    tMuscleQuotes.length > 1
  );

  lastRandomQuote = index;
  dailyQuote.textContent = tMuscleQuotes[index];
}

document.getElementById("new-motivation").addEventListener(
  "click",
  generateMotivation
);

// ==========================================
// ANIME MOTIVATION
// Original character-inspired lines
// ==========================================

const animeQuotes = [
  {
    series: "ONE PIECE",
    character: "MONKEY D. LUFFY",
    quote: "YOUR DREAM IS WORTH FIGHTING FOR. DON'T QUIT BECAUSE THE JOURNEY GETS HARD."
  },
  {
    series: "ONE PIECE",
    character: "RORONOA ZORO",
    quote: "STRENGTH COMES FROM DISCIPLINE, SACRIFICE, AND NEVER STOPPING."
  },
  {
    series: "ONE PIECE",
    character: "SANJI",
    quote: "REAL STRENGTH IS KNOWING WHAT YOU'RE FIGHTING FOR."
  },
  {
    series: "NARUTO",
    character: "ROCK LEE",
    quote: "HARD WORK CAN TAKE YOU FURTHER THAN TALENT ALONE."
  },
  {
    series: "NARUTO",
    character: "NARUTO UZUMAKI",
    quote: "DON'T LET YOUR BEGINNING DECIDE YOUR ENDING."
  },
  {
    series: "NARUTO",
    character: "MIGHT GUY",
    quote: "KEEP TRAINING. YOUR EFFORT WILL BUILD YOUR FUTURE."
  },
  {
    series: "DRAGON BALL",
    character: "VEGETA",
    quote: "BREAK THROUGH THE LIMITS YOU SET FOR YOURSELF."
  },
  {
    series: "DRAGON BALL",
    character: "GOKU",
    quote: "THERE'S ALWAYS ANOTHER LEVEL TO REACH."
  },
  {
    series: "BLACK CLOVER",
    character: "ASTA",
    quote: "NOT BEING STRONG ENOUGH TODAY ISN'T A REASON TO GIVE UP."
  },
  {
    series: "ATTACK ON TITAN",
    character: "EREN YEAGER",
    quote: "KEEP MOVING FORWARD EVEN WHEN THE PATH IS DIFFICULT."
  }
];

let animeIndex = 0;

function showAnimeQuote() {
  const anime = animeQuotes[animeIndex];

  document.getElementById("anime-series").textContent = anime.series;
  document.getElementById("anime-character").textContent =
    "INSPIRED BY " + anime.character;
  document.getElementById("anime-quote").textContent = anime.quote;

  document.getElementById("anime-count").textContent =
    String(animeIndex + 1).padStart(2, "0") +
    " / " +
    String(animeQuotes.length).padStart(2, "0");
}

document.getElementById("next-anime").addEventListener("click", () => {
  animeIndex = (animeIndex + 1) % animeQuotes.length;
  showAnimeQuote();
});

document.getElementById("prev-anime").addEventListener("click", () => {
  animeIndex =
    (animeIndex - 1 + animeQuotes.length) % animeQuotes.length;
  showAnimeQuote();
});

// ==========================================
// T MUSCLE MINDSET CAROUSEL
// ==========================================

let quoteIndex = 0;

function showQuote() {
  document.getElementById("quote-text").textContent =
    tMuscleQuotes[quoteIndex];

  document.getElementById("quote-count").textContent =
    String(quoteIndex + 1).padStart(2, "0") +
    " / " +
    String(tMuscleQuotes.length).padStart(2, "0");
}

document.getElementById("next-quote").addEventListener("click", () => {
  quoteIndex = (quoteIndex + 1) % tMuscleQuotes.length;
  showQuote();
});

document.getElementById("prev-quote").addEventListener("click", () => {
  quoteIndex =
    (quoteIndex - 1 + tMuscleQuotes.length) % tMuscleQuotes.length;
  showQuote();
});

// ==========================================
// WORKOUT TRACKER
// ==========================================

const storageKey = "mario-fitness-workouts";

function loadWorkouts() {
  try {
    const saved = JSON.parse(
      localStorage.getItem(storageKey) || "[]"
    );

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
    date.textContent = " | " + workout.date;

    details.append(name, date);

    const stats = document.createElement("strong");
    stats.textContent =
      workout.sets + " × " + workout.reps +
      " | " + workout.weight + " lb";

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

  if (
    !name ||
    !Number.isInteger(sets) || sets < 1 || sets > 50 ||
    !Number.isInteger(reps) || reps < 1 || reps > 200 ||
    !Number.isFinite(weight) || weight < 0 || weight > 2000
  ) {
    alert("Please enter valid workout information.");
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
    alert("Browser storage is unavailable. Your log may not be saved.");
  }

  renderLog();
  event.target.reset();
});

document.getElementById("clear-log").addEventListener("click", () => {
  if (!confirm("Clear your entire workout history?")) return;

  workouts = [];

  try {
    localStorage.removeItem(storageKey);
  } catch {
    // Storage may be disabled.
  }

  renderLog();
});

// ==========================================
// TUTORIAL DIALOG
// ==========================================

document.getElementById("close-dialog").addEventListener("click", () => {
  dialog.close();
});

document.getElementById("dialog-ok").addEventListener("click", () => {
  dialog.close();
});

// ==========================================
// MOBILE NAVIGATION
// ==========================================

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

// ==========================================
// INITIALIZE WEBSITE
// ==========================================

document.getElementById("year").textContent =
  new Date().getFullYear();

updateWeek();
generateMotivation();
showAnimeQuote();
showQuote();
renderLog();

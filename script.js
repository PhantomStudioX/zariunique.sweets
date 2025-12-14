/* ============================
   GLOBAL THEME & EFFECT CONTROL
   ============================ */

/*
  State is stored in localStorage so:
  - All pages stay in sync
  - Refresh doesn't reset theme
*/

const THEME_KEY = "christmasTheme";
const EFFECTS_KEY = "christmasEffects";

/* Default values */
const isChristmasOn =
  localStorage.getItem(THEME_KEY) !== "off";

const areEffectsOn =
  localStorage.getItem(EFFECTS_KEY) !== "off";

/* Apply theme */
if (isChristmasOn) {
  document.body.classList.add("christmas");
} else {
  document.body.classList.remove("christmas");
}

/* Apply effects */
const effectsContainer = document.querySelector(".snow-container");

if (effectsContainer) {
  effectsContainer.style.display = areEffectsOn ? "" : "none";
}

/* ============================
   TOGGLE FUNCTIONS
   ============================ */

/* Toggle Christmas theme (borders + styles) */
function toggleChristmasTheme() {
  const enabled = document.body.classList.toggle("christmas");
  localStorage.setItem(THEME_KEY, enabled ? "on" : "off");
}

/* Toggle falling effects */
function toggleChristmasEffects() {
  const enabled =
    effectsContainer && effectsContainer.style.display === "none";

  if (effectsContainer) {
    effectsContainer.style.display = enabled ? "" : "none";
  }

  localStorage.setItem(EFFECTS_KEY, enabled ? "on" : "off");
}

/* ============================
   PAGE-SPECIFIC EFFECT LOGIC
   ============================ */

/*
  CSS already handles:
  body.christmas              → normal fall
  body.cupcakes-page.christmas → drift
  JS does NOT animate — it only enables/disables
*/

document.addEventListener("DOMContentLoaded", () => {
  if (!areEffectsOn && effectsContainer) {
    effectsContainer.style.display = "none";
  }
});

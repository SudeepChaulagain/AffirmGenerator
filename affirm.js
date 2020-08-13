const affirms = [
  "Nothing is more expensive than a free lunch.",
  "Venture for more as you got one fool part while other parts are brave!",
  "Someone in your life looks up to you, you're amazing!",
  "You deserve nothing but the best!",
  "You're doing a great job.",
  "Live for today, tomorrow is unresolved",
  "You are beautiful inside and out.",
  "Love yourself first.",
];
const affirmBtn = document.querySelector(".form-input input");
const text = document.querySelector(".text p");
const shuffle = (max) => {
  let index = Math.floor(Math.random() * Math.floor(max));
  text.innerHTML = affirms[index];
};
affirmBtn.addEventListener("click", () => {
  shuffle(affirms.length);
});

const navDrop = document.querySelector(".nav-dropdown");
const navToggle = document.querySelector(".icon");
const answerToggles = document.querySelectorAll(".showAnswer");
const skills = document.querySelectorAll(".single-skill");
const skillBtns = document.querySelectorAll(".slide-btn");
let skillsCounter = 1;
navToggle.addEventListener("click", (e) => {
  navDrop.classList.toggle("show-dropdown");
  e.currentTarget.firstElementChild.classList.toggle("icon-rotate");
});
console.log(skills);
answerToggles.forEach((answerToggle) => {
  answerToggle.addEventListener("click", (e) => {
    e.currentTarget.parentElement.nextElementSibling.nextElementSibling.classList.toggle(
      "show-answer"
    );
    e.currentTarget.firstElementChild.classList.toggle("icon-rotate");
  });
});

// SLIDER FUNCTIONALITY FOR SKILLS SECTION

// handle function for skills slider
function handleSkillSlide(id) {
  skills.forEach((skill) => {
    const skillNum = Number(skill.getAttribute("id").slice(6));
    if (skillNum === id) {
      skill.className = "single-skill active-slide";
    } else if (
      (skillNum < id && (skillNum === 1 ? id !== skills.length : true)) ||
      (skillNum === skills.length && id === 1)
    ) {
      skill.className = "single-skill prev-slide";
    } else {
      skill.className = "single-skill next-slide";
    }
  });
}
//

function nextSkill() {
  if (skillsCounter < skills.length) {
    skillsCounter++;
  } else {
    skillsCounter = 1;
  }
  handleSkillSlide(skillsCounter);
}
function prevSkill() {
  if (skillsCounter > 1) {
    skillsCounter--;
  } else {
    skillsCounter = skills.length;
  }
  handleSkillSlide(skillsCounter);
}

skillBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.classList.contains("right-btn")) {
      nextSkill();
    } else {
      prevSkill();
    }
  });
});

// END OF SLIDER FUNCTIONALITY FOR SKILLS SECTION

// GENERAL EVENT LISTENERS FOR RESPONSIVE SLIDERS
window.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth < 996) {
    handleSkillSlide(skillsCounter);
  }
});
window.addEventListener("resize", () => {
  if (window.innerWidth < 996) {
    handleSkillSlide(skillsCounter);
  } else {
    skills.forEach((skill) => {
      skill.className = "single-skill";
    });
    skillsCounter = 1;
  }
});

// END OF LISTENERS FOR RESPONSIVE SLIDERS

// SMOOTH SCROLL
const navbar = document.querySelector("nav");
const navCenter = document.querySelector(".nav-center");

navbar.addEventListener("click", (e) => {
  if (e.target.matches(".nav-link") || e.target.matches(".dropdown-link")) {
    e.preventDefault();
    const id = e.target.dataset.id;
    const scrollTarget = document.getElementById(id);

    window.scrollTo({
      left: 0,
      top: scrollTarget.offsetTop - navCenter.getBoundingClientRect().height,
    });
    if (e.target.matches(".dropdown-link")) {
      navDrop.classList.toggle("show-dropdown");
      document
        .querySelector(".btn.icon")
        .firstElementChild.classList.toggle("icon-rotate");
    }
  }
});

// END OF SMOOTH SCROLL

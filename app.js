const navLinks = document.querySelector(".nav-links");
const toggler = document.querySelector(".toggler");

toggler.addEventListener("click", () => {
  navLinks.classList.toggle("show-links");
});

// TABS
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  //console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    //remove active form all
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    //hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

//questions
//using selectors inside the element
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  // console.log(btn);

  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});

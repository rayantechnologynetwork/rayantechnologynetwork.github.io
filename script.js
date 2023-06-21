/********** typing effect main con ************/
const text = `شرکت رایان تکنولوژی نتورک، یک شرکت فعال در حوزه خدمات فناوری اطلاعات است. ما خدمات گسترده ای را در زمینه طراحی وب سایت، تولید محتوا، شبکه، امنیت و سئو ارائه می‌دهیم. 
تیم ما از افراد جوان در این حوضه تشکبل شده و تمام تلاش ما برای آسان کردن کارهای پیچیده ی شما است.`;
const element = document.getElementById("--abutUsText");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 20); 
  }
}

typeEffect();


/********** typing effect in why us ************/
const words = ["ما", "شرکت ما", "سروریس های ما"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingEffect = () => {
  const changingWordElement = document.getElementById("changing-word");
  const currentWord = words[wordIndex];

  if (isDeleting) {
    changingWordElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    changingWordElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    isDeleting = true;
    setTimeout(typingEffect, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typingEffect, 500);
  } else {
    setTimeout(typingEffect, 100);
  }
};

typingEffect();


/********** typing effect in our work ************/
const words1 = ["پروژه های", "موفقیت های", "نمونه کارهای"];
let wordIndex1 = 0;
let charIndex1 = 0;
let isDeleting1 = false;

const typingEffect1 = () => {
  const changingWordElement1 = document.getElementById("changing-word1");
  const currentWord1 = words1[wordIndex1];

  if (isDeleting1) {
    changingWordElement1.textContent = currentWord1.substring(0, charIndex1 - 1);
    charIndex1--;
  } else {
    changingWordElement1.textContent = currentWord1.substring(0, charIndex1 + 1);
    charIndex1++;
  }

  if (!isDeleting1 && charIndex1 === currentWord1.length) {
    isDeleting1 = true;
    setTimeout(typingEffect1, 1000);
  } else if (isDeleting1 && charIndex1 === 0) {
    isDeleting1 = false;
    wordIndex1 = (wordIndex1 + 1) % words1.length;
    setTimeout(typingEffect1, 500);
  } else {
    setTimeout(typingEffect1, 100);
  }
};

typingEffect1();


/********** carousel in our work section ************/
// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Array of text to be displayed
  const textArray = [
    "Text Goes Here",
    "Another Text Example",
    "More Text to Slide",
  ];
  
  const slideTextElement = document.getElementById("slideText");
  let currentIndex = 0;

  // Function to update the text
  function updateText() {
    slideTextElement.textContent = textArray[currentIndex];
    currentIndex = (currentIndex + 1) % textArray.length;
  }

  // Initial text update
  updateText();

  // Listen for animation end event and update the text
  slideTextElement.addEventListener("animationend", updateText);
});





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


// scroll indicator - when the user has scrolled
window.onscroll = function() {indicator()};

function indicator() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("--indicatorItSelf").style.width = scrolled + "%";
} 


// to scroll to an specific element/container 
function scrollToElement(elementId) {
  var targetElement = document.getElementById(elementId);
  if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop });
  }
}


// packages section - more info 
function toggleTextAndRotate(section) {
  var hiddenText = document.getElementById("--moreInfoText" + section);
  var rotateImg = document.getElementById("--moreInfoIcon" + section);
  hiddenText.style.display = hiddenText.style.display === "none" ? "block" : "none";
  if(hiddenText.style.display === 'none') {
    rotateImg.classList.remove("rotate2");
    rotateImg.classList.add("rotate1");
  } else {
    rotateImg.classList.remove("rotate1");
    rotateImg.classList.add("rotate2");
  }
}



// animation - when the user has reached the content
function isElementInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function showElementsAnimation() {
  var element1 = document.getElementById("--otherComp");
  if (isElementInViewport(element1)) {
    element1.classList.add("visible", "animate__animated", "animate__fadeInRight");
  }

  var element2 = document.getElementById("--ourComp");
  if (isElementInViewport(element2)) {
    element2.classList.add("visible", "animate__animated", "animate__fadeInLeft");
  }

}

window.addEventListener("scroll", showElementsAnimation);
window.addEventListener("load", showElementsAnimation);





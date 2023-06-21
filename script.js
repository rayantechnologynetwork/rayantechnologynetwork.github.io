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
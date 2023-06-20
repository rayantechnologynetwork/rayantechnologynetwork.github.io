// const sentence = "The weather is";
const words = ["طراحی وب سایت", "فروشگاه وردپرسی", "awesome", "excellent"];
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




const text = `شرکت رایان تکنولوژی نتورک، یک شرکت فعال در حوزه خدمات فناوری اطلاعات است. ما خدمات گسترده ای را در زمینه طراحی وب سایت، تولید محتوا، شبکه، امنیت و سئو ارائه می‌دهیم. تیم ما از افرادی با تجربه و متخصص در این حوزه تشکیل شده است و با استفاده از دانش و تکنولوژی‌های روز، بهترین راهکارها را برای مشتریانمان ارائه می‌دهیم. هدف ما ایجاد تجربه کاربری برتر و افزایش نوآوری در حوزه فناوری اطلاعات است. با رایان تکنولوژی نتورک، ما به شما کمک می‌کنیم تا بهترین نتیجه را در دنیای دیجیتال بدست آورید.`;
const element = document.getElementById("--abutUsText");
let index = 0;

function typeEffect() {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 20); // Adjust typing speed here
  }
}

typeEffect();

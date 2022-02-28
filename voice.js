const recognition = new webkitSpeechRecognition();
const outpote = document.getElementById("outpote");
const mic = document.getElementById("mic");
const p = document.createElement("p");

recognition.continous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternative = 1;
const synts = window.speechSynthesis;

function mouseDown() {
  mic.style.color = "white";
  recognition.start();
  outpote.textContent = "";
}

function mouseUp() {
  mic.style.color = "blueviolet";
  recognition.stop();
}
let utter = new SpeechSynthesisUtterance("Hi, How are you?");
utter.onend = () => {
  recognition.start();
};

recognition.onresult = (event) => {
  const transcript =
    event.results[event.results.length - 1][0].transcript.trim();
  if (transcript == "Hi") {
    recognition.stop();
    utter.text = "Assalamualikum, hello";
    synts.speak(utter);
    p.innerText = "Assalamualikum, Hello";
    outpote.appendChild(p);
  } else if (transcript === "hello") {
    recognition.stop();
    utter.text = "Assalamualikum, Hi";
    synts.speak(utter);
    p.innerText = "Assalamualikum, Hi";
    outpote.appendChild(p);
  } else if (transcript === "how are you") {
    recognition.stop();
    utter.text = "Alhamdulillah I Am Fine, And You";
    synts.speak(utter);
    p.innerText = "Alhamdulillah I Am Fine, And You";
    outpote.appendChild(p);
  } else if (transcript === "alhamdulillah fine") {
    recognition.stop();
    utter.text = "Oh Good";
    synts.speak(utter);
    p.innerText = "Oh Good";
    outpote.appendChild(p);
  } else if (transcript === "do you love me") {
    recognition.stop();
    utter.text = "No, I Don't like you, Becouse I Have A Cute Girlfrend";
    synts.speak(utter);
    p.innerText = "No, I Don't like you, Becouse I Have A Cute Girlfrend";
    outpote.appendChild(p);
  } else if (transcript === "i am fine") {
    recognition.stop();
    utter.text = "Oh Good";
    synts.speak(utter);
    p.innerText = "Oh, Good";
    outpote.appendChild(p);
  } else if (transcript === "what is your name") {
    recognition.stop();
    utter.text = "My name Is Minhajul Alam Akib";
    synts.speak(utter);
    p.innerText = "My name Is Minhajul Alam Akib";
    outpote.appendChild(p);
  } else if (transcript === "goodbye") {
    recognition.stop();
    utter.text = "Ok Sir, Allah Hafez. Assalamualikum";
    synts.speak(utter);
    p.innerText = "Ok Sir, Allah Hafez. Assalamualikum";
    outpote.appendChild(p);
  }
};

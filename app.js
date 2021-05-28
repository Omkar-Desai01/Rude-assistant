const userVoice = document.querySelector(".user-message");
const btnTalk = document.querySelector(".btn-talk");
const assVoice = document.querySelector(".assistant-message");

const speechRecognizer =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const howAreYou = ["I was fine, until i saw you"];
const whatTheTime = ["cant you read the clock?"];
const howsTheWeather = ["Weather is fine think about your life"];

const recognize = new speechRecognizer();

function readBack(message) {
  const speech = new SpeechSynthesisUtterance();
  speech.text = "Speak clearly you little piece of shit.";
  if (message.includes("how are ")) {
    speech.text = howAreYou[0];
  }
  if (message.includes("Weather")) {
    speech.text = howsTheWeather[0];
  }
  if (message.includes("time")) {
    speech.text = whatTheTime[0];
  }
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);

  assVoice.textContent = speech.text;
}

recognize.onstart = function (e) {
  console.log("Voice recognision stated");
};
recognize.onresult = function (e) {
  console.log("Voice recognition");
  const current = e.resultIndex;
  const transcript = e.results[current][0].transcript;
  userVoice.textContent = transcript;
  readBack(transcript);
};

btnTalk.addEventListener("click", function () {
  recognize.start();
});

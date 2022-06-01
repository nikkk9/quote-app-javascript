const quote = document.querySelector(".quoteData");

function quoteGen() {
  fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.slip.advice);
      quote.innerHTML=data.slip.advice;
    })
    .catch((err) => {
      console.log(err);
    });
}

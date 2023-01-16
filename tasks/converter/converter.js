const btn = document.querySelector(".btn");
const selectFrom = document.querySelector("#select_from");
const selectTo = document.querySelector("#select_to");
const result = document.querySelector(".result");
const result_par = document.querySelector(".result_par");
let amount = document.querySelector("#amount");
var currencies = [];
fetch("https://umar361.github.io/tasks/converter/data.json")
  .then((response) => response.json())
  .then((json) => {
    // console.log(json);
    // console.log(json["usd"])
    currencies = json;
    for (var currency in json) {
      var opt = document.createElement("option");
      opt.value = currency;
      opt.innerHTML = json[currency].code + " - " + json[currency].name;
      selectTo.appendChild(opt);
      var opt = document.createElement("option");
      opt.value = currency;
      opt.innerHTML = json[currency].code + " - " + json[currency].name;
      selectFrom.appendChild(opt);
    }
  });

const btnFunc = () => {
  let base = selectFrom.value;
  let converTo = selectTo.value;
  let realAmount = amount.value;
  let fromCurrency = currencies[base];
  let toCurrency = currencies[converTo];

  const convert = () => {
    return realAmount * toCurrency.rate;
  };
  if (realAmount === "") {
    console.log("Please enter amount");
    result_par.innerText = "Please Enter Amount";
  } else if (base == "select" || converTo == "select") {
    console.log("Currecnies not selected");
    result_par.innerText = `Please select ${
      converTo === base
        ? "currencies "
        : base === "select"
        ? "source currency"
        : "destination currency"
    } for conversion`;
  } else if (base === converTo) {
    console.log("Same currencies selected");
    result_par.innerText = "Please select different currencies for conversion";
  } else {
    result.innerHTML = `<button class="btn">Convert</button>
        <h6 class="result_par">${realAmount} ${
      fromCurrency.code
    } is equal to <span class="result_span">${convert().toLocaleString()} ${
      toCurrency.code
    }</span></h6> 
        <h6 class="result_par">Conversion Rate: <span class="result_span">${
          toCurrency.rate
        }</span></h6>
        <h6 class="result_par">Conversion Time: <span class="result_span">${new Date().toUTCString()}</span></h6>
        `;
  }
};
const func = (e) => {
  if (e.keyCode == 13) {
    btnFunc();
  }
};
btn.addEventListener("click", btnFunc);
amount.addEventListener("keypress", func);

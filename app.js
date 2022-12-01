const elNumber = document.querySelector(".numbers");
const elBtn = document.querySelector("#btn");
const elSolve = document.querySelector(".solve");
const elCard = document.querySelector(".card");

const arr = elNumber.textContent.split(" ");

const num = Math.round(Math.abs(Number(arr[4])));
const num2 = Math.round(Math.abs(Number(arr[6])));
const num3 = Math.round(Math.abs(Number(arr[8])));
const num4 = Math.round(Math.abs(Number(arr[10])));

const h3 = document.createElement("h3");
elBtn.addEventListener("click", function (e) {
	e.preventDefault();
	h3.innerHTML = `Result = ${num} + ${num2} + ${num3} + ${num4}
                    Result : 21 `;
	elCard.appendChild(h3);
	h3.style.fontFamily = "sans-serif";
	h3.style.fontSize = "48px";
	h3.style.fontWeight = "bold";
	h3.style.color = "Gray";
	h3.style.transition = "all 0.5s linear";
});

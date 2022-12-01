const elInputImg = document.querySelector("#input_image");
const elInputTitle = document.querySelector("#input_title");
const elInputSubutitle = document.querySelector("#input_subtitle");
const elFrom = document.querySelector("#form");
const elBtn = document.querySelector("#btn");
const elCardParent = document.querySelector(".cards");

elBtn.addEventListener("click", function (e) {
	e.preventDefault();
	const title = elInputTitle.value.trim();
	const img = elInputImg.value.trim();
	const description = elInputSubutitle.value.trim();

	const cardObj = {
		Img: img,
		Title: title,
		Desc: description,
	};

	function createElement(obj) {
		const elCArd = document.createElement("div");
		elCArd.innerHTML = `
                         <div
						class="card__item  flex flex-col gap-y-7 items-center border rounded-md border-slate-500 p-4 drop-shadow-2xl">
						<img width="300px" height="200px" src="${cardObj.Img}" alt="card-img" />
						<h3 class="text-3xl font-semibold">${cardObj.Title}</h3>
						<p class="text-center">
							${cardObj.Desc}
						</p>
						<a
							class="underline text-blue-400 decoration-blue-400 text-start decoration-1"
							href=""
							>learn more...</a
						>
					</div>
     `;
	elCardParent.appendChild(elCArd);
	}
	createElement(cardObj);

	elInputImg.value = "";
	elInputTitle.value = "";
	elInputSubutitle.value = "";
});

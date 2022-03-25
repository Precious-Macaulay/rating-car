var thankYouCard = document.querySelector("#thank-you-card");
var ratingCard = document.querySelector("#rating-card");
var submit = document.querySelector("#submit");
var rateNo = document.querySelector("#rateNo");
var btnArr = ["#btn1", "#btn2", "#btn3", "#btn4", "#btn5"];
var rateNumber = "";
var didClick = false;

for (let index = 0; index < btnArr.length; index++) {
  const element = document.querySelector(btnArr[index]);
  const nearElement = document.querySelector(
    btnArr[index !== 4 ? index + 1 : index - 1]
  );
//   if (element.classList !== 2){
//     nearElement.classList.add("text-neutral-100");
//     nearElement.classList.replace("bg-neutral-300", "bg-neutral-200");
//   } else {
//     nearElement.classList.remove("text-neutral-100");
//     nearElement.classList.replace("bg-neutral-200", "bg-neutral-300");
//   }
  element.addEventListener("click", () => {
    if (rateNumber == "") {
      element.classList.replace("bg-neutral-300", "bg-primary");
      element.classList.add("text-neutral-100");
      nearElement.classList.remove("text-neutral-100");
      nearElement.classList.replace("bg-neutral-200", "bg-neutral-300");
      rateNumber = index + 1;
      rateNo.innerHTML = rateNumber;
    } else {
      const previousClick = document.querySelector(btnArr[rateNumber - 1]);
      previousClick.classList.replace("bg-primary", "bg-neutral-300");
      previousClick.classList.remove("text-neutral-100");
      element.classList.replace("bg-neutral-300", "bg-primary");
      element.classList.add("text-neutral-100");
      nearElement.classList.remove("text-neutral-100");
      nearElement.classList.replace("bg-neutral-200", "bg-neutral-300");
      rateNumber = index + 1;
      rateNo.innerHTML = rateNumber;
    }
});
}
    submit.addEventListener("click", () => {
        ratingCard.classList.add("hidden");
        thankYouCard.classList.remove("hidden");
    });



//   element.addEventListener("mousemove", () => {
    //     element.classList.replace("bg-neutral-300", "bg-primary");
    //     element.classList.add("text-neutral-100");
    //     nearElement.classList.add("text-neutral-100");
    //     nearElement.classList.replace("bg-neutral-300", "bg-neutral-200");
    //   });
    //   element.addEventListener("mouseout", () => {
        //     element.classList.replace("bg-primary", "bg-neutral-300");
        //     element.classList.remove("text-neutral-100");
        //     nearElement.classList.remove("text-neutral-100");
        //     nearElement.classList.replace("bg-neutral-200", "bg-neutral-300");
        //   });
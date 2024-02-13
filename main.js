// const container = document.querySelector(".container");

// container.addEventListener("mouseenter", () => {
//   let opacity = 1;
//   const delay = 3000; // Thời gian delay (mili giây)

//   setTimeout(() => {
//     const interval = setInterval(() => {
//       opacity -= 0.1;
//       container.style.opacity = opacity;
//       if (opacity <= 0) {
//         clearInterval(interval);
//         container.style.display = "none";
//       }
//     }, 100);
//   }, delay);
// });

const container = document.querySelector(".container");
const envelopeSecond = document.querySelector(".envelope-second");
const cardSecond = document.querySelector(".card-second");

let isFinished = false;

container.addEventListener("mouseenter", () => {
  let opacity = 1;
  const delay = 2500; // Thời gian delay (mili giây)

  setTimeout(() => {
    const interval = setInterval(() => {
      opacity -= 0.1;
      container.style.opacity = opacity;

      if (opacity <= 0) {
        clearInterval(interval);
        container.style.display = "none";
        isFinished = true;

        // Bắt đầu secondInterval sau khi interval đầu tiên hoàn tất
        if (isFinished) {
          envelopeSecond.style.display = "block";
          cardSecond.style.display = "block";

          let secondOpacity = 0;
          const secondInterval = setInterval(() => {
            secondOpacity += 0.1;
            envelopeSecond.style.opacity = secondOpacity;
            cardSecond.style.opacity = secondOpacity;

            if (secondOpacity >= 1) {
              clearInterval(secondInterval);
            }
          }, 100);
        }
      }
    }, 100);
  }, delay);
});
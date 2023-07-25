const imgPortfolio = document.querySelectorAll('.portfolio-img');
const nextBtn = document.querySelector('.next_btn');
const prevBtn = document.querySelector('.prev_btn');

const btnPortfolio = document.querySelectorAll('.slider-container > button');

// let idx = 0;
// imgPortfolio[idx].classList.add('active');

// const handleClickBtn = (event) => {
//   let target = event.target;

//   imgPortfolio.forEach((img) => {
//     img.classList.remove('active');
//   });
//   if (target.closest(`.next_btn`)?.className === 'next_btn') {
//     idx++;
//     if (idx === imgPortfolio.length) idx = 0;
//   } else if (target.closest(`.prev_btn`)?.className === 'prev_btn') {
//     idx--;
//     if (idx < 0) idx = imgPortfolio.length - 1;
//   }
//   imgPortfolio[idx].classList.add('active');
// };

// btnPortfolio.forEach((btn) => {
//   btn.addEventListener('click', handleClickBtn);
// });

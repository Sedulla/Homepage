const searchBox = document.querySelector('.search-box'),
  navBtnContainer = document.querySelector('.nav__btn--container'),
  searchBtn = document.querySelector('.search-btn'),
  closeBtn = document.querySelector('.close-btn');

searchBtn.addEventListener('click', () => {
  searchBox.classList.add('active');
  navBtnContainer.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  searchBox.classList.remove('active');
  navBtnContainer.classList.remove('active');
});

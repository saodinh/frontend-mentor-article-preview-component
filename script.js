const shareOptions = document.querySelector(".card__share-options");
const shareButton = document.querySelector(".card__link--share");

shareButton.addEventListener("click", function () {
    shareOptions.classList.toggle("active");
});

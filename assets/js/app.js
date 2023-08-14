const currentYear = new Date().getFullYear()
document.querySelector('#tradeMarkTime').innerHTML = currentYear;

const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

function startDownload() {
  window.open("https://drive.google.com/file/d/13_VaDowHUqnw2iM2T2BGibpLIMeAqxSu/view?usp=drive_link")
}
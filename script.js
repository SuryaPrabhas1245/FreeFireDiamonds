const facebookLogin = document.getElementById("facebook-login");
const googleLogin = document.getElementById("google-login");
const loginPage = document.getElementById("login-page");
const generatorPage = document.getElementById("generator-page");
const generatorForm = document.getElementById("generatorForm");
const progressContainer = document.getElementById("progressContainer");
const progressBarInner = document.getElementById("progressBarInner");
const progressText = document.getElementById("progressText");
const resultContainer = document.getElementById("resultContainer");
const displayFFID = document.getElementById("displayFFID");
const displayDiamonds = document.getElementById("displayDiamonds");

// Simulate login process
facebookLogin.addEventListener("click", function () {
    alert("You have successfully logged in with Facebook.");
    showGeneratorPage();
});

googleLogin.addEventListener("click", function () {
    alert("You have successfully logged in with Google.");
    showGeneratorPage();
});

function showGeneratorPage() {
    loginPage.style.display = "none";
    generatorPage.style.display = "block";
}

// Diamond generator process
generatorForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const ffid = document.getElementById("ffid").value;
    const diamonds = document.getElementById("diamonds").value;

    if (ffid && diamonds) {
        generatorForm.style.display = "none";
        progressContainer.style.display = "block";

        let progress = 0;
        const interval = setInterval(() => {
            if (progress < 100) {
                progress += 10;
                progressBarInner.style.width = progress + "%";
                progressText.innerText = progress + "%";
            } else {
                clearInterval(interval);
                progressContainer.style.display = "none";
                resultContainer.style.display = "block";
                displayFFID.innerText = ffid;
                displayDiamonds.innerText = diamonds;
            }
        }, 500);
    }
});

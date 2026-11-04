document.addEventListener("DOMContentLoaded", function () {
    const accountForm = document.querySelector("#accountForm");
    const loginForm = document.querySelector("#loginForm");

    function showMessage(form, message) {
        let messageBox = form.parentElement.querySelector(".message");

        if (!messageBox) {
            messageBox = document.createElement("p");
            messageBox.className = "message";
            messageBox.setAttribute("role", "status");
            form.insertAdjacentElement("afterend", messageBox);
        }

        messageBox.textContent = message;
    }

    if (accountForm) {
        accountForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const password = document.querySelector("#password").value;
            const confirmPassword =
                document.querySelector("#confirmPassword").value;

            if (password.length < 8) {
                showMessage(
                    accountForm,
                    "Your password must have at least 8 characters."
                );
                return;
            }

            if (password !== confirmPassword) {
                showMessage(
                    accountForm,
                    "Your passwords do not match. Please try again."
                );
                return;
            }

            showMessage(
                accountForm,
                "Your form is valid! Account creation needs a secure server."
            );

            accountForm.reset();
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            showMessage(
                loginForm,
                "The form is valid. Connect a secure login system to sign in."
            );
        });
    }

    const currentPage = window.location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    document.querySelectorAll("nav a").forEach(function (link) {
        const linkPage = link.getAttribute("href").toLowerCase();

        if (linkPage === currentPage) {
            link.setAttribute("aria-current", "page");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const welcomeText = document.querySelector(".welcome-text");

    if (welcomeText) {
        welcomeText.classList.add("animate-welcome");
    }

    const featureCards = document.querySelectorAll(".feature-card");

    featureCards.forEach(function (card, index) {
        card.style.animationDelay = (index * 0.2) + "s";
        card.classList.add("animate-card");
    });

    const aboutSection = document.querySelector(".about-section");

    if (aboutSection) {
        aboutSection.addEventListener("mouseenter", function () {
            aboutSection.classList.add("about-active");
        });

        aboutSection.addEventListener("mouseleave", function () {
            aboutSection.classList.remove("about-active");
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {

   
    const hero = document.querySelector(".hero");

   
    if (hero) {
        hero.style.backgroundImage = "url('resor/background.jpeg')";
        hero.style.backgroundSize = "cover";
        hero.style.backgroundPosition = "center";
        hero.style.backgroundRepeat = "no-repeat";
    }

   
    const welcomeText = document.querySelector(".welcome-text");

    if (welcomeText) {
        welcomeText.style.opacity = "0";
        
        setTimeout(function () {
            welcomeText.style.transition = "opacity 1.5s ease";
            welcomeText.style.opacity = "1";
        }, 300);
    }

   
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(this.getAttribute("href"));

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    });

   
    console.log("Welcome to Pawsitive Pet Academy!");

});

document.addEventListener("DOMContentLoaded", function () {

    const homeImage = document.querySelector(".home-display-image");

    if (homeImage) {
        homeImage.style.width = "100%";
        homeImage.style.maxWidth = "1000px";
        homeImage.style.height = "auto";
        homeImage.style.objectFit = "cover";
        homeImage.style.display = "block";
        homeImage.style.margin = "20px auto";
        homeImage.style.borderRadius = "15px";

      
        homeImage.style.opacity = "0";
        homeImage.style.transition = "opacity 1.5s ease";

        homeImage.addEventListener("load", function () {
            homeImage.style.opacity = "1";
        });

        if (homeImage.complete) {
            homeImage.style.opacity = "1";
        }
    }

});
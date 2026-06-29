// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

// Close mobile menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});


// ==============================
// CONTACT FORM VALIDATION
// ==============================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const phone = document.getElementById("phone");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        clearErrors();

        let isValid = true;

        // Name
        if (name.value.trim() === "") {
            showError(name, "Name is required.");
            isValid = false;
        }

        // Email
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            showError(email, "Email is required.");
            isValid = false;

        } else if (!emailPattern.test(email.value)) {

            showError(email, "Enter a valid email.");
            isValid = false;
        }

        // Phone
        const phonePattern =
            /^[0-9]{10}$/;

        if (phone.value.trim() === "") {

            showError(phone, "Phone number is required.");
            isValid = false;

        } else if (!phonePattern.test(phone.value)) {

            showError(phone, "Phone must contain exactly 10 digits.");
            isValid = false;
        }

        // Subject
        if (subject.value.trim() === "") {
            showError(subject, "Subject is required.");
            isValid = false;
        }

        // Message
        if (message.value.trim().length < 10) {
            showError(message, "Message must contain at least 10 characters.");
            isValid = false;
        }

        if (isValid) {

            alert(
                "✅ Thank you for contacting MainCrafts!\n\nWe have received your message and will get back to you soon."
            );

            form.reset();
        }

    });

}



// ==============================
// SHOW ERROR
// ==============================

function showError(input, message) {

    input.style.border = "2px solid #ff4d4d";

    const error = document.createElement("small");

    error.className = "error-message";

    error.style.color = "#ff4d4d";

    error.style.display = "block";

    error.style.marginTop = "-10px";

    error.style.marginBottom = "15px";

    error.innerText = message;

    input.parentNode.insertBefore(error, input.nextSibling);

}



// ==============================
// CLEAR ERRORS
// ==============================

function clearErrors() {

    document.querySelectorAll(".error-message")
        .forEach(error => error.remove());

    document
        .querySelectorAll("input, textarea")
        .forEach(field => {
            field.style.border = "1px solid #ddd";
        });

}
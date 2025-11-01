const form = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();

    if (name === '' || email === '' || phone === '') {
        formMessage.textContent = "Please fill all fields!";
        formMessage.style.color = "red";
        return;
    }

    if (!/^\d{10}$/.test(phone)) {
        formMessage.textContent = "Phone number must be 10 digits!";
        formMessage.style.color = "red";
        return;
    }

    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
});

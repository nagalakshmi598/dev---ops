function submitForm(event) {
 event.preventDefault();
 // Validate form fields
 const username = document.getElementById('username').value;
 const email = document.getElementById('email').value;
 const password = document.getElementById('password').value;
 const phone = document.getElementById('phone').value;
 if (!validateUsername(username) || !validateEmail(email) ||
!validatePassword(password) || !validatePhone(phone)) {
 // Validation failed
 return;
 }
 // Form data is valid, you can proceed with further processing
 const formData = {
 username,
 email,
 password,
 phone
 };
 console.log('Form submitted with data:', formData);
}
function validateUsername(username) {
 if (username.trim() === '') {
 alert('Username cannot be empty');
 return false;
 }
 return true;
}
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!emailRegex.test(email)) {
alert('Invalid email format');
 return false;
 }
 return true;
}
function validatePassword(password) {
 if (password.length < 6) {
 alert('Password must be at least 6 characters long');
 return false;
 }
 return true;
}
</html>
function validatePhone(phone) {
 const phoneRegex = /^\d{10}$/;
 if (!phoneRegex.test(phone)) {
 alert('Invalid phone number. Please enter a 10-digit number.');
 return false;
 }
 return true;
}
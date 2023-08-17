const users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    // Add more user objects here
];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const user = users.find(u => u.username === username && u.password === password);

    const loginMessage = document.getElementById("loginMessage");

    if (user) {
        loginMessage.textContent = "Login successful!";
    } else {
        loginMessage.textContent = "Invalid username or password.";
    }
}

const persons = [];

        function addPesons() {
            const name = document.getElementById("name").value;
            const fathers name = document.getElementById("fathers name").value;
            const age = document.getElementById("age").value;
            const gender = document.getElementById("gender").value;
            const State = document.getElementById("State").value;
            const city = document.getElementById("city").value;
            const Phone = document.getElementById("Phone").value;
            const email = document.getElementById("email").value;
            const photoUpload = document.getElementById("photoUpload").value;
            const desc = document.getElementById("desc").value;
            

            students.push({ name, fathers name, age, gender, State, city, Phone, email, photoUpload, desc  });
            document.getElementById("persondetails").reset();
        }

        function searchPerson() {
            const searchName = document.getElementById("searchName").value;
            const searchResults = students.filter(person => person.name.toLowerCase() === searchName.toLowerCase());

            const searchResultsDiv = document.getElementById("searchResults");
            searchResultsDiv.innerHTML = "";

            if (searchResults.length === 0) {
                searchResultsDiv.textContent = "No matching student found.";
            } else {
                searchResults.forEach(person => {
                    const resultDiv = document.createElement("div");
                    resultDiv.innerHTML = `<strong>Name:</strong> ${person.name}, <strong>Fathers Name:</strong> ${person.fathers name}, <strong>Age:</strong> ${person.age}, <strong>Gender:</strong> ${person.gender}, <strong>State:</strong> ${person.state}, <strong>City:</strong> ${person.city}, <strong>Phone:</strong> ${person.phone}, <strong>Email:</strong> ${person.email}, <strong>PhotoUpload:</strong> ${person.photoUpload}, <strong>Desc:</strong> ${person.desc}`;
                    searchResultsDiv.appendChild(resultDiv);
                });
            }
        }

        let generatedOTP = null;

        function sendOTP() {
            const mobile = document.getElementById("mobile").value;

            // Mock OTP generation (replace with actual OTP generation logic)
            generatedOTP = Math.floor(1000 + Math.random() * 9000);

            alert(`OTP sent to ${mobile}: ${generatedOTP}`);
        }

        function signup() {
            const otp = parseInt(document.getElementById("otp").value);
            const password = document.getElementById("password").value;

            const signupMessage = document.getElementById("signupMessage");

            if (otp === generatedOTP) {
                signupMessage.textContent = "Signup successful!";
                // Here, you would typically send the user data to a backend for storage and further processing.
            } else {
                signupMessage.textContent = "Invalid OTP.";
            }
        }
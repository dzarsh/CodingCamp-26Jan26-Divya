// Welcome name
let userName = prompt("Masukkan nama Anda:");

if (!userName || userName.trim() === "") {
  userName = "Guest";
}

document.getElementById("welcomeText").innerText =
  "Hi " + userName + ", Welcome To Website";


// Form submit
document.getElementById("messageForm").addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("time").innerText = new Date().toString();
  document.getElementById("rName").innerText = name.value;
  document.getElementById("rBirth").innerText = birth.value;
  document.getElementById("rGender").innerText =
    document.querySelector('input[name="gender"]:checked').value;
  document.getElementById("rMessage").innerText = messageText.value;
});

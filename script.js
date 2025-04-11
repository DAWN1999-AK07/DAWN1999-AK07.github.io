
function checkPasscode() {
  const code = document.getElementById("passcode").value;
  const correct = "Xelthar1999DA+0613";  // 예시 암호

  if (code === correct) {
    window.location.href = "main.html";
  } else {
    document.getElementById("result").innerText = "Incorrect passcode.";
  }
}

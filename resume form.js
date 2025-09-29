// ✅ Save Resume Function
function saveResume() {
  const user = auth.currentUser; // check logged-in user
  if (!user) {
    document.getElementById("message").innerText = "You must be logged in!";
    return;
  }

  // Collect form values
  const resumeData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    degree: document.getElementById("degree").value,
    college: document.getElementById("college").value,
    year: document.getElementById("year").value,
    skills: document.getElementById("skills").value,
    company: document.getElementById("company").value,
    role: document.getElementById("role").value,
    duration: document.getElementById("duration").value,
    description: document.getElementById("description").value
  };

  // Save data to Firestore (under user’s UID)
  db.collection("resumes").doc(user.uid).set(resumeData)
    .then(() => {
      document.getElementById("message").innerText = "Resume saved successfully!";
      // Redirect to preview page
      window.location.href = "preview.html";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
}

// ✅ Load Resume Data for Preview
auth.onAuthStateChanged(user => {
  if (user) {
    db.collection("resumes").doc(user.uid).get()
      .then(doc => {
        if (doc.exists) {
          const data = doc.data();
          // Fill resume preview
          document.getElementById("r-name").innerText = data.name;
          document.getElementById("r-email").innerText = data.email;
          document.getElementById("r-phone").innerText = data.phone;
          document.getElementById("r-address").innerText = data.address;

          document.getElementById("r-degree").innerText = data.degree;
          document.getElementById("r-college").innerText = data.college;
          document.getElementById("r-year").innerText = data.year;

          // Skills → convert string into list
          const skillsList = data.skills.split(",");
          const ul = document.getElementById("r-skills");
          ul.innerHTML = ""; // clear existing
          skillsList.forEach(skill => {
            const li = document.createElement("li");
            li.innerText = skill.trim();
            ul.appendChild(li);
          });

          document.getElementById("r-company").innerText = data.company;
          document.getElementById("r-role").innerText = data.role;
          document.getElementById("r-duration").innerText = data.duration;
          document.getElementById("r-description").innerText = data.description;
        }
      })
      .catch(error => {
        console.log("Error fetching resume:", error);
      });
  } else {
    window.location.href = "login.html"; // If not logged in
  }
});

// ✅ Download PDF Function
function downloadPDF() {
  const element = document.getElementById("resume");
  html2pdf().from(element).save("resume.pdf");
}

// ✅ Function to switch resume templates
function changeTemplate() {
  const resume = document.getElementById("resume");
  const selected = document.getElementById("template").value;

  // Remove all template classes
  resume.classList.remove("default", "modern", "elegant");

  // Add selected class
  resume.classList.add(selected);
}

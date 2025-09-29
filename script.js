// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIk44IOll9GQX0E3UysWYRc5iCUj_6LuI",
  authDomain: "resume-builder-60.firebaseapp.com",
  projectId: "resume-builder-60",
  storageBucket: "resume-builder-60.firebasestorage.app",
  messagingSenderId: "374756685305",
  appId: "1:374756685305:web:0c3d73c8f37021c8c97928",
  measurementId: "G-74RLQZF29F"
};


// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// ✅ Signup function
function signup() {
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById("message").innerText = "Signup successful!";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
}

// ✅ Login function
function login() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(userCredential => {
      document.getElementById("message").innerText = "Login successful!";
      // Redirect to resume form page
      window.location.href = "resume-form.html";
    })
    .catch(error => {
      document.getElementById("message").innerText = error.message;
    });
}
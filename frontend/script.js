// Registration

document.getElementById("registerForm")?.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let name =
            document.getElementById("name").value;

        let email =
            document.getElementById("email").value;

        let password =
            document.getElementById("password").value;

        if (name === "" || email === "" || password === "") {

            alert("Please fill all fields");

        } else {

            alert("Registration successful!");

        }
    }
);


// Login

document.getElementById("loginForm")?.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let email =
            document.getElementById("loginEmail").value;

        let password =
            document.getElementById("loginPassword").value;

        if (email === "" || password === "") {

            alert("Please enter email and password");

        } else {

            alert("Login successful!");

        }
    }
);


// Upload Notes

document.getElementById("uploadForm")?.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        let noteName =
            document.getElementById("noteName").value;

        let subject =
            document.getElementById("subject").value;

        let file =
            document.getElementById("noteFile").value;

        if (noteName === "" ||
            subject === "" ||
            file === "") {

            alert("Please fill all fields");

        } else {

            alert("Notes uploaded successfully!");

        }
    }
);


// Search Notes

function searchNotes() {

    let search =
        document.getElementById("searchInput").value;

    if (search === "") {

        alert("Please enter a subject");

    } else {

        alert("Searching for: " + search);
    }
}


// Download

function downloadNote() {

    alert("Download started!");

}
import { collection, getDocs, query, where } from "firebase/firestore"; // Import Firestore functions from Firebase SDK

// Assuming you have already initialized Firestore somewhere in your code as 'db'

document.querySelector(".button-1").addEventListener("click", async () => {
    let username = document.querySelector("#user").value; // Use correct input id
    let password = document.querySelector("#pass").value; // Use correct input id

    if (username.trim() !== "" && password.trim() !== "") {
        Swal.fire({
            title: 'Please Wait!',
            didOpen: () => {
                Swal.showLoading()
            }
        });

        const q = query(collection(db, "accounts"), where("username", "==", username), where("password", "==", password)); // Remove template literals and use variable values

        const querySnapshot = await getDocs(q);
        if (querySnapshot.docs.length === 0) {
            Swal.fire("", "Username or Password Are Wrong", "error");
        }
        querySnapshot.forEach((doc) => {
            if (doc.data().id !== undefined) {
                document.querySelector("#user").value = ""; // Use correct input id
                document.querySelector("#pass").value = ""; // Use correct input id
                localStorage.setItem("notes-online-id", doc.data().id);
                location.href = "../";
            } else {
                Swal.fire("", "Username or Password Are Wrong");
            }
        });

    } else {
        Swal.fire("", "Enter Username And Password");
    }
});

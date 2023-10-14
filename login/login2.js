

/////* start firebase */////



/*1*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getFirestore, collection, getDocs,getDoc, setDoc, addDoc, doc,query,where , updateDoc} from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5Oygn4KCqdTHuryzqD4DHUdXCjj8wFfM",
    authDomain: "file-upload-by-medoz-pro.firebaseapp.com",
    projectId: "file-upload-by-medoz-pro",
    storageBucket: "file-upload-by-medoz-pro.appspot.com",
    messagingSenderId: "575667669315",
    appId: "1:575667669315:web:b5ce5f7e7b607280dd87f6",
  };


// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let X;

async function getCit(db,X) {
  const citiesCol = collection(db,`${X}`);
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}
/*1*/



/*Start Sing In*/


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

        if (querySnapshot.empty) {
            Swal.fire("", "Username Or Password Are Wrong", "error");
        } else {
            querySnapshot.forEach(async (doc) => {
                const userData = doc.data();
                if (userData.password === password) {
                    if (userData.WebglHistory && userData.WebglHistory.length > 1) {
                        // If WebglHistory contains more than one element, update usernamestatus to "disable"
                        await updateDoc(doc.ref, { usernamestatus: "disable" });
                         console.log("Account disable By System Automatically with Device Number Associated:", userData.WebglHistory.length);
                         // Swal.fire("", "Account disabled, Reason:[Device Associated Number " + userData.WebglHistory.length + " Users Device", "error");
                          Swal.fire("", "Account disabled Automatically By System⚠️❌<br><br>Reason: [Device Associated Number " + userData.WebglHistory.length + " Users Device]", "error");
                    } else if (userData.WebglHistory && userData.WebglHistory.length === 1 && userData.WebglHistory[0].status === "Good") {
                        console.log("Status is Good");
                        document.querySelector(".username-in").value = "";
                        document.querySelector(".password-in").value = "";
                        localStorage.setItem("notes-online-id", doc.data().id);
                        location.href = "../";
                    } else if (userData.usernamestatus === "active") {
                        document.querySelector(".username-in").value = "";
                        document.querySelector(".password-in").value = "";
                        localStorage.setItem("notes-online-id", doc.data().id);
                        location.href = "../";
                    } else if (userData.usernamestatus === "disable") {
                        Swal.fire("", "Your account is disabled Manually By Admin Medoz ⚠️", "error");
                    }
                } else {
                    Swal.fire("", "Username Or Password Are Wrong", "error");
                }
            });
        }
    } else {
        Swal.fire("", "Enter Username And Password", "error");
    }
});
/* End Sign In */































/* start create account */

/* Only */ 

//// document.querySelector(".btn-sign-up").addEventListener("click", () => {
 ////   Swal.fire(
 ////       'Account Creation Disabled 😥',
   ////     'Sorry, account creation is currently disabled for New Users, if you already has an account you can sign in with it. 😥',
 ////       'warning'
////    );
//// });

// document.querySelector(".btn-sign-up").addEventListener("click",()=>{ // Event listener is disabled
//     let username = document.querySelector(".username-up").value
//     let password = document.querySelector(".password-up").value
//     let password2 = document.querySelector(".password-up-2").value
//     let email = document.querySelector(".email-up").value

//     if(username!=""&&password!=""&&password2!=""&&email!=""&&password==password2)
//     {

//       let id = Math.floor(Math.random() * 100000000);
//       setDoc(doc(db,"accounts",`${id}`),{
//         id: id,
//         username: username,
//         password: password,
//         email: email,
//         time: Date.now(),
//         N:"",
//       });

//       document.querySelector(".username-up").value=""
//       document.querySelector(".password-up").value=""
//       document.querySelector(".email-up").value=""
//       document.querySelector(".password-up-2").value=""

//       /**/
//       Swal.fire(
//         'Done Created Your New Account Successfully -تم انشاء حسابك بنجاح ',
//         'You Can Now Log in - يمكنك الان تسجيل الدخول',
//         'success'
//       )
//       /**/

//       document.querySelector("#tab-1").click()

//     } else if(username!=""&&password!=password2&&email!="") {
//         Swal.fire("","The Two Password Should be the Same","")
//     } else {
//         Swal.fire("","Enter Username,Password and Email","")
//     }
// })

/* end create account */






















// await getDoc(doc(db, "accounts", "L8tRIutxitBgha5OdTby")).then(e=>cs(e.data()))

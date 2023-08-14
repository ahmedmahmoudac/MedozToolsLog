

/////* start firebase */////



/*1*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js';
import { getFirestore, collection, getDocs,getDoc, setDoc, addDoc, doc,query,where } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-firestore.js';

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

/*Disable
document.querySelector(".btn-sign-in").addEventListener("click",async()=>{
    let username =  document.querySelector(".username-in").value
    let password =  document.querySelector(".password-in").value

    if (username.trim()!==""&&password.trim()!=="") {
        Swal.fire({
            title: 'Please Wait!',
            didOpen: () => {Swal.showLoading()}
        });

        const q = query(collection(db, "accounts"), where("username", "==", `${username}`), where("password", "==", `${password}`));

        const querySnapshot = await getDocs(q);
        if(querySnapshot.docs.length==0){
            Swal.fire("","Usename Or Password Are Wrong","error");
        }
        querySnapshot.forEach((doc) => {
            if(doc.data().id!==undefined){
                document.querySelector(".username-in").value=""
                document.querySelector(".password-in").value=""
                /**/
    ////            localStorage.setItem("notes-online-id",doc.data().id)
                /**/
     ////           location.href="../"
     ////       } else {
   ////             Swal.fire("","Usename Or Password Are Wrong");
   ////         }
   ////     });

  ////  } else {Swal.fire("","Enter Usename And Password")}

////})

/*End Sing In*/










/* Start Sign In */

document.querySelector(".btn-sign-in").addEventListener("click", async () => {
  let username = document.querySelector(".username-in").value;
  let password = document.querySelector(".password-in").value;

  if (username.trim() !== "" && password.trim() !== "") {
    Swal.fire({
      title: 'Please Wait!',
      didOpen: () => {
        Swal.showLoading();
      }
    });

    const q = query(
      collection(db, "accounts"),
      where("username", "==", `${username}`),
      where("password", "==", `${password}`)
    );

    const querySnapshot = await getDocs(q);
    if (querySnapshot.docs.length === 0) {
      Swal.fire("", "Username Or Password Are Wrong", "error");
    }

    querySnapshot.forEach(async (doc) => {
      if (doc.data().id !== undefined) {
        // Get current time
        const currentTime = Date.now();

        // Get last login time from Firestore document, if available
        const lastLoginTime = doc.data().lastLoginTime || null;

        // Determine if it's the user's first login
        const isFirstLogin = lastLoginTime === null;

        // Generate a unique identifier if not stored
        let uniqueId = localStorage.getItem("myUniqueId");
        if (!uniqueId) {
          uniqueId = generateUniqueIdentifier();
          localStorage.setItem("myUniqueId", uniqueId);
        }

        // Update the user's document with new data
        await setDoc(doc(db, "accounts", doc.id), {
          lastLoginTime: currentTime,
          isFirstLogin: isFirstLogin,
          uniqueId: uniqueId // Save the unique identifier
        });

        // Save the unique identifier to localStorage
        localStorage.setItem("notes-online-id", doc.data().id);

        // Clear input fields
        document.querySelector(".username-in").value = "";
        document.querySelector(".password-in").value = "";

        // Redirect to the desired page
        location.href = "../"; // Change this to your desired URL
      } else {
        Swal.fire("", "Username Or Password Are Wrong", "error");
      }
    });

  } else {
    Swal.fire("", "Enter Username And Password", "error");
  }
});

/* End Sign In */

// Function to generate a unique identifier (not guaranteed to be completely unique)
function generateUniqueIdentifier() {
  return Math.random().toString(36).substring(2) + Date.now().toString(36);
}














document.querySelector(".btn-sign-up").addEventListener("click", () => {
    Swal.fire({
        title: 'Account Creation Disabled 😥',
        text: 'Sorry, account creation is currently disabled, if you need account subscribe medoz pro group you will get account and medoz pro vip group forever for only 100$ fees pay one time only. 😥',
        icon: 'warning',
        confirmButtonText: 'Subscribe Now 100$',
        showCancelButton: true,
        cancelButtonText: 'Cancel'
    }).then((result) => {
        if (result.isConfirmed) {
            window.open('https://t.me/ahmedmahmoudac', '_blank');
        }
    });
});




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

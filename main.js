/*****************************************************************************/
//document.querySelector(".loaderDad").style.display="block"
document.querySelector(".loaderDad").style.cssText = "display: block; background-color: #3730a3;";


/* start custom function */
function $(e) {
  return document.querySelector(e)
}

function $all(e) {
  return document.querySelector(e)
}

function cs(e) {
  return console.log(e)
}
/* end custom function */


window.onclick=(e)=>{


  if(e.target.classList.value=="ooo"){
    K()
  }

  if(e.target.parentNode.id=="btn-copy"){
    copy()
  }

  if(e.target.parentNode.id=="btn-edit"){
    edit()
  }

  if(e.target.id=="clear"&&e.target.classList.value.includes("clearM")==false){
    L()
  }

  if(e.target.id=="clear"&&e.target.classList.value.includes("clearM")==true){
    M()
  }

  if(e.target.id=="back-edit"){
    backedit()
  }

  if(e.target.id=="add-edit"){
    addedit()
  }

  if(e.target.id=="setting-img"){
    showSett()
  }

  if(e.target.id=="setting-done"){
    hideSett()
  }

  if(e.target.classList.value=="logOut"){
    localStorage.setItem("notes-online-id","")
    location.href="./login/login.html"
  }

}










let noon5 = document.querySelector('#noon5')

/*1*/
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js';
import { getFirestore, collection, getDocs,getDoc, setDoc, addDoc, doc,where , updateDoc} from 'https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5Oygn4KCqdTHuryzqD4DHUdXCjj8wFfM",
    authDomain: "file-upload-by-medoz-pro.firebaseapp.com",
    projectId: "file-upload-by-medoz-pro",
    storageBucket: "file-upload-by-medoz-pro.appspot.com",
    messagingSenderId: "575667669315",
    appId: "1:575667669315:web:b5ce5f7e7b607280dd87f6",
  };


firebase.initializeApp(firebaseConfig);
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


/* start get user doc */
let docId = localStorage.getItem("notes-online-id");
if (docId !== null && docId !== '') {
  // console.log(docId)
} else {
  location.href = "./login/login.html"
}

var mainData;
let H; // Define H here

await getDoc(doc(db, "accounts", docId)).then(async (e) => {
  mainData = e.data();

  H = e.data().N; // Assign the value of N to H

  if (H !== "") {
    noon5.innerHTML = H;
  }

  let INS1Value = null; // Initialize INS1Value
  let FB1Value = null; // Initialize FB1Value
  let INS2Value = null; // Initialize INS2Value
  let FB2Value = null; // Initialize FB2Value

  // Check if the "INS1" field exists and is not null or undefined
  if (e.exists() && "INS1" in e.data() && e.data().INS1 !== null && e.data().INS1 !== undefined) {
    INS1Value = e.data().INS1;
  }

  // Check if the "FB1" field exists and is not null or undefined
  if (e.exists() && "FB1" in e.data() && e.data().FB1 !== null && e.data().FB1 !== undefined) {
    FB1Value = e.data().FB1;
  }

  // Create a new subcollection named "InstaTools" under the user's document
  try {
    const docRef = doc(db, "accounts", docId);

    // Create a new subcollection named "InstaTools" under the user's document
    const instaToolsRef = collection(docRef, "InstaTools");

    // Check if a document already exists in the "InstaTools" subcollection
    const instaToolsQuerySnapshot = await getDocs(instaToolsRef);
    if (instaToolsQuerySnapshot.empty) {
      // No document exists in the "InstaTools" subcollection, so create one
      const subCollectionDocData = {
        INS1: "YourValueForINS1", // Replace "YourValueForINS1" with the actual value you want to set
        // Add other fields if needed
      };
      const docRefInInstaTools = await addDoc(instaToolsRef, subCollectionDocData);

      console.log("Subcollection 'InstaTools' created successfully!");
      console.log("Document with 'INS1' field added to 'InstaTools' subcollection:", docRefInInstaTools.id);

      INS1Value = "YourValueForINS1"; // Update INS1Value
    } else {
      // A document already exists in the "InstaTools" subcollection, update INS1Value
      console.log("A document already exists in 'InstaTools' subcollection.");
      INS1Value = instaToolsQuerySnapshot.docs[0].data().INS1;
    }

    // Create a new subcollection named "FbTools" under the user's document
    const fbToolsRef = collection(docRef, "FbTools");

    // Check if a document already exists in the "FbTools" subcollection
    const fbToolsQuerySnapshot = await getDocs(fbToolsRef);
    if (fbToolsQuerySnapshot.empty) {
      // No document exists in the "FbTools" subcollection, so create one
      const subCollectionDocData = {
        FB1: "YourValueForFB1", // Replace "YourValueForFB1" with the actual value you want to set
        // Add other fields if needed
      };
      const docRefInFbTools = await addDoc(fbToolsRef, subCollectionDocData);

      console.log("Subcollection 'FbTools' created successfully!");
      console.log("Document with 'FB1' field added to 'FbTools' subcollection:", docRefInFbTools.id);

      FB1Value = "YourValueForFB1"; // Update FB1Value
    } else {
      // A document already exists in the "FbTools" subcollection, update FB1Value
      console.log("A document already exists in 'FbTools' subcollection.");
      FB1Value = fbToolsQuerySnapshot.docs[0].data().FB1;
    }

    // Create a new subcollection named "InstaTools2" under the user's document
    try {
      const instaTools2Ref = collection(docRef, "instatools2");

      // Check if a document already exists in the "instatools2" subcollection
      const instaTools2QuerySnapshot = await getDocs(instaTools2Ref);
      if (instaTools2QuerySnapshot.empty) {
        // No document exists in the "instatools2" subcollection, so create one
        const subCollectionDocData = {
          INS2: "YourValueForINS2", // Replace "YourValueForINS2" with the actual value you want to set
          // Add other fields if needed
        };
        const docRefInInstaTools2 = await addDoc(instaTools2Ref, subCollectionDocData);

        console.log("Subcollection 'instatools2' created successfully!");
        console.log("Document with 'INS2' field added to 'instatools2' subcollection:", docRefInInstaTools2.id);

        INS2Value = "YourValueForINS2"; // Update INS2Value
      } else {
        // A document already exists in the "instatools2" subcollection, update INS2Value
        console.log("A document already exists in 'instatools2' subcollection.");
        INS2Value = instaTools2QuerySnapshot.docs[0].data().INS2;
      }
    } catch (error) {
      console.error("Error creating 'instatools2' subcollection:", error);
    }

    // Create a new subcollection named "FbTools2" under the user's document
    try {
      const fbTools2Ref = collection(docRef, "fbtools2");

      // Check if a document already exists in the "fbtools2" subcollection
      const fbTools2QuerySnapshot = await getDocs(fbTools2Ref);
      if (fbTools2QuerySnapshot.empty) {
        // No document exists in the "fbtools2" subcollection, so create one
        const subCollectionDocData = {
          FB2: "YourValueForFB2", // Replace "YourValueForFB2" with the actual value you want to set
          // Add other fields if needed
        };
        const docRefInFbTools2 = await addDoc(fbTools2Ref, subCollectionDocData);

        console.log("Subcollection 'fbtools2' created successfully!");
        console.log("Document with 'FB2' field added to 'fbtools2' subcollection:", docRefInFbTools2.id);

        FB2Value = "YourValueForFB2"; // Update FB2Value
      } else {
        // A document already exists in the "fbtools2" subcollection, update FB2Value
        console.log("A document already exists in 'fbtools2' subcollection.");
        FB2Value = fbTools2QuerySnapshot.docs[0].data().FB2;
      }
    } catch (error) {
      console.error("Error creating 'fbtools2' subcollection:", error);
    }

  } catch (error) {
    console.error("Error creating subcollections:", error);
  }

  // Update the UI with the "INS1" and "FB1" values, whether they were created or already existed
  noon4.innerHTML = FB2Value; // Display FB2Value in noon4
  noon3.innerHTML = INS2Value; // Display INS2Value in noon3
  noon2.innerHTML = INS1Value; // Display INS1Value in noon2
  noon.innerHTML = FB1Value; // Display FB1Value in noon
  noon5.innerHTML = H; // Display the value of H in noon5

  document.querySelector(".NameOfPerson").textContent = `Hello ${mainData.username}`;

  setTimeout(hideLoading, 1000);
  function hideLoading() {
    document.querySelector(".loaderDad").style.display = "none";
  }
});
/* end get user doc */


async function getMainData(){
  await getDoc(doc(db, "accounts", docId)).then(e=>{
    mainData = e.data()
  })
}


let src="";

/*3*/
async function uploadImage() {

  const ref = firebase.storage().ref();
  const file = document.querySelector("#in2").files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type
  };

  const task = ref.child(name).put(file, metadata);
  task
  .then(async snapshot => snapshot.ref.getDownloadURL())
  .then(async url => {
    src = url
    document.querySelector(".loaderDad").style.display="none"
  })
  .catch(console.error);

}
/*3*/





/*****************************************************************************/



let int = document.querySelector('#in')
let btn1 = document.querySelector('#btn1')
let btn2 = document.querySelector('#btn2')




//save in local storage
function save() {
  let G = noon5.innerHTML;

  /*start post*/
  setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
    ...mainData,
    N: `${G}`,
  });
  /*end post*/
  
}
//end save




//btn for add note and save in local storage
btn1.onclick=async()=>{


  let text=int.value;

  // let id = Math.floor(Math.random() * 100000000);
  // let date=showDate();
  // await setDoc(doc(db,"Notes",`${id}`),{
  //   id: id,
  //   text: text,
  //   dateInSecond: Date.now(),
  //   date: date,
  // })
  
  
  if (text !== ""&&text.trim()!==''|| src!==''&&text.trim()!==''||src!==''&&text.trim()==''){
    
  let div=document.createElement('div');
  div.id='d1';
  
  if (src!==''&&text.trim()!=='')
  {
    div.innerHTML=`
    
    <p id="text"></p>
    
    <br>
    
    <img src="${src}" id="img0">
    
    <button id="clear" class="dd clearM"></button>
    
    <div>
    <button class="ooo">
      
    </button>
    </div>
    
    
    <p id='date'></p>
    
    <div id="btn-copy">
        <span>Copy</span>
    </div>
    
    
    <div id="btn-edit">
        <span>Edit</span>
    </div>
    
    
    
    `
    
    div.childNodes[1].textContent=`${text}`
    div.childNodes[1].style=`margin: 30px 10px 10px`
    
  } else if (src==''&&text.trim()!=='')
  {
    div.innerHTML=`
    
    
    <p id="text"></p>
    
    
    <button id="clear" class="dd"></button>
    
    
    <div>
    <button class="ooo">
      
    </button>
    </div>
    
    
    <p id='date'></p>
    
    
    <div id="btn-copy">
      <span>Copy</span>
    </div>
    
    
    <div id="btn-edit">
      <span>Edit</span>
    </div>
    
    `
    
  
   div.childNodes[1].textContent=`${text}`
    
  } else if(src!==''&&text.trim()=='')
  {
  
    div.innerHTML=`
    
    <img src="${src}" id="img0">
    
    <button id="clear" class="dd clearM"></button>
    
    <div>
    <button class="ooo">
      
    </button>
    </div>
    
    
    <p id='date'></p>
    
    `
    
    div.childNodes[1].style=`margin: 25px 0;`
    
  }
  

    if (noon5.innerHTML==''){
      noon5.appendChild(div);
    } else{
      noon5.firstChild.before(div);
    }
    
  }
  
  
  
  ////////////////////
  
  

  dateGG=Number(mainData.dateGG)
  
  if (dateGG===0)
  {
    
    for(let i=0; i<date.length; i++)
    {
      date[i].hidden = true;
    }
    
    
  }
  
  
  
  
  ////////////////////
  
  
  toDoBtnGG=Number(mainData.toDoBtnGG)
  
  
  ooo = document.querySelectorAll(".ooo");
  
  if (toDoBtnGG===0)
  {
    
    for(let i=0; i<ooo.length; i++)
    {
      ooo[i].hidden = true;
    }
    
    
  }
  
  
  
    ////////////////////
  
  
  
  
  copyBtnGG=Number(mainData.copyBtnGG)
  
  
  btnCopy = document.querySelectorAll("#btn-copy");
  
  if (copyBtnGG===0)
  {
    
    for(let i=0; i<btnCopy.length; i++)
    {
      btnCopy[i].hidden = true;
    }
    
    
  }
  
  
    ////////////////////
    
    
  
  
  editBtnGG=Number(mainData.editBtnGG)
  
  
  btnEdit = document.querySelectorAll("#btn-edit");
  
  if (editBtnGG === 0)
  {
  
    for (let i = 0; i < btnEdit.length; i++)
    {
      btnEdit[i].hidden = true;
    }
  
  
  }
  
  
  ////////////////////
  
  
  
  
  
  
  ////////////////////
    
    
  
  
  deletBtnGG=Number(mainData.deletBtnGG)
  
  
  btnDelet = document.querySelectorAll("#clear");
  
  if (deletBtnGG === 0)
  {
  
    for (let i = 0; i < btnDelet.length; i++)
    {
      btnDelet[i].hidden = true;
    }
  
  
  }
  
  
  ////////////////////
  
  


  
  
  
  lab.style.background='white'
  lab.style.color='black'
  
  showDate()
  
  int.value='';
  
  src=''
  
  in2.value=''
  
  
  save()
  
}
//end btn add



//restore what we put in local storge

function lod(){
  
  console.log("yes")
  
  //
  let deletBtnGG=Number(mainData.deletBtnGG)
  
  if (deletBtnGG===1) {
    
    deletBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(deletBtnGG===0)
  {
    
    deletBtn.style = `
    background: white;
    `
    
  }
  //
  
  
  
  
  
  
     //
  let editBtnGG=Number(mainData.editBtnGG)
  
  if (editBtnGG===1) {
    
    editBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(editBtnGG===0)
  {
    
    editBtn.style = `
    background: white;
    `
    
  }
  //
  
  
  
  
  
    //
  let copyBtnGG=Number(mainData.copyBtnGG)
  
  if (copyBtnGG===1) {
    
    copyBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(copyBtnGG===0)
  {
    
    copyBtn.style = `
    background: white;
    `
    
  }
  //
  
  
  
  
  
  //
  let toDoBtnGG=Number(mainData.toDoBtnGG)
  
  if (toDoBtnGG===1) {
    
    toDoBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(toDoBtnGG===0)
  {
    
    toDoBtn.style = `
    background: white;
    `
    
  }
  //
  
  
  
  
  
  let imgBtnGG=Number(mainData.imgBtnGG)
  
  if (imgBtnGG===1) {
    
    imgBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    
    lab.style.display='flex'
    
    
    
  } else if(imgBtnGG===0)
  {
    
    imgBtn.style = `
    background: white;
    `
    
    lab.style.display='none'
    
  }
  
  
  
  
  
  
  
  
  let BtextGG=Number(mainData.BtextGG)
  
  if (BtextGG===1) {
    
    Btext.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    
    btn2.style.display='block'
    
    
    
  } else if(BtextGG===0)
  {
    
    Btext.style = `
    background: white;
    `
    
    
    btn2.style.display='none'
    
    
    
  }
  
  
  
  
  
  dateGG=Number(mainData.dateGG)
  
  

  if (dateGG===1) {
    
    dateBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
  } else if(dateGG===0)
  {
    
    dateBtn.style = `
    background: white;
    `
  }
  
}
//end restore





//btn for delete element
function L()
{
  
  let S=event.srcElement.parentNode
  
  event.srcElement.parentNode.innerHTML=''
  
  S.parentNode.removeChild(S)
  save()
}
//end of btn delete




//btn for delete element with img
function M()
{
  
  let E = event.srcElement.parentNode
  
  
  E.parentNode.removeChild(E)
  
  save()
}
//end of btn delete









//btn for scroll

let btnup = document.getElementById('btnup')

window.onscroll = function() {
  if (window.scrollY >= 200) {
    btnup.style.display = "block";
  } else {
    btnup.style.display = "none";
  }
};


btnup.onclick = function() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  })
}


//end button for scroll






// save img src in local storge

document.querySelector("#in2").addEventListener("change", function () {
  
  document.querySelector(".loaderDad").style.display="block"
  uploadImage();

  gl()
})

//end save src in local storge









// change color for label for btn select img

let lab = document.querySelector('#lab')


function gl() {
  
  if (in2.value !== '') {
    lab.style.background = '#D62828'
    lab.style.color='white'
    
  }
  
  
}


gl()

//end change color










//btn for checkbox


function K()
{
  
  let D=event.srcElement
  
  if(
    D.style.background==`transparent`||
    D.style.background==``
  )
  {
    D.style=`
  background: url(img/toDo.jpg);
  background-size: cover;
  `
  }else if(D.style.background!=`transparent`)
  {
    D.style.background=`transparent`
  }
  
  save()
}

//end btn for checkbox










//show data and time
function showDate(){
  
  const d = new Date();
  
  
  let year = d.getFullYear();
  let month = d.getMonth();
  let day = d.getDate();
  let hour = d.getHours();
  let mint = d.getMinutes();
  
  
  if(mint<10){
    mint=`0${mint}`
  }
  
  
  
  
  if (hour>12){
    
    document.querySelector('#date').innerHTML = `
      
      
      ${year}/${month+1}/${day}
      => ${hour-12}:${mint} PM
      
      
      
      `;
    
  } else if (hour<=12){
    
    document.querySelector('#date').innerHTML = `
  
  
  ${year}/${month+1}/${day}
  => ${hour}:${mint} AM
  
  
  
  `;
    
  }
  
  
}
//end show data and time




let areatext=document.querySelector('#area-text');


// show Big text page 


btn2.addEventListener('click',()=>{
  
  areatext.style.display='block'
  textint.value=int.value
})

  
// end of big text



// back

let back = document.querySelector('#back-area')

back.onclick=()=>{
  
  areatext.style.display='none'
  
}

  
// end of back




// add area

let addarea = document.querySelector('#add-area')
let textint = document.querySelector('#text-int')

addarea.onclick=()=>{
  
  int.value = textint.value;
  areatext.style.display='none'
  
}

  
// end of add









///function to copy

function copy() {
  
  let T = event.srcElement.parentNode.parentNode
  
  let x = document.createElement('textarea')
  x.value=T.children[0].textContent
  document.body.appendChild(x)
  x.select()
  x.setSelectionRange(0,99999);
  document.execCommand("copy");
  document.body.removeChild(x)
}


//end of copy




//edit function


let btnedit = document.querySelector('#btn-edit')

let addEdit = document.querySelector('#add-edit')
  
let textEdit = document.querySelector('#text-edit')
  
let editText = document.querySelector('#edit-text')
  
let backEdit = document.querySelector('#back-edit')

let E1;

let xE;
  

function edit() {
  
  E1 = event.srcElement.parentNode.parentNode
  xE=E1.children[0].textContent
  

  editText.style.display='block';
  textEdit.value=xE;
  
  
}



function backedit() {
  
  editText.style.display='none';
  
}


function addedit() {
  
  if(textEdit.value!==''&&textEdit.value!==' ')
  {
    
    E1.children[0].textContent = textEdit.value;
    editText.style.display = 'none';
    save();
  
  } else {
    
    
    editText.style.display = 'none';
    save();
    
  }
  
}


//end of edit




// setting

let settings = document.querySelector('#settings')

let settingDone = document.querySelector('#setting-done')

let settingPage = document.querySelector('#setting-page')

function showSett() {
  
  settingPage.style.display='block'
  
}

function hideSett() {
  save()
  settingPage.style.display = 'none'

}






let dateText = document.querySelector('.dateText')

let Btext = document.querySelector('.Btext')

let imgBtn = document.querySelector('.imgBtn')

let dateBtn = document.querySelector('.dateBtn')

let toDoBtn = document.querySelector('.toDoBtn')

let copyBtn = document.querySelector('.copyBtn')

let editBtn = document.querySelector('.editBtn')

let deletBtn = document.querySelector('.deletBtn')


let dateGG;
let toDoBtnGG;
let copyBtnGG;
let editBtnGG;
let deletBtnGG;




/////////////////


dateBtn.addEventListener('click',()=>{
  
  let date = document.querySelectorAll("#date")
  
  
  
  if (
    dateBtn.style.background === `white`
  )
  {
    dateBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    for(let i=0; i<date.length; i++)
    {
      date[i].hidden = false;
    }
    
    dateGG = 1;

    
    console.log(dateGG)

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      dateGG: 1,
    });

    getMainData()
    /*end post*/
   
    
    
  } else if (dateBtn.style.background !== `white`)
  {
    dateBtn.style.background = `white`
    
    for(let i=0; i<date.length; i++)
    {
      date[i].hidden = true;
    }
    
    dateGG = 0;
    
    console.log(dateGG)

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      dateGG: 0,
    });

    getMainData()
    /*end post*/
    
  }
  
  
  
})


////////////////




////////////////


Btext.addEventListener('click',()=>{
  

  
  if (
    Btext.style.background === `white`
  )
  {
    Btext.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    btn2.style.display='block'
    
    
  
    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      BtextGG: 1,
    });

    getMainData()
    /*end post*/
    
  } else if (Btext.style.background !== `white`)
  {
    
    Btext.style.background = `white`
    
    btn2.style.display='none'
    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      BtextGG: 0,
    });

    getMainData()
    /*end post*/
    
  }
  
  
  
  
  
})



////////////////







////////////////

imgBtn.addEventListener('click',()=>{
  
  if (
    imgBtn.style.background === `white`
  )
  {
    imgBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    lab.style.display='flex'
    
    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      imgBtnGG: 1,
    });

    getMainData()
    /*end post*/
  
    
    
  } else if (imgBtn.style.background !== `white`)
  {
    
    imgBtn.style.background = `white`
    
    lab.style.display='none'
    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      imgBtnGG: 0,
    });

    getMainData()
    /*end post*/
    
  }
  
  
})



////////////////





////////////////


let ooo;


toDoBtn.addEventListener('click',()=>{
  
  ooo = document.querySelectorAll(".ooo")
  
  if (
    toDoBtn.style.background === `white`
  )
  {
    toDoBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    for (let i = 0; i < ooo.length; i++)
    {
      ooo[i].hidden = false;
    }
    
    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      toDoBtnGG: 1,
    });

    getMainData()
    /*end post*/
    
    
    
  } else if (toDoBtn.style.background !== `white`)
  {
    
    toDoBtn.style.background = `white`
    
    for (let i = 0; i < ooo.length; i++)
    {
      ooo[i].hidden = true;
    }
    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      toDoBtnGG: 0,
    });

    getMainData()
    /*end post*/
    
  }
  
})



////////////////





////////////////
  
let btnCopy;


copyBtn.addEventListener('click',()=>{
  
  btnCopy = document.querySelectorAll("#btn-copy")
  
  if (
    copyBtn.style.background === `white`
  )
  {
    copyBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    for (let i = 0; i < btnCopy.length; i++)
    {
      btnCopy[i].hidden = false;
    }
    
    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      copyBtnGG: 1,
    });

    getMainData()
    /*end post*/
    
    
    
  } else if (copyBtn.style.background !== `white`)
  {
    
    copyBtn.style.background = `white`
    
    for (let i = 0; i < btnCopy.length; i++)
    {
      btnCopy[i].hidden = true;
    }
    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      copyBtnGG: 0,
    });

    getMainData()
    /*end post*/
    
  }
  
  
  
})


////////////////







////////////////
  
let btnEdit;


editBtn.addEventListener('click',()=>{
  
  btnEdit = document.querySelectorAll("#btn-edit")
  
  if (
    editBtn.style.background === `white`
  )
  {
    editBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `
    
    for (let i = 0; i < btnEdit.length; i++)
    {
      btnEdit[i].hidden = false;
    }
    
    
   

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      editBtnGG: 1,
    });

    getMainData()
    /*end post*/
    
    
    
  } else if (editBtn.style.background !== `white`)
  {
    
    editBtn.style.background = `white`
    
    for (let i = 0; i < btnEdit.length; i++)
    {
      btnEdit[i].hidden = true;
    }
    
    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      editBtnGG: 0,
    });

    getMainData()
    /*end post*/
    
  }
  
  
  
})


////////////////



////////////////

let btnDelet;


deletBtn.addEventListener('click', () => {

  btnDelet = document.querySelectorAll("#clear")

  if (
    deletBtn.style.background === `white`
  )
  {
    deletBtn.style = `
    background: url(img/gu.svg);
    background-size: cover;
    `

    for (let i = 0; i < btnDelet.length; i++)
    {
      btnDelet[i].hidden = false;
    }


    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      deletBtnGG: 1,
    });

    getMainData()
    /*end post*/



  } else if (deletBtn.style.background !== `white`)
  {

    deletBtn.style.background = `white`

    for (let i = 0; i < btnDelet.length; i++)
    {
      btnDelet[i].hidden = true;
    }

    

    /*start post*/
    setDoc(doc(db, "accounts", localStorage.getItem("notes-online-id")), {
      ...mainData,
      deletBtnGG: 0,
    });

    getMainData()
    /*end post*/

  }



})


////////////////




////////////////







// end of setting 















///////*start  enter*/////////

document.querySelector("#in").addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.querySelector("#btn1").click();
  }
});

///////*end  enter*/////////



lod()

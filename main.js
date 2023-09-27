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
  let FB3Value = null; // Initialize FB3Value

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
        INS1: "ContactAhmedMahmoudToActivateYourInstaToolsHere", // Replace with your desired value
        // Add other fields if needed
      };
      const docRefInInstaTools = await addDoc(instaToolsRef, subCollectionDocData);

      console.log("Subcollection 'InstaTools' created successfully!");
      console.log("Document with 'INS1' field added to 'InstaTools' subcollection:", docRefInInstaTools.id);

      INS1Value = "ContactAhmedMahmoudToActivateYourInstaToolsHere"; // Update INS1Value
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
        FB1: "ContactAhmedMahmoudToActivateYourFacebookToolsHere", // Replace with your desired value
        // Add other fields if needed
      };
      const docRefInFbTools = await addDoc(fbToolsRef, subCollectionDocData);

      console.log("Subcollection 'FbTools' created successfully!");
      console.log("Document with 'FB1' field added to 'FbTools' subcollection:", docRefInFbTools.id);

      FB1Value = "ContactAhmedMahmoudToActivateYourFacebookToolsHere"; // Update FB1Value
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
          INS2: "YourValueForINS2", // Replace with your desired value
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
          FB2: "YourValueForFB2", // Replace with your desired value
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

    // Create a new subcollection named "FbTools3" under the user's document
    try {
      const fbTools3Ref = collection(docRef, "fbtools3");

      // Check if a document already exists in the "fbtools3" subcollection
      const fbTools3QuerySnapshot = await getDocs(fbTools3Ref);
      if (fbTools3QuerySnapshot.empty) {
        // No document exists in the "fbtools3" subcollection, so create one
        const subCollectionDocData = {
          FB3: "YourValueForFB3", // Replace with your desired value
          // Add other fields if needed
        };
        const docRefInFbTools3 = await addDoc(fbTools3Ref, subCollectionDocData);

        console.log("Subcollection 'fbtools3' created successfully!");
        console.log("Document with 'FB3' field added to 'fbtools3' subcollection:", docRefInFbTools3.id);

        FB3Value = "YourValueForFB3"; // Update FB3Value
      } else {
        // A document already exists in the "fbtools3" subcollection, update FB3Value
        console.log("A document already exists in 'fbtools3' subcollection.");
        FB3Value = fbTools3QuerySnapshot.docs[0].data().FB3;
      }
    } catch (error) {
      console.error("Error creating 'fbtools3' subcollection:", error);
    }

  } catch (error) {
    console.error("Error creating subcollections:", error);
  }

  // Update the UI with the "INS1", "FB1", "INS2", "FB2", and "FB3" values, whether they were created or already existed
  noon4.innerHTML = FB2Value; // Display FB2Value in noon4
  noon3.innerHTML = INS2Value; // Display INS2Value in noon3
  noon2.innerHTML = INS1Value; // Display INS1Value in noon2
  noon.innerHTML = FB1Value; // Display FB1Value in noon
  // Display FB3Value in noonX (Replace 'X' with the appropriate number)
  noon6.innerHTML = FB3Value;
  noon5.innerHTML = H; // Display the value of H in noon5

  document.querySelector(".NameOfPerson").textContent = `Hello ${mainData.username}`;

  setTimeout(hideLoading, 1000);
  function hideLoading() {
    document.querySelector(".loaderDad").style.display = "none";
  }
});
/* end get user doc */

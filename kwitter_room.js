const firebaseConfig = {
    apiKey: "AIzaSyDZJyZHgcnt8et11NAMT9QfGMNPuRkviXI",
    authDomain: "project93-28ef4.firebaseapp.com",
    databaseURL: "https://project93-28ef4-default-rtdb.firebaseio.com",
    projectId: "project93-28ef4",
    storageBucket: "project93-28ef4.appspot.com",
    messagingSenderId: "923736927930",
    appId: "1:923736927930:web:a0fd9bf7a42f86ad85dc83"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                childData = childSnapshot.val();
                if (childKey != "purpose") {
                      firebase_message_id = childKey;
                      message_data = childData;
                      //Start code

                      //End code
                }
          });
    });
}
getData();

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    });
}
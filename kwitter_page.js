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
console.log(user_name);
document.getElementById("name").innerHTML = "Welcome " + user_name + " !";

function makeRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html"
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
                  document.getElementById("output").innerHTML =
                        "";
                  snapshot.forEach(function (childSnapshot) {
                        childKey = childSnapshot.key;
                        Room_names = childKey;
                        console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;


                  });
            });
}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
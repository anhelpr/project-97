var firebaseConfig = {
    apiKey: "AIzaSyDtyaFe4v-K9R7mNgKdi9LYk9EVz_dgW2o",
    authDomain: "kwitter-3b703.firebaseapp.com",
    databaseURL: "https://kwitter-3b703-default-rtdb.firebaseio.com",
    projectId: "kwitter-3b703",
    storageBucket: "kwitter-3b703.appspot.com",
    messagingSenderId: "784851417258",
    appId: "1:784851417258:web:e067e2feea59fbc68638d3"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name") ;
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " ! ";


function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name" , room_name);

      window.location = "chat_app_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class ='room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row ;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "chat_app_page.html";
}

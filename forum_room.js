
const firebaseConfig = {
  apiKey: "AIzaSyCISbhp2qVISj-xqFBC5nvN-rR1AaRU760",
  authDomain: "naosei-7dda0.firebaseapp.com",
  databaseURL: "https://naosei-7dda0-default-rtdb.firebaseio.com/",
  projectId: "naosei-7dda0",
  storageBucket: "naosei-7dda0.appspot.com",
  messagingSenderId: "722374767420",
  appId: "1:722374767420:web:6443dcb471a5ca1330e439"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    
    user_name = localStorage.getItem("user_name");
    
    document.getElementById("user_name").innerHTML =  "Bem-vindo(a), " + user_name + "!";
    
    //adicionar a função addRoom

    
    function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
          childKey = childSnapshot.key;
          Room_names = childKey;
          console.log("Room Name - " + Room_names);
          row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
          document.getElementById("output").innerHTML += row;
        });
      });
    
    }
    // Para obter os dados do banco de dados e exibi-los na página de salas do ChatRoom
    getData();
    
    //adicionar a função redirectToRoomName

    
    //adicionar a função logout

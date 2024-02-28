
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
  room_name = localStorage.getItem("room_name");
    
//adicionar a função send



  function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
      document.getElementById("output").innerHTML = ""; 
      snapshot.forEach(function (childSnapshot) {
        childKey = childSnapshot.key; childData = childSnapshot.val(); 
        if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code
          console.log(firebase_message_id);
          console.log(message_data);
          name = message_data['name'];
          message = message_data['message'];
          like = message_data['like'];
          name_with_tag = "<h4> " + name + "<img class='user_tick' width='80px' src='logo.jpg'></h4>";
          message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
          like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
          span_with_tag = "<span class='bi bi-hand-thumbs-up'> Like: " + like + "</span></button><hr>";
  
          row = name_with_tag + message_with_tag + like_button + span_with_tag;
          document.getElementById("output").innerHTML += row;
          //End code
        }
      });
    });
  }
  getData();
  

  //adicionar a função update like

  
// adicionar a função logout

  
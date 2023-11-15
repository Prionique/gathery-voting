import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
      import { getDatabase, set, ref, push, child, get, onValue} from "https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js"
      // TODO: Add SDKs for Firebase products that you want to use
      // https://firebase.google.com/docs/web/setup#available-libraries
    
      // Your web app's Firebase configuration
      const firebaseConfig = {
        apiKey: "AIzaSyCLQSqkmqkuJsoBrbodYD9ZfjcPi_br9W0",
        authDomain: "voting-de6ed.firebaseapp.com",
        projectId: "voting-de6ed",
        storageBucket: "voting-de6ed.appspot.com",
        messagingSenderId: "639916913862",
        appId: "1:639916913862:web:63a483d396cca1c6c513c7"
      };
    
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const database = getDatabase(app);
    
      //set(ref(database, "users/"))


      const classes = ref(database, "classes")
      const place  = document.getElementById("list")


      onValue(classes, function(snapshot) {

        clearBody()
        let class_list = Object.values(snapshot.val())
        for (var i = 0; i < class_list.length; i++) {

          place.innerHTML += `<div class="form-element">
            <input type="checkbox" value="${ class_list[i]["index"] }" id="${ class_list[i]["index"]}" onchange = "checkBoxCheck('${class_list[i]["index"]}')">
            <label for="${class_list[i]["index"]}">    
              <div class="title">
                ${class_list[i]["index"]}
              </div>
            </label>
          </div>`
        }
        }); 
        function clearBody () {
          place.innerHTML = ''
        }
      
      const class_check_list = document.getElementById("list")
      console.log(class_check_list)

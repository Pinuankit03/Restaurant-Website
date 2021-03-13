let userListData = [];
function getData(){
  if ("userList" in localStorage){
    userListData = JSON.parse(localStorage.getItem("userList"));

    // document.getElementById("output").innerHTML += allUsers;
  }
}
function user(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    this.getFullname = function(){
      return this.firstname + " " + this.lastname;
    };
};
function validlogin(){
      getData();
      console.log("Size", userListData.length);
      let email = document.forms["userCredential"]["email"].value;
      let password = document.forms["userCredential"]["password"].value;

      for (var i = 0; i < userListData.length; i++) {
        var entry = userListData[i];
        var storedPassWord = entry.password;
        var storedEmailAddress = entry.email;

        if (email == storedEmailAddress && password == storedPassWord) {
            const newUser = new user(entry.firstname, entry.lastname);
            //save it to local storage
            localStorage.setItem("userName", newUser.getFullname());
            localStorage.setItem("isLogin", true);
            alert("Successfully logged in!");
            return true;
    }
}
alert('Invalid Username or Password! Please try again.');
// event.preventDefault();
// window.location="login.html";
return false;
};

function logout(){
        console.log("logout click");
 localStorage.removeItem("userName");
 localStorage.setItem("isLogin", false);
};

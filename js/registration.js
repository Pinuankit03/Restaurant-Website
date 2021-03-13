
function validateForm(){
  console.log("validating the inputs");
    var userList = [];
  if ("userList" in localStorage){
        userList = JSON.parse(localStorage.getItem("userList"));
        console.log(userList);
        // document.getElementById("output").innerHTML += allUsers;
      }

  var firstname = document.forms["userinfo"]["firstname"].value;
  let lastname = document.forms["userinfo"]["lastname"].value;
  let email = document.forms["userinfo"]["email"].value;
  let password = document.forms["userinfo"]["password"].value;
  let phone = document.forms["userinfo"]["phone"].value;

  userList.push(({firstname,lastname,email,password,phone}));
  localStorage.setItem("userList", JSON.stringify(userList));
    //console.log("New user : " + newUser);
  return false;
}

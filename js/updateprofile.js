$(document).ready(function() {
  var userList = [];
  var loginData = [];
  var fullName;

  if ("loginData" in localStorage){
      loginData = JSON.parse(localStorage.getItem("loginData"));
      console.log(loginData);
    }

  if ("userList" in localStorage){
      userList = JSON.parse(localStorage.getItem("userList"));
      console.log(userList);
      for (var i = 0; i < userList.length; i++) {
          if (loginData[0].email == userList[i].email) {
          fullName = userList[i].fname + " " + userList[i].lname;
          console.log(userList[i].fname);
        $('input[name=firstname]').val(userList[i].fname);
        $('input[name=lastname]').val(userList[i].lname);
        $('input[name=email]').val(userList[i].email);
        $('input[name=phone]').val(userList[i].phone);
    }
}
}


$("#updateprofile").click(function() {
var fname = $("#fname").val();
var lname = $("#lname").val();
var email = $("#email").val();
var phone = $("#phone").val();
var fullName = fname + " " + lname;

if (fname == '' || email == '' || phone == '') {
alert("Please fill all fields...!!!!!!");
}
else {
  for (var i = 0; i < userList.length; i++) {
      if (loginData[0].email == userList[i].email) {
        var user = userList[i];
        user.fname = fname;
        user.lname = lname;
        user.email = email;
        user.phone = phone;
        userList[i] = user;
        alert ("Profile updated successfully");
        window.location.href = 'home.html';
         return false;
      }
        break;
    }
    localStorage.setItem("userList", JSON.stringify(userList));
}
})});

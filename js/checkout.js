var loginData = [];
if ("loginData" in localStorage){
    loginData = JSON.parse(localStorage.getItem("loginData"));
    console.log(loginData);
  }

//   var contain = document.getElementById("contain");
function loginSessionUI(){
console.log(localStorage.isLogin);
if(localStorage.isLogin){
    // contain.style.visibility = "hidden";
  var sessionData = '<ul id="n" class="nav-links">'+
  '<li id="closebtn" onclick="navSlide()"><a onclick="navSlide()" id="res-button" class="button" target="_blank">X</a></li>'+
  '<li class="xbtn"><a class="button" href="updateprofile.html">Update Profile</a></li>'+
  '<li><a class="button" onclick="logout()">Logout</a></li>'+
  '  </ul>'
    $('.slider').append(sessionData)
     $('#username').text(loginData[0].fullName);
  }
else{
var sessionData = '<ul id="n" class="nav-links">'+
'<li id="closebtn" onclick="navSlide()"><a onclick="navSlide()" id="res-button" class="button" target="_blank">X</a></li>'+
'<li class="xbtn"><a class="button" href="registration.html">Register</a></li>'+
'<li><a class="button" href="login.html">Login</a></li>'+
'  </ul>'
  $('.slider').append(sessionData)
}
}
function logout(){
console.log("logout click");
if(confirm('Are you sure you want to logout?')) {
  localStorage.removeItem("loginData");
  localStorage.removeItem("isLogin");
  window.location.href = 'home.html';
      }else{
        return false;
    }
}

$('load', function(){
   
    loginSessionUI();

})
const cat = localStorage.getItem('totalPrice');
console.log(cat);

const orderInfo = document.getElementById("order-info");
orderInfo.innerHTML = "Total Price: $"+cat;

const list = localStorage.getItem('listOfOrders');
console.log(list[0] +" " +list[1]);

// console.log("here")
var menuItems = [];
var filters = []
  var loginData = [];
  if ("loginData" in localStorage){
      loginData = JSON.parse(localStorage.getItem("loginData"));
      console.log(loginData);
    }

function loginSessionUI(){
  console.log(localStorage.isLogin);
  if(localStorage.isLogin){
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

function createMenu(){
    fetch('https://gist.githubusercontent.com/skd09/8d8a685ffbdae387ebe041f28384c13c/raw/26e97cec1e18243e3d88c90d78d2886535a4b3a6/menu.json')
    .then(response => response.json())
    // .then(data => {console.log(data);
    // //data.map()
    // })
    .catch(error => console.log(error));

}
var dataTag = document.querySelector('.data');


const menuURL = "https://gist.githubusercontent.com/skd09/8d8a685ffbdae387ebe041f28384c13c/raw/26e97cec1e18243e3d88c90d78d2886535a4b3a6/menu.json";
var menuList = []
$('load', function(){
  loginSessionUI()
    callFoodAPI()
})

function callFoodAPI(){

  let response = fetch(menuURL)
    .then(response => response.json())
    .then(data => {
    //   console.log(data);

      menuList = data
        appendData()
        appendFilterData()
    })
    .catch( (err) => {
      alert(err);
    });
}




function appendData(){
  for (i=0 ; i<menuList.length ; i++){

    //   console.log(menuList[i]);
     var item = '<div class="grid 1" onclick="foodItemPopUp()">'+
     '<img class="pic 1" src="'+menuList[i].Image+'">'+
      '<h5 id="title">'+menuList[i].Title+'</h5>'+
     '<br>'+
     '<div class="title-price">'+
       '<i class="star"></i>'+
       '<h5 id="ratings" style="margin-top: 8px; margin-left: 5px;">'+menuList[i].Ratings+'</h5>'+
       '<h5 id="category" >'+menuList[i].Category+'</h5>'+
       '<h4 id="price">$'+menuList[i].Price+'</h4>'+
     '</div>'+
  '</div>'
        $('.data').append(item)


   }
}


function appendFilterData(){

    dataTag = document.querySelector('.filter-div');
    for (i=0 ; i<menuList.length ; i++){
        if (!filters.includes(menuList[i].Category)){
        // console.log(menuList[i]);

       var item = '<div   class="filter-wrap">'+
      ' <div  class="filter"></div>'+
     '  <h6 style=" color: var(--greenTxt); font-size:17px;">'+menuList[i].Category+'</h6>'+
    ' </div>'
          $('.filter-div').append(item)
          filters.push(menuList[i].Category);
        }
     }
  }

function foodItemPopUp(){
    alert("here");
}

// function onClick(i, event){
//     console.log(event.target);
//     if($(event.target).hasClass('card')){
//      $('.card').eq(i).animate().toggleClass('active')
//     }
// }

// function actionOver(i){
//     //$('.card:eq('+i+')').addClass('border')
//     $('.card').eq(i).animate().addClass('border')
// }

// function actionOut(i){
//     //$('.card:eq('+i+')').addClass('border')
//     $('.card').eq(i).animate().removeClass('border')
// }

// function modalClick(name, event){
//     console.log(event.target);
//     if($(event.target).hasClass('modal-trigger')){
//       callCountryDetailsAPI(name)
//       $('.modal').modal()
//     }
// }

// function callCountryDetailsAPI(name){
//   const countryURL = "https://restcountries.eu/rest/v2/name/" + name + "?fullText=true";

//   $.ajax({
//     type: "GET",
//     url: countryURL,
//     dataType: "json",
//     success: fetchCountryDetails,
//     error: function (request, error) {
//       alert("Unable to fetch data " , error);
//     }
//   });
// }

// function fetchCountryDetails(data){
//     console.log(data[0]);
//     $('#modalTitle').text(data[0].name)
//     $('#modalBody').text(data[0].region)
//     $('#modalImage').attr('src', data[0].flag)
// }

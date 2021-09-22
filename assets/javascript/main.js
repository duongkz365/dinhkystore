
'use strict'
var inputSearchElement = document.querySelector('input[name="input_Search"]');

var araySuggestions = [
    'tomato',
    'apple',
    'apricot',
    'avocado',
    'banana',
    'blackberry',
    'blackcurrant',
    'blueberry',
    'blackcurrant',
    'blueberry',
    'cherry',
    'coconut',
    'cantaloup',
    'fig',
    'grape',
    'grapefruit',
    'kiwi',
    'lemon',
    'dragon fruit',
    'water melon',
    'orange',
    'papaya',
    'rasphery',
    'plum',
    
];



var inputValue='';
var ee = document.querySelector('.suggestions');

    ee.classList.remove('suggestions__remove');



inputSearchElement.oninput = function(){
    inputValue = inputSearchElement.value;
    console.log(inputValue);

    if(inputValue ===''){
        var ee = document.querySelector('.suggestions');

    ee.classList.remove('suggestions__remove');
    }else {
        var ee = document.querySelector('.suggestions');

        ee.classList.add('suggestions__remove');
    }

    


   
   var length = inputValue.length;
  
   var listSuggestions = araySuggestions.filter(function(fruit,index){
    var count = 0;

    for(var i = 0;i<length;i++){
        if(fruit[i]==inputValue[i]){
            count++;
        }
    }

    if(count==length){
        return inputValue;
    }
});



//   console.log(listSuggestions);

    // listSuggestions.forEach(function(e){
    // document.querySelector('.suggestions__list').innerHTML = `<li class="suggestions__item"> ${e} </li>`;
    // })



    if(inputValue ===''){
        document.querySelector('.suggestions__list').innerHTML='';
    }else {
        if(listSuggestions.length == 0){
            document.querySelector('.suggestions__list').innerHTML = '<li class="suggestions__item"> Không tìm thấy kết quả tương tự </li>';    
        }else {
            var htmls = listSuggestions.map(function(fruits){
                return `<li class="suggestions__item"> ${fruits} </li>`;
            });
            
            document.querySelector('.suggestions__list').innerHTML =htmls.join('');
        }
    }
    
    

    // if(listSuggestions.length == 0){
    //     document.querySelector('.suggestions__list').innerHTML = '<li class="suggestions__item"> Không tìm thấy kết quả tương tự </li>';
    // }else {
    //     var htmls = listSuggestions.map(function(fruits){
    //         return `<li class="suggestions__item"> ${fruits} </li>`;
    //     });
        
    //     document.querySelector('.suggestions__list').innerHTML =htmls.join('');
    // }
    

    // var chuoi='';
    // listSuggestions.forEach(function(e){
    //     chuoi = chuoi + `<li class="suggestions__item"> ${e} </li>`;
    // })
   
    // document.querySelector('.suggestions__list').innerHTML =chuoi;

}



//register





const overlay = document.querySelector('.register_main');

const login = document.querySelector('.item_login');



var loadingLogin = document.querySelector('.loading_login');
var loadingRegister = document.querySelector('.loading_register');

var toRegister = document.querySelector('.toRegister-link');
var toLogin = document.querySelector('.toLogin-link');

var form_login = document.querySelector('.form_login');
var formRegister= document.querySelector('.form_register');

var confirmRegister = document.querySelector('.btn_register');
var confirmLogin = document.querySelector('.btn_login');
var loginhover = document.querySelector('.account__hover');


$(document).ready(function(){
    login.onclick = function(){
        
        $(".account__hover,.loading_login").hide();
        $(".form_login,.register_main,.btn_login").show();
        $(".register_main").style.zIndex = "0";
        // overlay.style.zIndex = "0";
       $(".register_main").click(function(){
           $(".register_main,.form_login").hide();
       });
        
    }
    
    confirmLogin.onclick = function(){
        
        loadingLogin.style.display = "block";
        overlay.style.zIndex = "3";
        confirmLogin.style.display = "none";
        overlay.onclick = function(){
            overlay.style.display = "block";
        }
        setTimeout(function(){
            overlay.style.display= "none";
             form_login.style.display = "none";
             
        },2500);
        
    }
    
    toRegister.onclick = function(){
        form_login.style.display ="none";
        formRegister.style.display ="block";
        loadingRegister.style.display = "none";
        confirmRegister.style.display = "block";
        overlay.onclick = function(){
            overlay.style.display = "none";
            formRegister.style.display = "none";
        }
        confirmRegister.onclick = function(){
            loadingRegister.style.display = "block";
            overlay.style.zIndex = "3";
            confirmRegister.style.display = "none";
            overlay.onclick = function(){
            overlay.style.display = "block";
             }
            setTimeout(function(){
                 overlay.style.display= "none";
                 formRegister.style.display = "none";
                    alert("Chào mừng đến với Vegist!!");
             },2500);
        }
    
        toLogin.onclick = function(){
            formRegister.style.display ="none";
        form_login.style.display ="block";
        loadingLogin.style.display = "none";
    
        overlay.onclick = function(){
            overlay.style.display= "none";
            form_login.style.display = "none";
        }
        }
    
    }

});




var testmoney = document.querySelector('.USD');

testmoney.onclick = function(){
    document.querySelector('.innerText').innerText = "USA";
}



$(".backk").onclick = function(){
    console.log("a");
}
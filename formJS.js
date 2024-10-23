var emailreg=/^[a-zA-Z]{3,}[0-9]{3}@(gmail|outlook|yahoo)\.com$/;
var paramail=document.getElementById('Pemail');
var parapass=document.getElementById ('Ppass')
function emailValidation(eve){
 let mail=eve.target.value
 if(emailreg.test(mail)){
    paramail.innerText="valid email"
}
else{
    paramail.innerText=" invalid email"
}}
paramail.style.color='red'

function passValidation(eve){
    let pass=eve.target.value
    if(pass.length>=4){
       parapass.innerText="valid password"
   }
   else{
       parapass.innerText=" invalid password"
   }}
   parapass.style.color='red'

   let usr=document.getElementsByTagName('input')[0 ]
   let pass=document.getElementsByTagName('input')[1]
   let email=document.getElementsByTagName('input')[2]
   let ch=document.getElementsByTagName('input')[3]
function login(){
    
   if (ch.checked==true){
    localStorage.setItem("username",usr.value)
    localStorage.setItem("password",pass.value)
    localStorage.setItem("email",email.value)
   }
   else{
    alert("not saving")
   }
}

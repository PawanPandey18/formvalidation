let firstName="";
let lastName="";
let dob="";
let gend="";
let pass="";
let conpass="";
let rese="";
let reg="";
let mail="";
let photos="";
let data=[];
let showdata=document.getElementById("show");
let firstnameError=document.getElementById("firstnameError");
let lastnameError=document.getElementById("lastnameError");
let emailError=document.getElementById("emailError");
let passwordError=document.getElementById("passwordError");


function firstname(a) {
    firstnameError.innerText="";

    firstName=a;

    console.log(firstName);
}
function lastname(a) {
    lastnameError.innerText="";
    lastName=a;
    console.log(a);
}
function dateofbirth(a) {
    dob=a;

    console.log(a);
}
function GENDSERS(a) {
    gend=a;
    console.log(a);
}
function Email(a) {
    emailError.innerText="";
    mail=a;
    console.log(a);
    
}
function Password(a) {
    passwordError.innerText="";
    pass=a;
    console.log(a);
}
function conformpass(a) {
    conpass=a;
    console.log(a);
}
function reset(a) {
    rese=a;
    console.log(a);
}
function photo(a) {
    photos=a;
    console.log(photos);  

}
function register(a) {

//     reg=a;
//     if (firstName.length>0 && mail.length>0 && pass.length>0 && lastName.length>0) {
//          if (pass.length<=8) {
//              passwordError.innerText='Password should not be less than 8 character';
//           }
//         else if(pass!==conpass) {
//             passwordError.innerText='password doesnot match'
//           }
//           else{

//         }
    
//     }
//     else{
//         if (firstName.length===0) {
//            firstnameError.innerText='first name can not be empty';
//         }
//         if (lastName.length===0) {
//             lastnameError.innerText='last name can not be empty';
//          }
//         if (mail.length===0) {
//             emailError.innerText='Email can not be empty';
//          }
//         if (pass.length===0) {
//             passwordError.innerText='password can not be empty';
//          }
        
         
//     }
    let variable={
        firstName:firstName,
        lastName:lastName,
        dob:dob,
        gend:gend,
        mail:mail,
        photos:photos
    }
data.push(variable)
showData();
    
}
function showData() {
    
    showdata.innerHTML='';
    data.map((val,i)=>{
        showdata.innerHTML+=`<div>${val.firstName}
        
        
        
        </div>`
    }
)
}
showData();
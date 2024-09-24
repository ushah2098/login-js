function Login() 
{
   let Username = document.getElementById("Username").value;
   let Password = document.getElementById("Password").value;
     
    if(Username == "Entri Elevate" &&  Password == "admin123")
    {   
        alert(`Login Successful`)
    }
     else{
         
         alert(`Username or Password is Invalid`)
     }
   }
   function forgetpass()
   {
        let forgetpass = prompt('Enter your email');
        
        alert(`verification code is send your email`)
        
   }
function validateForm() {
    var name = document.forms["loginForm"]["name"].value;
    var password = document.forms["loginForm"]["password"].value;
    if( name.indexOf("@")==-1){
        alert("Please enter valid email");
        return false;
    }
    else if(name.length<4){
        alert("Please enter valid email");
        return false;
    }
    else if (password.length<4) {
        alert("Please enter your password.");
        return false;
    }
    return true;
}
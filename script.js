function register(){

    let username =
        document.getElementById("regUsername").value;

    let password =
        document.getElementById("regPassword").value;

    if(username === "" || password === ""){
        alert("Please fill all fields");
        return;
    }

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registration Successful");

    window.location.href = "login.html";
}

function login(){

    let username =
        document.getElementById("loginUsername").value;

    let password =
        document.getElementById("loginPassword").value;

    let storedUser =
        localStorage.getItem("username");

    let storedPass =
        localStorage.getItem("password");

    if(username === storedUser &&
       password === storedPass){

        localStorage.setItem("loggedIn","true");

        window.location.href =
            "dashboard.html";
    }
    else{
        alert("Invalid Credentials");
    }
}

function logout(){

    localStorage.removeItem("loggedIn");

    window.location.href =
        "login.html";
}

if(window.location.pathname.includes("dashboard.html")){

    let status =
        localStorage.getItem("loggedIn");

    if(status !== "true"){

        window.location.href =
            "login.html";
    }
}
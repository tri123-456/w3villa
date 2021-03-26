
function submitForm(e){
    e.preventDefault();
    let name= document.forms["welcome"]["name"].value;
    //store name
    sessionStorage.setItem("name",name);
    location.href="quiz.html";
    
    

    
}
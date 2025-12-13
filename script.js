function bodyload(){
    document.querySelector(".btn").value="log in"
    // document.querySelector("img").src="./images/922028.jpg"
    document.querySelector(".bbb").value="Register"
    document.querySelector(".bbb").style.backgroundColor="Blue"
    total=document.getElementsByName("pay");
    res=document.getElementsByClassName('bttn');
    result=document.getElementsByTagName('h2');
    window.document.images[0].src="./images/922028.jpg"
    alert("Total number of heading tags :" + result.length)

};

let fundelete=()=>{
    if(confirm("are you sure?")==true){
        document.querySelector('h4').outerHTML="<p align='center' style='color :red ' >Message deleted</p>"
    }
    else{
        document.querySelector('h4').innerHTML="<font color='blue'>Delete was Cancelled</font>"
    }
}
let createalert=()=>{
    fn=prompt("enter folder name","new_folder")
    if (fn==null){
        document.querySelector('p').innerHTML =('you cancelled...')
    }
    else if(fn==""){
        document.querySelector('p').innerHTML=("please enter a folder name....")
    }
    else{
        document.querySelector('p').innerHTML+=("folder created : "+fn +"<br>")
    }


}

var cartItems = {};
function addCartItem(id){
    if(cartItems[id]==null)
    {
        cartItems[id]=0
    }
    cartItems[id]=cartItems[id]+1
}
function subCartItem(id){
    if(cartItems[id]==null)
    {
        cartItems[id]=0;
        return;
    }
    cartItems[id]=cartItems[id]-1
    if(cartItems[id]<0)
    {
        cartItems[id]=0
    }
   
}
function addText(str){
    var elem  =  document.getElementById("showItem")
    console.log(elem)
    elem.innerHTML =  elem.innerHTML +"<br>"+str;
}

function addCart(id){
    addCartItem(id)
    console.log(cartItems)
    addText("item : "+id+" , num : "+ cartItems[id])
    showSubButton(id)
}

function subCart(id){
    subCartItem(id)
    console.log(cartItems)
    addText("item : "+id+" , num : "+ cartItems[id])
    showAddButton(id)
}


function showAddButton(id){
    var elem  =   document.getElementById(id).getElementsByClassName("addButton")[0];
    elem.style.display ="block";
    var elem  =   document.getElementById(id).getElementsByClassName("subButton")[0];
    elem.style.display ="none";
}
function showSubButton(id){
    var elem  =   document.getElementById(id).getElementsByClassName("subButton")[0];
    console.log(elem.innerHTML)
    elem.style.display ="block";
    var elem  =   document.getElementById(id).getElementsByClassName("addButton")[0];
    elem.style.display ="none";
}
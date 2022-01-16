const color1 = document.getElementById("color1") 
const color2 = document.getElementById("color2")
const color3 = document.getElementById("color3")


color1.addEventListener("input",watchColorPicker, false);
color2.addEventListener("input",watchColorPicker, false);


function colorCode2RGB(colorCode0){

    var r=parseInt(colorCode0.substr(1,2),16);
    var g=parseInt(colorCode0.substr(3,2),16);
    var b=parseInt(colorCode0.substr(5,2),16);
    return [r,g,b];
}

function RGB2colorCode(rgb){
    function int2hex(hex){
        return ( '00' + hex.toString(16) ).slice( -2 );
    }
    return "#" + int2hex(rgb[0]) +  int2hex(rgb[1]) +  int2hex(rgb[2]) ;
}
function compsition0(c1,c2,type){
    switch(type){
        default:
            return Math.min(255,Math.floor((c2/c1)*255));
    }
}

function compsition(c10,c20,type){
    var f=compsition0;
    c1 = colorCode2RGB(c10);
    c2 = colorCode2RGB(c20);
    return RGB2colorCode([f(c1[0],c2[0],type) , f(c1[1],c2[1],type) , f(c1[2],c2[2],type)]);
}
function watchColorPicker(event) {
    color3.value = compsition(color1.value,color2.value,0);
}


document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.documentElement.style.width = '100%';
document.body.style.width = '100%';

var div = document.createElement( 'div' );
var div2 = document.createElement( 'div' );
var h1 = document.createElement( 'h1' );

//append all elements
document.body.appendChild( div );
div.appendChild( div2 );
div2.appendChild( h1 );
//set attributes for div
div.id = 'overLaySpeedRead';
div.style.position = 'fixed';
div.style.top = '0px';
div.style.left = '0px';
div.style.bottom = '0px';
div.style.right = '0px';
div.style.width = '100%';
div.style.height = '100%';
div.style.backgroundColor = 'rgba(0, 0, 0, 0.71)';

document.getElementById("overLaySpeedRead").addEventListener("click", function(){
    document.getElementById("overLaySpeedRead").outerHTML='';
});

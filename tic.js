function my_func(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1=document.getElementById("b1").value;
    b2=document.getElementById("b2").value;
    b3=document.getElementById("b3").value;
    b4=document.getElementById("b4").value;
    b5=document.getElementById("b5").value;
    b6=document.getElementById("b6").value;
    b7=document.getElementById("b7").value;
    b8=document.getElementById("b8").value;
    b9=document.getElementById("b9").value;
    if((b1=='x'||b1=='X')&&(b2=='x'||b2=='X')&&(b3=='x'||b3=='X')){
        document.getElementById('print').innerHTML="player X won";
        document.getElementById("b4").disabled=true; 
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert("x has won");

    }
   else if((b1=='x'||b1=='X')&&(b4=='x'||b4=='X')&&(b7=='x'||b7=='X')){
        document.getElementById('print').innerHTML="player X won";
        document.getElementById("b2").disabled=true; 
        document.getElementById("b3").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player x won');

    } 
   else if((b7=='x'||b7=='X')&&(b8=='x'||b8=='X')&&(b9=='x'||b9=='X')){
        document.getElementById('print').innerHTML="player X won";
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        window.alert('player x won');

    }
   else if((b3=='x'||b3=='X')&&(b6=='x'||b6=='X')&&(b9=='x'||b9=='X')){
        document.getElementById('print').innerHTML="player X won";
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b5").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        window.alert('player x won');

    }
   else if((b1=='x'||b1=='X')&&(b5=='x'||b5=='X')&&(b9=='x'||b9=='X')){
        document.getElementById('print').innerHTML="player X won";
        document.getElementById("b2").disabled=true; 
        document.getElementById("b3").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        window.alert('player x won');

    }
  else  if((b3=='x'||b3=='X')&&(b5=='x'||b5=='X')&&(b7=='x'||b7=='X')){
        document.getElementById('print').innerHTML="player X won";
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b4").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player x won');

    }
 else   if((b5=='x'||b5=='X')&&(b2=='x'||b2=='X')&&(b8=='x'||b8=='X')){
        document.getElementById('print').innerHTML="player X won";
        document.getElementById("b4").disabled=true; 
        document.getElementById("b1").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player x won');

    }
   else if((b4=='x'||b4=='X')&&(b5=='x'||b5=='X')&&(b6=='x'||b6=='X')){
        document.getElementById('print').innerHTML="player X won";
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player x won');

    }

   else if((b1=='o'||b1=='o')&&(b2=='o'||b2=='o')&&(b3=='o'||b3=='o')){
        document.getElementById('print').innerHTML="player o won";
        document.getElementById("b4").disabled=true; 
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player o won');

    }
    else if((b1='o'||b1=='o')&&(b4=='o'||b4=='o')&&(b7=='o'||b7=='o')){
        document.getElementById('print').innerHTML="player o won";
        document.getElementById("b2").disabled=true; 
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player o won');

    }
    else if((b7=='o'||b7=='o')&&(b8=='o'||b8=='o')&&(b9=='o'||b9=='o')){
        document.getElementById('print').innerHTML="player o won";
        document.getElementById("b4").disabled=true; 
        document.getElementById("b5").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b1").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b2").disabled=true;
        window.alert('player o won');

    }
    else if((b6=='o'||b6=='o')&&(b9=='o'||b9=='o')&&(b3=='o'||b3=='o')){
        document.getElementById('print').innerHTML="player o won";
        document.getElementById("b4").disabled=true; 
        document.getElementById("b5").disabled=true;
        document.getElementById("b1").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b2").disabled=true;
        window.alert('player o won');

    }
    else if((b1=='o'||b1=='o')&&(b5=='o'||b5=='o')&&(b9=='o'||b9=='o')){
        document.getElementById('print').innerHTML="player o won";
        document.getElementById("b4").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b3").disabled=true;
        window.alert('player o won');

    }
    else if((b5=='o'||b5=='o')&&(b7=='o'||b7=='o')&&(b3=='o'||b3=='o')){
        document.getElementById('print').innerHTML="player o won";
        document.getElementById("b4").disabled=true; 
        document.getElementById("b1").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b2").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player o won');

    }

    else if((b5=='o'||b5=='o')&&(b2=='o'||b2=='o')&&(b8=='o'||b8=='o')){
        document.getElementById('print').innerHTML="player o won";
        document.getElementById("b4").disabled=true; 
        document.getElementById("b1").disabled=true;
        document.getElementById("b6").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player o won');

    }
    else if((b4=='o'||b4=='o')&&(b5=='o'||b5=='o')&&(b6=='o'||b6=='o')){
        document.getElementById('print').innerHTML="player o won";
        document.getElementById("b1").disabled=true; 
        document.getElementById("b2").disabled=true;
        document.getElementById("b3").disabled=true;
        document.getElementById("b7").disabled=true;
        document.getElementById("b8").disabled=true;
        document.getElementById("b9").disabled=true;
        window.alert('player o won');

    }
//checking of player
else if((b1=="X"||b1=='o')&&(b2=='X'||b2=='o')&&(b3=='X'||b3=='o')&&(b4=='X'||b4=='o')&&(b5=='X'||b6=='o')&&(b6=='X'||b6=='o')&&(b7=='X'||b7=='o')&&(b8=='X'||b8=='o')&&(b9=='X'||b9=='o'))
{
document.getElementById('print').innerHTML="match tie";
window.alert('match tie');
}
else {
if(flag==1){
document.getElementById('print').innerHTML="player x turn";

}
else{
document.getElementById('print').innerHTML="player o turn";
}
}
}
//function to reset game
function my_func2(){
location.reload();
document.getElementById('b1').value='';
document.getElementById("b2").value='';
document.getElementById("b3").value='';
document.getElementById("b4").value='';
document.getElementById("b5").value='';
document.getElementById("b6").value='';
document.getElementById("b7").value='';
document.getElementById("b8").value='';
document.getElementById("b9").value='';
}
//check turn
flag=1;
function my_func3(){
if(flag==1){
document.getElementById('b1').value="X";
document.getElementById('b1').disabled=true;
flag=0;
}
else{
document.getElementById('b1').value="0";
document.getElementById('b1').disabled=true;
flag=1;
}
}
function my_func4(){
if(flag==1){
document.getElementById('b2').value="X";
document.getElementById('b2').disabled=true;
flag=0;
}
else{
document.getElementById('b2').value="0";
document.getElementById('b2').disabled=true;
flag=1;
}
}
function my_func5(){
if(flag==1){
document.getElementById('b3').value="X";
document.getElementById('b3').disabled=true;
flag=0;
}
else{
document.getElementById('b3').value="0";
document.getElementById('b3').disabled=true;
flag=1;
}
}
function my_func6(){
if(flag==1){
document.getElementById('b4').value="X";
document.getElementById('b4').disabled=true;
flag=0;
}
else{
document.getElementById('b4').value="0";
document.getElementById('b4').disabled=true;
flag=1;
}
}
function my_func7(){
if(flag==1){
document.getElementById('b5').value="X";
document.getElementById('b5').disabled=true;
flag=0;
}
else{
document.getElementById('b5').value="0";
document.getElementById('b5').disabled=true;
flag=1;
}
}
function my_func8(){
if(flag==1){
document.getElementById('b6').value="X";
document.getElementById('b6').disabled=true;
flag=0;
}
else{
document.getElementById('b6').value="0";
document.getElementById('b6').disabled=true;
flag=1;
}
}

function my_func9(){
if(flag==1){
document.getElementById('b7').value="X";
document.getElementById('b7').disabled=true;
flag=0;
}
else{
document.getElementById('b7').value="0";
document.getElementById('b7').disabled=true;
flag=1;
}
}

function my_func10(){
if(flag==1){
document.getElementById('b8').value="X";
document.getElementById('b8').disabled=true;
flag=0;
}
else{
document.getElementById('b8').value="0";
document.getElementById('b8').disabled=true;
flag=1;
}
}
function my_func11(){
if(flag==1){
document.getElementById('b9').value="X";
document.getElementById('b9').disabled=true;
flag=0;
}
else{
document.getElementById('b9').value="0";
document.getElementById('b9').disabled=true;
flag=1;
}
}

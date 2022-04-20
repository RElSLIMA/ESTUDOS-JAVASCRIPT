var a = 10;
var b = 20;
var c = null;

document.write("A: " + a + "<br></br>");
document.write("B: " + b + "<br></br>");
document.write("C: " + c + "<br></br>");

document.write("<hr></hr>");

c = a;
a = b;
b = c;
c = null;

document.write("A: " + a + "<br />");
document.write("B: " + b + "<br />");
document.write("C: " + c + "<br />");

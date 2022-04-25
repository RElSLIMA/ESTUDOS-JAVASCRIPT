var data = new Date();

document.write(
  data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
);

document.write("<br>");

document.write("<br>" + data.getDate());
document.write("<br>" + (data.getMonth() + 1));
document.write("<br>" + data.getFullYear());

document.write("<br>");
document.write("<hr>");

document.write("<br>" + data.toString());
data.setDate(data.getDate() + 1);
document.write("<br>");
document.write("<br>" + data.toString());

document.write("<br>");
document.write("<hr>");

var data2 = new Date();

document.write("<br>" + data2.toString());
data2.setDate(data2.getDate() - 1);
document.write("<br>");
document.write("<br>" + data2.toString());

document.write("<br>");
document.write("<hr>");

var data3 = new Date();

document.write("<br>" + data3.toString());
data3.setMonth(data3.getMonth() - 1);
document.write("<br>");
document.write("<br>" + data3.toString());

document.write("<br>");
document.write("<hr>");

var data4 = new Date();

document.write("<br>" + data4.toString());
data4.setFullYear(data4.getFullYear() - 1);
document.write("<br>");
document.write("<br>" + data4.toString());

var uri = "http://storage.fshare.vn/Test-vechai/1497838974-Iris-zero-chap-37-";
var mc = document.getElementsByClassName("manga-container")[0];
var items = mc.getElementsByTagName("img");
var newlist = [7,11,28,22,3,21,2,20,13,27,15,19,9,12,17,18,16,6,8,10,24,26,14,25,5,23,1,4];
for(var i=0;i<28;i++)items[i].setAttribute("src",uri + ("0" + newlist[i]).slice(-2) +".jpg");

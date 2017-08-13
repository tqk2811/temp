var content = document.getElementById("content");
var items = content.getElementsByTagName("img");
var newlist = [7,11,28,22,3,21,2,20,13,27,15,19,9,12,17,18,16,6,8,10,24,26,14,25,5,23,1,4];
var new_arr = [];
for(var i = 0; i < 28;i++) new_arr.push(items[newlist[i]-1]);
for(var i = 0; i < 28;i++) content.removeChild(items[0]);
for(var i = 0; i < 28;i++) content.appendChild(new_arr[i]);

// content.js
var str = document.documentElement.innerHTML;
for (i = 0; i < 400; i++) { 
    var str = str.replace("Donald Trump", "A man with small hands");
    var str = str.replace("Donald J Trump", "A man with small hands");
    var str = str.replace("Donald J. Trump", "A man with small hands");
    var str = str.replace("Donald John Trump", "A man with small hands");
    var str = str.replace("Trump", "Drumpf");
}
document.documentElement.innerHTML = str;
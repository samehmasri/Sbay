
var username = prompt('please enter your name');
alert('Hello ' + username + ' Welcome to our site');
var time = prompt('what time is it in your side in the world');
if (time < 12) {
    message = 'good morning'
} else {
    message = 'good afternoon'
};

alert(message);

var y = confirm('do you like our site');
console.log(y);
if (y == true) {
    alert('thank you so much');
} else {
    alert('thank you');
}
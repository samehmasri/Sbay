
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
var carName = prompt('Eneter your favorite car name')
console.log(carName)

while (carName === '' || carName === null) {
    carName = prompt('Enter your favorite car name');
}

console.log(carName);


var c = prompt('Eneter from 1 to 5')
console.log(c)

while (c === '' || c === null) {
    c = prompt('Enter your favorite car name');
}

for(var i = 1; i<=c; i++){
    document.write("<img src='https://images.bunches.co.uk/products/large/flowers-for-a-year-1.jpg'>")
}



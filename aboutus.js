
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

carName = getWrongInformation(carName,'Eneter your favorite car name')
//while (carName === undefined || carName === '' || carName === null) {
//    carName = prompt('Enter your favorite car name');
//}

console.log(carName);


var c = prompt('Eneter from 1 to 5')
console.log(c)

c = getWrongInformation(c, 'Enter your favorite car name');
//while (c === undefined || c === '' || c === null) {
//    c = prompt('Enter your favorite car name');
//}

for (var i = 1; i <= c; i++) {
    document.write("<img src='https://images.unsplash.com/photo-1527247043589-98e6ac08f56c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max'>")
}


function getWrongInformation(userInput, message) {
    console.log("hello I am inside the function");
    console.log("userInput", userInput);
    console.log("message", message);
    while (userInput === undefined || userInput === '' || userInput === null) {
        userInput = prompt(message);
    }
    return userInput;
}
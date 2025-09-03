// Part 1: Variables & Conditionals
const checkAgeBtn = document.getElementById('checkAgeBtn');
checkAgeBtn.addEventListener('click', function() {
    let age = parseInt(document.getElementById('userAge').value); 
    let result = '';

    // Conditional statement
    if (age >= 18) {
        result = 'You are an adult.';
    } else if (age > 0) {
        result = 'You are a minor.';
    } else {
        result = 'Please enter a valid age.';
    }

    document.getElementById('ageResult').textContent = result;
});

// Function 1: Greet user
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript mastery.`;
}

// Function 2: Sum of two numbers
function sumNumbers(a, b) {
    return a + b;
}

// DOM event for greeting
const greetBtn = document.getElementById('greetBtn');
greetBtn.addEventListener('click', function() {
    const greetingMsg = greetUser('CodeVirtuoso');
    document.getElementById('greeting').textContent = greetingMsg;
});

// Part 3: Loops

const showNumbersBtn = document.getElementById('showNumbersBtn');
showNumbersBtn.addEventListener('click', function() {
    let output = '';

    // Loop 1: for loop
    for (let i = 1; i <= 5; i++) {
        output += i + ' ';
    }

    // Loop 2: while loop
    let j = 1;
    output += '| While loop: ';
    while (j <= 5) {
        output += j + ' ';
        j++;
    }

    document.getElementById('numbers').textContent = output;
});


// Part 4: DOM Interactions
// 1: Change background color
const changeColorBtn = document.getElementById('changeColorBtn');
changeColorBtn.addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightblue';
});

// 2: Add item to list
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

addItemBtn.addEventListener('click', function() {
    const newItem = document.createElement('li'); // Create element
    newItem.textContent = 'New list item';        // Set text
    itemList.appendChild(newItem);                // Append to DOM
});

// DOM Interaction 3: Toggle list visibility
itemList.addEventListener('click', function() {
    if (itemList.style.display === 'none') {
        itemList.style.display = 'block';
    } else {
        itemList.style.display = 'none';
    }
});

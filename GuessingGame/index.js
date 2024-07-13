let answer = 34;
let tries = [];
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    let guess = document.getElementById('input').value;
    document.getElementById('result').style.visibility = 'visible';
    tries.push(guess);
    if (guess == answer) {
        document.getElementById('result').textContent = 'Correct Guess!!!';
        document.getElementById('result').style.backgroundColor = '#00ff71';
        document.getElementById('input').value = '';
        if (tries.length < 7) {
            document.getElementById('result').textContent = 'Less than 7 tries. Good job!';
        }
    } else if (guess > answer) {
        document.getElementById('result').style.backgroundColor = '#ff0000';
        document.getElementById('result').textContent = 'This number is too high. Try again! Tries: '+ tries.length;
        document.getElementById('input').value = '';
        document.getElementById('tries').textContent = tries;

    } else {
        document.getElementById('result').style.backgroundColor = '#ff0000';
        document.getElementById('result').textContent = 'This number is too low. Try again! Tries: '+ tries.length;
        document.getElementById('input').value = '';
        document.getElementById('tries').textContent = '[' + tries + ']';

    }
});
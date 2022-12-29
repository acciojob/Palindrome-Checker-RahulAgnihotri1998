// complete the given function

function palindrome(str) {
    // Remove all non-alphanumeric characters and convert the string to lowercase
    str = str.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if the string is a palindrome by comparing it to its reversed version
    return str === str.split('').reverse().join('');
}

module.exports = palindrome;

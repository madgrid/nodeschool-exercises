// Lesson 1
/** module.exports = function upperCaser(input) {
    return input.toUpperCase();
};
 **/

// Lesson 2
/** module.exports = function repeat(operation, num) {
    for (var i = 0; i < num; i++) {
        return operation();
    }
};
 **/

// Lesson 3
/** function doubleAll(numbers) {

    var result = [];

    numbers.map(function(x) {
        result.push(x * 2);
    });
    return result;
}

module.exports = doubleAll;
 **/
// diff /tmp/dev-off /tmp/dev-on
//  ls /dev > /tmp/dev-off
// ls /dev > /tmp/dev-on

// Lesson 4
/** function getShortMessages(messages) {
    var result = [];

    messages.filter(function(x) {
        if (x.message.length < 50) {
            result.push(x.message);
        }
    });

    return result;
}

module.exports = getShortMessages;
**/

// Lesson 5
function checkUsersValid(goodUsers) {
    // Solution
}

module.exports = checkUsersValid;

let receivesAFunction = function(callback) {
    return callback();
}
let returnsANamedFunction = function() {
    return function newF() {};
}
let returnsAnAnonymousFunction = function() {
    return function() {};;
}
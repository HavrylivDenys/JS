var names = ['Hello', 'World', 'Denys', 'Viktor', 'Roman', 'Marria'];
var getRandomInt = function (max) {
    if (max === void 0) { max = names.length; }
    return Math.floor(Math.random() * max);
};
var handleClick = function (e) {
    var element = e.target;
    element.innerText = names[getRandomInt(names.length)];
};
var main = function () {
    var element = document.getElementById('header');
    element === null || element === void 0 ? void 0 : element.addEventListener('click', handleClick);
};
main();

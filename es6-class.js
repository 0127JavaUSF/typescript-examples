var Sheep = (function () {
    function Sheep(hasWool, woolColor) {
        this.hasWool = hasWool;
        this.woolColor = woolColor;
    }
    Sheep.prototype.speak = function () {
        console.log('baa');
    };
    return Sheep;
})();

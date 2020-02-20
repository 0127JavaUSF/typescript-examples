class Sheep {
    hasWool: boolean;
    woolColor: string;

    constructor(hasWool: boolean, woolColor: string) {
        this.hasWool = hasWool;
        this.woolColor = woolColor;
    }

    speak() {
        console.log('baa');
    }
}
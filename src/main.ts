import Phaser from "phaser";
import HelloWorld from "./scene/test/HelloWorld";

const game = new Phaser.Game({
    width: 256,
    height: 256,
    pixelArt: true,
    parent: "content",
    scale: {
        mode: Phaser.Scale.FIT
    },
    scene: [
        HelloWorld
    ]
})


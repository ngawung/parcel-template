export default class HelloWorld extends Phaser.Scene {

    constructor() {
        super({key: "TEST_HelloWorld"})
    }

    public create() {
        console.log("Hello World!");

        this.add.text(10, 10, "Hello World", {fontSize: "24px"});
    }

    override update(time:number, dt:number):void {
        super.update(time, dt)
    }

}
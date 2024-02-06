import MainTest from "./MainTest.js";

export default class Test extends MainTest {
    constructor(name) {
        super(name);
    }
    sayHello() {
        return "hello I'm " + super.sayHello();
    }
}
import MainTest from "./MainTest.js";

export default class Test2 extends MainTest {
    constructor(name) {
        super(name);
    }
    sayAge() {
        return "hello I'm " + super.sayAge();
    }
}
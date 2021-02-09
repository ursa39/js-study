// class declaration
class Test {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

const test = new Test('Ursa');
test.hello();
export class God{
/**
 * @returns Human[]
 */
  static create(){
    // code
  }
}

export class Human{
  name: string;
 
  constructor(name: string) {
    this.name = name;
  }
}

export class Man extends Human{
  this.name = "Adam";
}

export class Woman extends Human{
  this.name = "Eve";
}

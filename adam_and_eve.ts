export class God{
/**
 * @returns Human[]
 */
  static create(){
    return [new Man, new Woman];
  }
}

export class Human{
  //name: string;
  //constructor(name: string) {
    //this.name = name;
  //}
}

export class Man extends Human{
}

export class Woman extends Human{
}


// simple version
export class Human {}

export class Woman extends Human {}

export class Man extends Human {}

export class God {
  static create() {
    return [new Man(), new Woman()];
  }
}



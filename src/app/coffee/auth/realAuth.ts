import {AbstrAuth} from './abstrAuth';

export class RealAuth extends AbstrAuth {
  private dataBase = {};
  Logination(user): boolean {
    return false;
  }

  Registration(user): boolean {
    if (this.dataBase[user.username]) {
      return false;
    }
    this.dataBase[user.username] = user;
    console.log(this.dataBase);
    return true;
  }
}

export class User {
  private name: string;
  private password: string;
  constructor(name: string, password: string) {
    this.name = name;
    this.password = password;
  }
}

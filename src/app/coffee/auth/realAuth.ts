import {AbstrAuth} from './abstrAuth';

export class RealAuth extends AbstrAuth {
  private dataBase = {};
  login(user): boolean {
    return this.dataBase[user.username] && this.dataBase[user.username].password === user.password;
  }

  registration(user): boolean {
    if (this.dataBase[user.username]) {
      return false;
    }
    this.dataBase[user.username] = user;
    console.log(this.dataBase);
    return true;
  }
}
